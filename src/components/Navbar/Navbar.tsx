import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align={"center"}>
        <Image src="/assets/redditFace.svg" alt="logo" h={"30px"} />
        <Image
          display={{ base: "none", md: "unset" }}
          src="/assets/redditText.svg"
          alt="logo"
          h={"46px"}
        />
      </Flex>
      {/* <Directory/> */}
      <SearchInput />
      {/* <RightContent/> */}
    </Flex>
  );
};
export default Navbar;
