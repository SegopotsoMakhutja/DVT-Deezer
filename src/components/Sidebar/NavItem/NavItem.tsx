import {
    Flex,
    Icon,
} from "@chakra-ui/react"
import { Link } from '@tanstack/react-location';

import { NavItemProps } from '../Sidebar.types';

const getActiveProps = () => {
    return {
        style: {
            color: "#2193b0",
            fontWeight: "bold",
        },
    };
}

const NavItem = ({ icon, to, children, ...rest }: NavItemProps) => {
    return (
        <Link
            to={to}
            style={{ textDecoration: 'none' }}
            getActiveProps={getActiveProps}
            activeOptions={{ exact: true }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

export default NavItem;