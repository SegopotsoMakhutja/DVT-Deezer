import {
    Heading,
    Box,
    Center,
    Image,
    Text,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from '@tanstack/react-location';
import { IAlbumCardProps } from '../Card.types';

const AlbumCard = ({ name, title, albumArt, albumId }: IAlbumCardProps) => {
    const navigate = useNavigate();

    const onClick = (id: string) => {
        navigate({ to: `/album/details/${id}`, replace: false })
    }

    return (
        <Center py={4}>
            <Box
                maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}
                onClick={() => onClick(albumId)}
                style={{ cursor: 'pointer' }}
            >
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                >
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={albumArt}
                    />
                </Box>

                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            {name}
                        </Heading>
                        <Text color={'gray.500'}>{title}</Text>
                    </Stack>

                </Box>
            </Box>
        </Center>
    );
}

export default AlbumCard;