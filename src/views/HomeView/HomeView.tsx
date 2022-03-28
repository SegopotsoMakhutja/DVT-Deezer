import { PageWrap, HeaderTitle, FeaturedArtists } from "components";
import { Divider, Heading, Flex } from "@chakra-ui/react";
import FeaturedArtistData from "./FeaturedArtist.json";

const artists = FeaturedArtistData

const Home = () => {
    const marginBottom = { base: "0.5rem", md: "2rem" };

    return (
        <PageWrap title="Home" overflow={"hidden"}
            alignItems={"center"}
        >
            <HeaderTitle isHome title="Welcome to the Home of Music" />
            <Divider mb={marginBottom} />

            <Heading as='h3' size='lg' mb={marginBottom}>
                Featured Artists
            </Heading>
            <Flex w={"full"} justifyContent={"center"} alignItems="center">
                <FeaturedArtists featureArtists={artists} />
            </Flex>
        </PageWrap>
    );
};

export default Home;