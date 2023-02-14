import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const BoxStyle1 = {
  backgroundColor: "#F8F8F8",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  width: "100vw",
};
const BoxStyle2 = {
  alignItems: "center",
  //   padding: "78px",
  margin: "10px",
  width: "100%",
  paddingTop: "25px",
  paddingBottome: "25PX",
  paddingLeft: "50px",
  paddingRight: "50Px",
};
const BoxStyle4 = {
  padding: "8Px",
};
const BoxStyle5 = {
  padding: "55px",
};
const IconStyle = {
  display: "flex",
};
const InnerIconStyle = {
  justifyContent: "center",
  alignItems: "center",
  padding:"5px",
  width:"15n%"
};
const CopyRightStyle = {
  marginTop: "118px",
  marginRight: "20px",
};
const Footer = () => {
  return (
    <footer>
      <Box sx={BoxStyle1}>
        <Box sx={BoxStyle2}>
          <Box sx={BoxStyle5}>
            <Image src="/logo.png" height={200} width={200}></Image>
          </Box>
        </Box>
        <Box sx={BoxStyle2}>
          <Box sx={BoxStyle4}>
            <Heading as="h6" size="xs">
              Contact Us
            </Heading>
          </Box>
          <Box>
            {" "}
            <Box sx={BoxStyle4}>
              <p>
                Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
                Market, XYZ-343434
              </p>
            </Box>
            <Box sx={BoxStyle4}>
              <p>example2020@gmail.com</p>
            </Box>
            <Box sx={BoxStyle4}>
              <p>(904) 443-0343</p>
            </Box>
          </Box>
        </Box>
        <Box sx={BoxStyle2}>
          <Box sx={BoxStyle4}>
            <Heading as="h6" size="xs">
              More
            </Heading>
          </Box>
          <Box sx={BoxStyle4}>
            <p>About Us</p>
          </Box>
          <Box sx={BoxStyle4}>
            <p>Products</p>
          </Box>
          <Box sx={BoxStyle4}>
            <p>Career</p>
          </Box>
          <Box sx={BoxStyle4}>
            <p>Contact Us</p>
          </Box>
        </Box>
        <Box sx={BoxStyle2}>
             <Box style={{margin:"auto"}}>
             <Heading as="h6" size="xs">
            Social Links
          </Heading>
             </Box>
          <Box />
          <Box sx={IconStyle}>
            <Box sx={InnerIconStyle}>
              <FontAwesomeIcon icon={faInstagram} size="1x" />
            </Box>
            <Box sx={InnerIconStyle}>
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </Box>

            <Box sx={InnerIconStyle}>
              <FontAwesomeIcon icon={faFacebook} size="1x" />
            </Box>
          </Box>
          <Box sx={CopyRightStyle}>© 2022 Food Truck Example</Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
