import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const HeaderButtons = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
      }}
    >
      <Grid item>
        <Button
          variant="outlined"
          sx={{
            color: "#083156",
            backgroundColor: "#fffafa",
            fontWeight: "bold",
            "&:hover": {
              color: "#083156",
              backgroundColor: "#fffafa",
            },
            padding: "0px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "30px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "12px",
            }}
          >
            Log In
          </Typography>
        </Button>
      </Grid>
      <Grid
        item
        sx={{
          marginLeft: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            color: "#FFE5B4",
            backgroundColor: "#083156",
            padding: "0 16px",
            boxSizing: "content-box",
            "&:hover": {
              color: "#FFE5B4",
              backgroundColor: "#083156",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "28px", // Button height
            width: "50px", // Button width
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "12px",
              width: "50px", // Typography width
              height: "20px", // Typography height
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Sign up
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default HeaderButtons;
