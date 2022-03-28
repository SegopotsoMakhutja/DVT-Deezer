import { theme, ChakraProvider } from "@chakra-ui/react"
import { Router, Outlet } from "@tanstack/react-location";
import { location, routes } from "routes/routes";
import { HelmetProvider } from 'react-helmet-async';
import { SidebarWithHeader } from "components/Sidebar";

// helmet context
const helmetContext = {};

export const App = () => (
  <ChakraProvider theme={theme}>
    <HelmetProvider context={helmetContext}>
      <Router location={location} routes={routes}>
        <SidebarWithHeader>
          <Outlet />
        </SidebarWithHeader>
      </Router>
    </HelmetProvider>
  </ChakraProvider>
)
