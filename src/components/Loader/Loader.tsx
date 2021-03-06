import { CircularProgress } from "@chakra-ui/react";
import { Wrapper } from "./Loader.styles";

const Loader = () => {
    return (
        <Wrapper>
            <CircularProgress isIndeterminate color='#2193b0' />
        </Wrapper>
    );
};

export default Loader;