import React from "react";
import { Box, Text, Heading, Button } from "@chakra-ui/react";
import Image from "next/image";
const outerBox = {
  width: "100vw",
  height: "100vh",
};
const innerBox = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
};
const leftPane = {
  height: "100%",
  paddingX: "104px",
  paddingY: "34px",
};
const rightPane = {
  height: "100%",
  background: "black",
  width: "50%",
};
const head = {
  marginTop: "112px",
  fontSize: "3.5em",
  fontWeight: "700",
  lineHeight: "69px",
  verticalAlign: "top",
  letterSpacing: "-1px",
};
const subheading = {
  marginTop: "26px",
  lineHeight: "27px",
  letterSpacing: "0.3px",
  fontFamily: "Open Sans",
  fontStyle: "Regular",
  fontWeight: "400",
  fontSize: "1em",
  color: "#444957",
};
const exploreButton = {
  marginTop: "41px",
  fontFamily: "Open Sans",
  fontWeight: "700",
  height: "62px",
  lineHeight: "36px",
  background: "red",
  fontSize: "18px",
  paddingX: "1.5em",
  borderRadius: "31px",
  width: "190px",
  marginLeft: "-2px",
  background: "#E23744",
  color: "#ffffff",
};
function index() {
  return (
    <Box sx={outerBox}>
      <Box sx={innerBox}>
        <Box sx={leftPane}>
          <Image src="/logo.png" width={107} height={83} alt="logo"></Image>

          <Heading sx={head}>
            <Text as="span" color="#0E2368">
              {" "}
              Discover the <br />{" "}
            </Text>
            <Text as="span" color="#E23744">
              Best
            </Text>{" "}
            <Text as="span" color="#0E2368">
              Food
            </Text>{" "}
            <br />
            and Drinks
          </Heading>
          <Text sx={subheading}>
            Naturally made Healthcare Products for the <br />
            better care & support for your body
          </Text>
          <Button sx={exploreButton}>Explore Now!</Button>
        </Box>
        <Box sx={rightPane}>
          <Image position="relative" src="/pizza.png" width={735} height={705} alt="pizza"></Image>
        </Box>
      </Box>
    </Box>
  );
}

export default index;
