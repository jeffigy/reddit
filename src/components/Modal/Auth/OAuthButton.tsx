import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

const OAuthButton: React.FC = () => {
  return (
    <Flex direction={"column"} w={"100%"} mb={4}>
      <Button variant={"oauth"} mb={2}>
        <Image src="/assets/googlelogo.png" h={"20px"} mr={4} />
        Continue with Google
      </Button>
    </Flex>
  );
};
export default OAuthButton;
