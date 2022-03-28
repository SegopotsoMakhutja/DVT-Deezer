import { createContext, useState } from "react";

const ArtistDataContext = createContext<any>({
    artistData: [{}],
    updateArtistData: () => null
});

const ArtistDataProvider = ({ children }: any) => {
    const [artistData, setArtistData] = useState([{}]);

    const updateArtistData = (data: any) => {
        setArtistData(data);
    }

    return (
        <ArtistDataContext.Provider value={{ artistData, updateArtistData }}>
            {children}
        </ArtistDataContext.Provider>
    )
}

export { ArtistDataContext, ArtistDataProvider };