import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const LastCard = () => {
  const isExtraSmall = useMediaQuery("(max-width:470px)");
  console.log(isExtraSmall);
  const isSmallToMedium = useMediaQuery(
    "(min-width:471px) and (max-width:992px)"
  );
  console.log(isSmallToMedium);
  const isPadding = useMediaQuery("(min-width:770px) and (max-width:992px)");
  return (
    <>
      {!isExtraSmall && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            component="img"
            src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/e2d26b48d9a4faba9a3e.svg"
            alt="firstImage"
            sx={{
              width: "150px",
              maxWidth: "300px",
              height: "auto",
              flexGrow: 1,
            }}
          />
        </Box>
      )}
      <Grid
        container
        sx={{
          backgroundColor: "#083156",
          marginTop: "24px",
          padding: isPadding ? "48px 40px" : "20px",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Get Started
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginTop: "20px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ width: "80%" }} variant="body2">
                Sign up now and certify your English proficiency today. Test
                online anytime, anywhere. Finish in 1 hour and get results in 2
                days. Share your results with 4,000+ institutions.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginTop: "20px",
              }}
            >
              <Grid
                container
                sx={{
                  display: "flex",
                  gridGap: "10px",
                  flexDirection: isSmallToMedium && "row",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={5.8}
                  sx={{
                    display: "flex",
                    justifyContent: isSmallToMedium && "flex-end",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: isExtraSmall ? "100%" : isSmallToMedium && "140px",
                      height: "46px",
                      backgroundColor: "#F0E68C",
                      color: "#083156",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#F0E68C",
                        color: "#083156",
                      },
                      borderRadius: "10px",
                      padding: isSmallToMedium && "0px 20px 0px 20px",
                      boxSizing: "content-box",
                    }}
                  >
                    practice free
                  </Button>
                </Grid>
                <Grid item xs={12} sm={5.8}>
                  <Button
                    variant="contained"
                    sx={{
                      width: isExtraSmall ? "100%" : isSmallToMedium && "140px",
                      height: "46px",
                      backgroundColor: "#F0E68C",
                      color: "#083156",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#F0E68C",
                        color: "#083156",
                      },
                      borderRadius: "10px",
                      padding: isSmallToMedium && "0px 20px 0px 20px",
                      boxSizing: "content-box",
                    }}
                  >
                    purchase a test
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {!isExtraSmall && (
        <Box>
          <Box
            component="img"
            src="	https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/9a762e13083988404f39.svg"
            alt="secondImage"
          />
        </Box>
      )}
    </>
  );
};

export default LastCard;
