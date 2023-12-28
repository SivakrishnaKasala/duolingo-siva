import { Box, Grid } from "@mui/material";

import SwipeableViews from "react-swipeable-views";
import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ScrollItemData = () => {
  const scrollData = [
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/a4a2523408186a07445f.svg",
    "	https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/11034e21467d71c08aba.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/dcad0f68023a63d3bc83.svg",
    "	https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/d5713e48c6e28b2589f0.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/b754f086d94530ac6f40.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/fb21670e414a81ca5984.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/68b1ed492bfa9cca43d2.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/fae7b539ab209a385a70.svg",
    "	https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/4d1e2d82d0e06cc8865a.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/42ff290a4dd8cb874d4d.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/347bbc2c9946c01ea464.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/c6e3e969f6e4310a6e82.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/a4a2523408186a07445f.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/11034e21467d71c08aba.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/dcad0f68023a63d3bc83.svg",
    "	https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/d5713e48c6e28b2589f0.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/b754f086d94530ac6f40.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/fb21670e414a81ca5984.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/68b1ed492bfa9cca43d2.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/fae7b539ab209a385a70.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/4d1e2d82d0e06cc8865a.svg",
    "	https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/42ff290a4dd8cb874d4d.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/347bbc2c9946c01ea464.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/c6e3e969f6e4310a6e82.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/a4a2523408186a07445f.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/11034e21467d71c08aba.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/dcad0f68023a63d3bc83.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/b754f086d94530ac6f40.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/fb21670e414a81ca5984.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/c6e3e969f6e4310a6e82.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/347bbc2c9946c01ea464.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/42ff290a4dd8cb874d4d.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/4d1e2d82d0e06cc8865a.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/fae7b539ab209a385a70.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/68b1ed492bfa9cca43d2.svg",
    "https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/fb21670e414a81ca5984.svg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false, // Hide arrow buttons
    speed: 2000,
    swipeToSlide: true,
    pauseOnHover: false, // Prevent pausing on hover
    centerPadding: "10px",
    centerMode: true,
  };

  return (
    <Box
      sx={{
        height: "100px",
        margin: "10px",
      }}
    >
      <Slider {...settings}>
        {scrollData.map((item, index) => (
          <Box
            key={index}
            style={{ margin: "0 10px" }}
            component="div"
            sx={{
              borderRadius: 5,
              borderWidth: "10px",
              backgroundColor: "white",
              height: "80px",
              width: "100px",
              //   width: "auto", // Allow the width to vary based on the image
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // Hide any overflowing content
              margin: "12px 10px !important",
            }}
          >
            <Box
              component="img"
              src={item}
              alt={`Image${index}`}
              sx={{
                maxWidth: "100%", // Allow the width to vary based on the aspect ratio
                height: "auto", // Ensure the height scales according to the aspect ratio
                // Remove any potential inline spacing
                // margin: "10px!important",
                margin: "0 auto", // Center the image horizontally
                marginBottom: "10px", // Add margin to the bottom for spacing
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ScrollItemData;
