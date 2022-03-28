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
import axios from 'axios';
import { Loader } from 'components';
import { FiPlayCircle } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { formatDuration } from 'utils/helpers';

const { REACT_APP_API_HOST, REACT_APP_PROXY_HOST } = process.env;

const AlbumDetails = ({ albumId }: { albumId: string }) => {
    const bg = useColorModeValue("white", "gray.800")

    const [albumTracks, setAlbumTracks] = useState<any>({})
    const [coverImage, setCoverImage] = useState('')

    const getAlbumTracks = () => {
        axios.get(`${REACT_APP_PROXY_HOST}/${REACT_APP_API_HOST}/album/${albumId}/tracks`).then((res) => {
            setAlbumTracks(res.data);
            setCoverImage(`https://e-cdns-images.dzcdn.net/images/cover/${res.data.data['0'].md5_image}/500x500-000000-80-0-0.jpg`);
        })
    }

    useEffect(() => {
        getAlbumTracks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container maxW={'7xl'}>
            <Flex
                flexDir={"column"}
                flex={1}
            >
                {!albumTracks.data ? <Loader /> : null}
                <Flex
                    position={"relative"}
                >
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={coverImage}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '300px', lg: '500px' }}
                    />
                </Flex>
                <Table variant='simple' bg={bg} shadow="xl" size={"md"}>
                    <Thead>
                        {/* 
                            this text tag shouldn't be here, for accessibility reasons.
                            sacrificing accessibility for appearance
                            this throws a warning in the console.
                        */}
                        <Text fontSize={"2xl"} fontWeight={"600"} p={{ base: 2, md: 4 }}>Trackslist</Text>
                        <Tr>
                            <Th> Track Title </Th>
                            <Th> Duration </Th>
                            <Th> </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {albumTracks.data ? albumTracks.data.map((track: any) => {
                            return (
                                <Tr
                                    key={track.title}
                                    _hover={{
                                        transform: 'translateY(-4px)',
                                        boxShadow: 'xl',
                                    }}
                                >
                                    <Td>{track.title}</Td>
                                    <Td> {formatDuration(track.duration)} </Td>
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

        </Container>
    )
}

export default AlbumDetails;