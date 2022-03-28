import { ReactText } from 'react';
import { IconType } from 'react-icons';
import { FlexProps, BoxProps } from '@chakra-ui/react'

export interface LinkItemProps {
    name: string;
    icon: IconType;
    path: string;
}

export interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
    to: string;
}

export interface SidebarProps extends BoxProps {
    onClose: () => void;
}

export interface MobileProps extends FlexProps {
    onOpen: () => void;
}