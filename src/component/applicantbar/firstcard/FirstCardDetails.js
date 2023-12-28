import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FirstCardDetails = () => {
  return (
    <Grid
      container
      sx={{
        minHeight: "600px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0px 12px 0px 12px",
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h5">
              Hear from students around the world
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              marginTop: "12px",
            }}
          >
            <Typography>
              Applying to higher education can be daunting, especially in
              another country. Hear from other students who went through the
              process and how the Duolingo English Test helped make it easier.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                color: "#FFE5B4",
                backgroundColor: "#083156",
                width: "100%",
                height: "46px",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
              endIcon={
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: "10px!important",
                  }}
                />
              }
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/08fecd41858c5871c529.svg"
          alt="data"
          sx={{
            width: "80%",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default FirstCardDetails;
