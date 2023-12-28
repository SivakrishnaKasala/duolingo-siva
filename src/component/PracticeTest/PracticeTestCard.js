import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const PracticeTest = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(440));

  const miniObject = () => {
    return (
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          component="img"
          src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/e7838b7ac5eaeb5494fc.svg"
          sx={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography>Practice as much as you want</Typography>
          <Button
            variant="outlined"
            sx={{
              marginTop: "20px",

              width: isSmallScreen && "100%",
              minWidth: "210px",
              borderRadius: "6px",
              padding: "0 24px",
              fontSize: "15px",
              height: "40px",
              fontWeight: 700,
              backgroundColor: "#f0faff",
              borderColor: "#2285d0",
              color: "#3c5d87",
              "&:hover": {
                backgroundColor: "#f0faff",
                borderColor: "#2285d0",
                color: "#3c5d87",
              },
            }}
          >
            Practice free
          </Button>
        </Box>
      </Grid>
    );
  };

  const render = () => {
    return (
      <>
        <Box>
          <Card
            sx={{
              border: "1px solid #ccc",
            }}
            elevation={0}
          >
            <CardHeader
              // title="data"
              subheader={
                <>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      Take a practice test
                    </Typography>
                  </Box>
                </>
              }
            />
            <Divider
              sx={{
                border: "1px solid #ccc",
              }}
            />
            <CardContent>
              <Grid container>{isSmallScreen && miniObject()}</Grid>
            </CardContent>
          </Card>
        </Box>
      </>
    );
  };

  return render();
};

export default PracticeTest;
