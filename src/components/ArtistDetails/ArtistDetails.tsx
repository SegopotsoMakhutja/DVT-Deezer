import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Image,
    Text,
    useColorModeValue,
    Container,
    Flex,
    IconButton,
} from '@chakra-ui/react'
import { FiPlayCircle } from 'react-icons/fi';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { formatDuration } from 'utils/helpers';
import { Loader } from 'components/Loader';

const { REACT_APP_API_HOST, REACT_APP_PROXY_HOST } = process.env;

const ArtistDetails = ({ artistId }: { artistId: string }) => {
    const bg = useColorModeValue("white", "gray.800")

    const [topTracks, setTopTracks] = useState<any>({})
    const [coverImage, setCoverImage] = useState('')

    const getDiscography = () => {
        axios.get(`${REACT_APP_PROXY_HOST}/${REACT_APP_API_HOST}/artist/${artistId}/top`).then((res) => {
            setTopTracks(res.data);
            setCoverImage(`https://e-cdns-images.dzcdn.net/images/cover/${res.data.data['0'].md5_image}/500x500-000000-80-0-0.jpg`);
        })
    }

    useEffect(() => {
        getDiscography()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container maxW={'4xl'}>
            <Flex
                flexDir={"column"}
                flex={1}
            >
                {!topTracks.data ? <Loader /> : null}
                <Flex
                    position={"relative"}
                    flexDir={"row"}
                    w={"full"}
                    flex={1}
                >
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={coverImage}
                        fallbackSrc={'https://via.placeholder.com/500x500'}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                    />
                    <Table variant='simple' bg={bg} shadow="xl" size={"md"}>
                        <Thead>
                            {/* 
                            this text shouldn't be here, for accessibility reasons.
                            sacrificing accessibility for appearance
                            throws a warning in the console.
                            */}
                            <Text fontSize={"2xl"} fontWeight={"600"} p={{ base: 2, md: 4 }}>Top Tracks</Text>
                            <Tr>
                                <Th> Track Title </Th>
                                <Th> Duration </Th>
                                <Th> </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {topTracks.data ? topTracks.data.map((track: any, i: number) => {
                                return (
                                    <Tr
                                        key={i + track.title}
                                        _hover={{
                                            transform: 'translateY(-4px)',
                                            boxShadow: 'xl',
                                        }}
                                    >
                                        <Td>{track.title}</Td>
                                        <Td color={'blue.300'}> {formatDuration(track.duration)} </Td>
                                        <Td>
                                            <IconButton
                                                variant="ghost"
                                                aria-label="play track"
                                                icon={<FiPlayCircle color="B222222" />}
                                            />
                                        </Td>
                                    </Tr>
                                )
                            }) : null}
                        </Tbody>
                    </Table>
                </Flex>
            </Flex>

        </Container>
    )
}

export default ArtistDetails;