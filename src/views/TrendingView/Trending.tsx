import { useState, useEffect } from "react";
import axios from 'axios';
import { Grid, Divider } from "@chakra-ui/react";

import { PageWrap, AlbumCard, HeaderTitle, Loader } from "components";

const { REACT_APP_API_HOST, REACT_APP_PROXY_HOST } = process.env;

const Trending = () => {

    const [trendingCharts, setTrendingCharts] = useState<any>({})

    const getTrendingCharts = () => {
        axios.get(`${REACT_APP_PROXY_HOST}/${REACT_APP_API_HOST}/chart/0`).then((res) => {
            setTrendingCharts(res.data);
        })
    }

    useEffect(() => {
        getTrendingCharts()
    }, [])

    return (
        <PageWrap
            title="Trending Charts"
            overflowX={"hidden"}
            alignItems={"center"}
        >
            <HeaderTitle title="Trending Charts" isHome={false} />
            <Divider mb={{ base: "0.5rem", md: "2rem" }} />

            {!trendingCharts.albums ? <Loader /> : null}
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' }} gap={6}>
                {/* TODO: refactor and fix types to avoid this check */}
                {trendingCharts.albums && trendingCharts.albums.data ? trendingCharts.albums.data.map((album: any) => {
                    return (
                        <AlbumCard
                            key={album.id}
                            name={album.artist.name}
                            title={album.title}
                            albumArt={album.cover_medium}
                            albumId={album.id}
                        />
                    )
                }) : null}
            </Grid>
        </PageWrap>
    );
};

export default Trending;