import { CircularProgress } from "@chakra-ui/react";
import { Wrapper } from "./Loader.styles";

const Loader = () => {
    return (
        <Wrapper>
            <CircularProgress isIndeterminate color='#2193b0' size={'lg'} />
        </Wrapper>
    );
};

export default Loader;