import React from "react";
import { Box, Text, Heading, Button, chakra } from "@chakra-ui/react";
import Image from "next/image";
const Cimage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"],
});
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
  position: "relative",
  flexGrow: "1",
};
const head = {
  marginTop: "111px",
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
const pizzaImage = {
  position: "absolute",
  top: "0px",
  right: "0px",
  display: "inline-block",
};
const vector = {
  position: "absolute",
  top: "0px",
  right: "0px",
  display: "inline-block",
};
const touchButton = {
  position: "absolute",
  top: "32px",
  right: "41px",
  background: "transparent",
  height: "42px",
  width: "122px",
  borderRadius: "21px",
  fontSize: "1em",
  lineHeight: "36px",
  color: "#ffffff",
  border: "1px solid #ffffff",
};
const secondSection = {
  height: "646px",
  width: "100%",
  background: "red",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
const innerSecondSection = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};
const testBox = {
  width: "447px",
  height: "254px",
  background: "yellow",
  marginX: "2px",
};
const aboutHeading = {
  fontWeight: "600",
  fontSize: "45px",
  lineHeight: "27px",
};
const aboutInfo = {
  fontSize: "15px",
  lineHeight: "27px",
  marginTop: "27.42px",
};
const aboutButton = {
  marginTop: "21px",
  fontWeight: "600",
  height: "42px",
  lineHeight: "36px",
  background: "red",
  fontSize: "16px",
  paddingX: "1.5em",
  borderRadius: "31px",
  width: "133px",
  marginLeft: "-1px",
  background: "#E23744",
  color: "#ffffff",
  letterSpacing: "3%",
};
function index() {
  return (
    <>
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
            <Cimage
              sx={pizzaImage}
              src="/pizza.png"
              width={735}
              height={804}
              alt="pizza"
            ></Cimage>
            <Cimage
              sx={vector}
              src="/vector.svg"
              width={752}
              height={839}
              alt="pizza"
            ></Cimage>
            <Button sx={touchButton}>Get804 In Touch</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={secondSection}>
        <Box sx={innerSecondSection}>
          <Image src="/second.png" width={384} height={468} alt="foodImage" />
          <Box sx={testBox}>
            <Heading sx={aboutHeading}>About Us</Heading>
            <Text sx={aboutInfo}>
              Lorem Ipsum is simply dummy text of the printing and
              <br /> typesetting industry. Lorem Ipsum has been the industry's{" "}
              <br />
              standard dummy text ever since the 1500s, when an unknown <br />{" "}
              printer took a galley of type and scrambled it to make a type{" "}
              <br />
              specimen book. t has survived not only five centuries.
            </Text>
            <Button sx={aboutButton}>Read More</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default index;
