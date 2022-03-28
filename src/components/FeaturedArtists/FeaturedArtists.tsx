import { Flex, Image, Grid, Box, Heading } from "@chakra-ui/react";
import axios from 'axios'
import { useNavigate } from "@tanstack/react-location";
import { IFeaturedArtistsProps, IFeaturedArtist } from "./FeatureArtist.types";

const { REACT_APP_API_HOST, REACT_APP_PROXY_HOST } = process.env;

const FeaturedArtists = ({ featureArtists }: IFeaturedArtistsProps) => {

    const navigate = useNavigate()

    return (
        <Grid templateColumns='repeat(2, 0.7fr)' gap={.5}>
            {featureArtists.map((artist: IFeaturedArtist, i: number) => {
                return (
                    <Flex
                        position={"relative"}
                        _hover={{ bg: 'teal.500' }}
                        key={i}
                        flex={1}
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            axios.get(`${REACT_APP_PROXY_HOST}/${REACT_APP_API_HOST}/search?q=${artist.artistName}`)
                                .then(() => {
                                    navigate({ to: `explore/artist/${artist.id}`, replace: false })
                                })
                        }}
                    >
                        <Image src={artist.backgroundImage} fallbackSrc='https://via.placeholder.com/500' />
                        <Box
                            position={"absolute"}
                            top={"50%"}
                            left={"50%"}
                            transform={`translate(-50%, -50%)`}
                        >
                            <Heading as='h3' size='lg' color={artist.accentColor}>
                                {artist.artistName}
                            </Heading>
                        </Box>
                    </Flex>
                )
            })}
        </Grid>
    )
}

export default FeaturedArtists;