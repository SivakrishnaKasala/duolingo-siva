import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

//icons
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const FollowCard = () => {
  const mediaData = [
    {
      path: "https://www.youtube.com",
      icon: <YouTubeIcon />,
      name: "Youtube",
    },
    {
      path: "https://www.linkedin.com",
      icon: <LinkedInIcon />,
      name: "Linkedin",
    },
    {
      path: "https://www.twitter.com",
      icon: <TwitterIcon />,
      name: "Twitter",
    },
    {
      path: "https://www.facebook.com",
      icon: <FacebookIcon />,
      name: "Facebook",
    },
    {
      path: "https://www.instagram.com",
      icon: <InstagramIcon />,
      name: "Instagram",
    },
  ];

  const getMedia = () => {
    return mediaData.map((item, index) => {
      return (
        <Grid item key={index} xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {item.icon}
            {/* <NavLink to={item.path} target="_blank" rel="noopener noreferrer">
              {item.name}
            </NavLink> */}
            <a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                marginBottom: "8px",
                marginLeft: "8px",
                fontSize: "16px",
              }}
            >
              {item.name}
            </a>
          </Box>
        </Grid>
      );
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Card
        elevation={0}
        sx={{
          border: "1px solid #ccc",
        }}
      >
        <CardHeader
          subheader={
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  //   marginBottom: "1px solid #ccc",
                }}
              >
                <Typography>Follow us</Typography>
              </Box>
            </>
          }
        />
        <Divider
          variant="middle"
          sx={{
            margin: 0,
          }}
        />
        <CardContent>
          <Grid container>
            {/* <Grid item xs={12}>
              <Divider />
            </Grid> */}
            {getMedia()}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FollowCard;
