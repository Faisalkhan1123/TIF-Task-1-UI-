import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
const outerBox = {
  width: "100vw",
  height: "100vh",
  background: "#000000",
};
const innerBox = {
  width: "100%",
  height: "100%",
  display: "flex",
};
const child = {
  height: "100%",
  background: "red",
  flexGrow: 1,
  paddingX: "105px",
  paddingY: "33px",
};
const head = {
  marginTop: "115px",
  fontSize: "60px",
  fontWeight: "700",
  lineHeight: "69px",
};
function index() {
  return (
    <Box sx={outerBox}>
      <Box sx={innerBox}>
        <Box sx={child}>
          <Image src="/logo.png" width={107} height={83} alt="logo"></Image>

          <Heading sx={head}>
            Discover the <br />
            Best Food <br />
            and Drinks
          </Heading>
        </Box>
        <Box sx={child}>o</Box>
      </Box>
    </Box>
  );
}

export default index;
