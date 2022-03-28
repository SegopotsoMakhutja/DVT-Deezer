import { theme, ChakraProvider } from "@chakra-ui/react"
import { Router, Outlet } from "@tanstack/react-location";
import { location, routes } from "routes/routes";
import { HelmetProvider } from 'react-helmet-async';

// helmet context
const helmetContext = {};

export const App = () => (
  <ChakraProvider theme={theme}>
    <HelmetProvider context={helmetContext}>
      <Router location={location} routes={routes}>
        <Outlet />
      </Router>
    </HelmetProvider>
  </ChakraProvider>
)
