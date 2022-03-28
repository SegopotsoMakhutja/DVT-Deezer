import { Heading, Link, Text, Flex, HStack } from "@chakra-ui/react";
import { FiExternalLink } from 'react-icons/fi';

interface IHeaderProps {
    title: string;
    isHome: boolean
}

const HeaderTitle = ({ title, isHome }: IHeaderProps) => {
    const marginBottom = { base: "0.5rem", md: "2rem" };

    return (
        <>
            <Heading as='h1' size='xl'>
                {title}
            </Heading>
            <Flex w={"full"} flexDir={"row"} mb={marginBottom} justifyContent={isHome ? "space-between" : "center"} alignItems={"center"}>
                <Text fontSize='md' color={"#2193b0"}>
                    Powered by the{' '}
                    <Link href='https://developers.deezer.com/api/' isExternal color={"#2193b0"} fontWeight={"bold"}>
                        Deezer API
                    </Link>
                </Text>
                <HStack>
                    {isHome ? (
                        <>
                            <Link href='https://cors-anywhere.herokuapp.com/' isExternal>
                                Request server access
                            </Link>
                            <FiExternalLink />
                        </>
                    ) : null}
                </HStack>
            </Flex>
        </>
    )
}

export default HeaderTitle;