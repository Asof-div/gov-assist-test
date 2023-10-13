import './App.css';
import React from 'react';
import Routes from './routes';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme,
} from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})


function App() {
    return (
        <ChakraProvider theme={theme}>
            <Routes />	
        
        </ChakraProvider>
    );
}

export default App;
