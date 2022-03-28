import { IconButton, Flex, useColorModeValue } from "@chakra-ui/react"

import { FiMenu } from 'react-icons/fi';

import { MobileProps } from '../Sidebar.types';
import { Header } from '../../Header';
import SearchBar from '../../SearchBar/SearchBar';

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={'space-between'}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <SearchBar
                color={useColorModeValue('#2193b0', 'white')}
                w={"full"}
                ml={2}
                _placeholder={{ opacity: 0.65, color: 'inherit' }}
            />
            <Header />

        </Flex>
    );
};

export default MobileNav;