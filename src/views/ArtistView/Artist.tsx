/* eslint-disable no-template-curly-in-string */
import { PageWrap } from "components/layouts";
import { ArtistDetails } from "components/ArtistDetails";
import { Flex, Divider, Box, Heading, Grid } from "@chakra-ui/react";
import { HeaderTitle } from "components/Header/HeaderTitle";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMatch } from "@tanstack/react-location";
import { Loader } from "components/Loader";
import { AlbumCard } from "components/Card/AlbumCard";

const { REACT_APP_API_HOST, REACT_APP_PROXY_HOST } = process.env;

const Artist = () => {
    const { params: { id } } = useMatch();
    const [artistAlbums, setArtistAlbums] = useState<any>({})

    const getDiscography = () => {
        axios.get(`${REACT_APP_PROXY_HOST}/${REACT_APP_API_HOST}/artist/${id}/albums`).then((res) => {
            setArtistAlbums(res.data);
        })
    }

    useEffect(() => {
        getDiscography()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageWrap
            title="Explore"
            overflowX={"hidden"}
            overflowY={"auto"}
            alignItems={'center'}
        >
            <HeaderTitle title={'Explore Artist'} isHome={false} />
            <Flex flexDir={"column"} flex={1} alignSelf={"center"} justifyContent={"space-around"} >
                <Divider w={"Full"} m={{ base: 2, md: 4 }} />
                <ArtistDetails artistId={id} />
                <Divider w={"Full"} m={{ base: 2, md: 4 }} />
                <Heading as='h3' size='lg' alignSelf={"center"}>
                    Albums
                </Heading>
                <Box display={{ base: "none", md: "flex" }}>
                    {!artistAlbums.data ? <Loader /> : null}
                    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }} gap={4}>
                        {/* todo: refactor and fix types to avoid this check */}
                        {artistAlbums.data && artistAlbums.data.map((album: any) => {
                            return (
                                <AlbumCard
                                    key={album.id}
                                    name={album.title}
                                    title={album.release_date}
                                    albumArt={album.cover_medium}
                                    albumId={album.id}
                                />
                            )
                        })}

                    </Grid>
                </Box>
            </Flex>
        </PageWrap>
    );
};

export default Artist;