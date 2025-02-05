import { Box, Flex, FlexProps, useColorMode } from '@chakra-ui/react';
import { useEffect, ReactNode } from 'react';
import * as amplitude from '@amplitude/analytics-browser';

import { Navbar } from './Navbar';
import { useReportStore } from '../../utils';
import { ReportContextBar } from '../Reports';

interface Props extends FlexProps {
  children: ReactNode;
  isSingleReport: boolean;
}

export function Main({ children, isSingleReport, ...props }: Props) {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.50', dark: 'gray.900' };
  const color = { light: 'black', dark: 'white' };

  useEffect(() => {
    const API_KEY = window.PIPERIDER_METADATA.amplitude_api_key;
    const USER_ID = window.PIPERIDER_METADATA.amplitude_user_id;

    if (API_KEY) {
      amplitude.init(API_KEY, USER_ID);
    }
  }, []);

  const { rawData } = useReportStore.getState();
  const fallback = rawData.input ?? rawData.base;
  let gitBranch = rawData.base?.datasource.git_branch;
  if (gitBranch && !isSingleReport && rawData.input?.datasource.git_branch) {
    gitBranch = `${gitBranch} ↔ ${rawData.input?.datasource.git_branch}`;
  }

  return (
    <Flex
      direction="column"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      minHeight="100vh"
    >
      <Navbar isSingleReport={isSingleReport} />

      <Box position={'sticky'} top={0} bg={bgColor[colorMode]} zIndex="banner">
        <ReportContextBar
          datasource={fallback?.datasource.name}
          version={fallback?.version}
          gitBranch={gitBranch}
          px="96px"
          showProjectInfo
        ></ReportContextBar>
      </Box>

      <Box bg={bgColor[colorMode]} color={color[colorMode]}>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          height={'100%'}
          mx="80px"
          {...props}
        >
          {children}
        </Flex>
      </Box>
    </Flex>
  );
}
