import {
    Box,
    CloseButton,
    Flex,
    useColorModeValue,
    Image
} from "@chakra-ui/react"

import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
} from 'react-icons/fi';

import { NavItem } from '../NavItem';
import { LinkItemProps, SidebarProps, } from '../Sidebar.types';

const NavItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, path: '/', },
    { name: 'Trending', icon: FiTrendingUp, path: '/trending', },
    { name: 'Explore', icon: FiCompass, path: '/explore/artist/', },
    { name: 'Favourites', icon: FiStar, path: '/favourites', },
    { name: 'Settings', icon: FiSettings, path: '/settings', },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Image src="https://e-cdn-files.dzcdn.net/img/developers/logo-deezer-v00401743.png" />
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {NavItems.map((navItem) => (
                <NavItem key={navItem.name} icon={navItem.icon} to={navItem.path}>
                    {navItem.name}
                </NavItem>
            ))}
        </Box>
    );
};

export default SidebarContent;