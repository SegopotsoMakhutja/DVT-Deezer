import {
    chakra,
    Button,
    Box,
    Flex,
    useColorModeValue,
    useToast,
    Stat,
    StatNumber,
    StatHelpText,
    StatArrow,
    Image,
    Center
} from "@chakra-ui/react";

import { useNavigate } from '@tanstack/react-location';
import { generateRating } from "utils/helpers";
import { IArtistCardProps } from "../Card.types";

const ArtistCard = ({ name, nbFans, picture, artistId }: IArtistCardProps) => {
    const toast = useToast();

    const navigate = useNavigate();

    const onClick = (id: string) => {
        navigate({ to: `/explore/artist/${id}`, replace: false })
    }

    const getArrowType = () => {
        return generateRating() > 3 ? 'increase' : 'decrease';
    }

    return (
        <Center py={4}>
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                m={2}
                rounded={'lg'}
                boxShadow={'xl'}
            >
                <Box
                    mt={-12}
                    pos={'relative'}
                    onClick={() => onClick(artistId)}
                    style={{ cursor: 'pointer' }}
                    _hover={{
                        transform: 'translateY(-4px)',
                        boxShadow: 'xl',
                    }}
                >
                    <chakra.h3
                        py={2}
                        textAlign="center"
                        fontWeight="bold"
                        textTransform="uppercase"
                        color={useColorModeValue("gray.800", "white")}
                        letterSpacing={1}
                    >
                        {name}
                    </chakra.h3>
                    <Image
                        objectFit={'cover'}
                        src={picture}
                    />

                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        py={2}
                        px={3}
                        bg={useColorModeValue("gray.200", "gray.700")}
                    >
                        <Stat>
                            <StatNumber>{nbFans}</StatNumber>
                            <StatHelpText>Fans
                                <StatArrow type={getArrowType()} />
                            </StatHelpText>
                        </Stat>
                        <Button
                            bg="gray.800"
                            fontSize="xs"
                            fontWeight="bold"
                            color="white"
                            onClick={() => {
                                toast({
                                    title: 'Success.',
                                    description: 'Followed artist successfully.',
                                    status: 'success',
                                    duration: 5000,
                                    isClosable: true,
                                })
                            }}
                            px={2}
                            py={1}
                            rounded="lg"
                            textTransform="uppercase"
                            _hover={{
                                bg: useColorModeValue("gray.700", "gray.600"),
                            }}
                            _focus={{
                                bg: useColorModeValue("gray.700", "gray.600"),
                                outline: "none",
                            }}
                        >
                            Follow Artist
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Center>
    );
};

export default ArtistCard;