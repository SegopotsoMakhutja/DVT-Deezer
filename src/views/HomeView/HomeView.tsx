import { PageWrap } from "components/layouts";
import { Text } from '@chakra-ui/react'

const Home = () => {

    return (
        <PageWrap
            title="Home"
            overflow={"hidden"}
            alignItems={"center"}
        >
            <Text size={'2xl'}>
                Hello DVT
            </Text>
        </PageWrap>
    );
};

export default Home;