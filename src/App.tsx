import { theme, ChakraProvider } from "@chakra-ui/react"
import { Router, Outlet } from "@tanstack/react-location";
import { location, routes } from "./routes/routes";
import SidebarWithHeader from "components/Sidebar/Sidebar"
import { HelmetProvider } from 'react-helmet-async';
import { ArtistDataProvider } from "context/ArtistContextProvider";
// helmet context
const helmetContext = {};

export const App = () => (
  <ChakraProvider theme={theme}>
    <HelmetProvider context={helmetContext}>
      <ArtistDataProvider>
        <Router location={location} routes={routes}>
          <SidebarWithHeader>
            <Outlet />
          </SidebarWithHeader>
        </Router>
      </ArtistDataProvider>
    </HelmetProvider>
  </ChakraProvider>
)
