import { ChakraProvider } from '@chakra-ui/react';
import DefaultTheme from '../themes/Default/Default';
import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module/dist/TagManager';
import '@fontsource/nunito/200.css';
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
import '@fontsource/nunito/900.css';
import '@fontsource/press-start-2p/400.css';
import '../style.global.css';
import { GTM_ID } from '../config';
import ReactGA from 'react-ga4';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { setWeb3, getWeb3 } from "../web3";

import { getChainID } from '../config';

interface WebsiteProps {
  Component: React.FunctionComponent;
  pageProps: any;
}

const supportedChainIds = [1666600000, 1666700000];
const connectors = {
  injected: {},
}

function getLibrary(provider, connector) {
  const _web3 : any = new Web3(provider);
  setWeb3(_web3);
  return _web3;
}

const Website: React.FunctionComponent<WebsiteProps> = ({
  Component,
  pageProps,
}: WebsiteProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });
    ReactGA.initialize('G-VV5KC401XE');
    ReactGA.send('pageview');
  }, []);

  const _chainID : any = getChainID();

  return (
    <ChakraProvider theme={DefaultTheme}>
      <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
      </Web3ReactProvider >
    </ChakraProvider>
  );
};

export default Website;
