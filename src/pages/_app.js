import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/source-sans-pro";
const theme = extendTheme({
  fonts: {
    heading: `Source Sans Pro', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
