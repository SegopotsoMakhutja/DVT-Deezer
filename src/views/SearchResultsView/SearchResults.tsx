import { PageWrap } from "components/layouts";
import { Grid, Divider } from "@chakra-ui/react";
import { HeaderTitle } from "components/Header/HeaderTitle";
import { Loader } from "components/Loader";
import { ArtistDataContext } from 'context/ArtistContextProvider';
import { useContext } from "react";
import { ArtistCard } from "components/Card/ArtistCard";

const SearchResults = () => {
    const { artistData } = useContext(ArtistDataContext);

    return (
        <PageWrap
            title="Search Results"
            overflowX={"hidden"}
            w={"full"}
            alignItems={"center"}
        >
            <HeaderTitle title="Search Results" isHome={false} />
            <Divider mb={{ base: "2rem", md: "2rem" }} />

            {!artistData ? <Loader /> : null}

            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
                {artistData.artistDetails ? artistData.artistDetails.map((artist: any) => {
                    return (
                        <ArtistCard
                            name={artist.name}
                            nbFans={artist.nb_fan}
                            picture={artist.picture_medium}
                            artistId={artist.id}
                        />
                    )
                }) : null}
            </Grid>
        </PageWrap>
    );
};

export default SearchResults;