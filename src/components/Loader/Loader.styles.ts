import { Flex } from "@chakra-ui/react";
import styled from '@emotion/styled';

// a wrapper for the loader
// so that it can always be centered and on top of elements
export const Wrapper = styled(Flex)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: absolute;
  align-items: center;
  background-size: cover;
  justify-content: center;
`