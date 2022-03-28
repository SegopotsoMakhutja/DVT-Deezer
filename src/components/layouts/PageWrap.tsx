import { Flex, FlexProps } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async';


type PageWrapProps = FlexProps & {
    title: string
}

const PageWrap = ({ children, title, ...rest }: PageWrapProps) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Flex {...rest}> {children} </Flex>
        </>
    )
}

PageWrap.defaultProps = {
    p: 4,
    height: '90vh',
    mx: 'auto',
    flexDir: 'column',
    align: 'flex-start',
    justify: 'flex-start',
}

export default PageWrap
