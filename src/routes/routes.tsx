import { ReactLocation } from "@tanstack/react-location";
import { Home } from '../views';

// Set up a ReactLocation instance
export const location = new ReactLocation();

// create a routes object
export const routes = [
    { path: "/", element: <Home /> },
    // { path: "/search/results/:search", element: <SearchResults /> },
    // { path: "/trending", element: <Trending /> },
    // { path: "/explore/artist/:id", element: <Artist /> },
    // { path: "/album/details/:id", element: <Album /> },
]