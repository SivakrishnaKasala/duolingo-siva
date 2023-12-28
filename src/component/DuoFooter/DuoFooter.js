import {
  Box,
  Container,
  Grid,
  Icon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const DuoFooter = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const miniObject = () => {
    return (
      <Grid
        container
        sx={{
          display: "flex",
          borderTop: "1px solid #ccc",
        }}
      >
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              direction: "column",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                padding: "16px 16px 16px 0px",
              }}
            >
              <NavLink
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  Website
                </Typography>
              </NavLink>
            </Box>
            <Box
              sx={{
                padding: "16px 16px 16px 0px",
              }}
            >
              <NavLink
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  Privacy Policy
                </Typography>
              </NavLink>
            </Box>
            <Box
              sx={{
                padding: "16px 16px 16px 0px",

                boxSizing: "border-size",
              }}
            >
              <NavLink
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  Terms of Use
                </Typography>
              </NavLink>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            borderTop: "1px solid #ccc",
            marginTop: "5px",
          }}
        >
          <Box
            sx={{
              padding: "16px 16px 16px 0px",
            }}
          >
            <Typography
              sx={{
                fontSize: "13px",
              }}
            >
              Duolingo
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  };

  const largeObject = () => {
    return (
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #ccc",
        }}
      >
        <Grid item sx={{}}>
          <Box
            sx={{
              display: "flex",
              direction: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                padding: "16px 16px 16px 0px",
              }}
            >
              <NavLink
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  Website
                </Typography>
              </NavLink>
            </Box>
            <Box
              sx={{
                padding: "16px 16px 16px 0px",
              }}
            >
              <NavLink
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  Privacy Policy
                </Typography>
              </NavLink>
            </Box>
            <Box
              sx={{
                padding: "16px 16px 16px 0px",

                boxSizing: "border-size",
              }}
            >
              <NavLink
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  Terms of Use
                </Typography>
              </NavLink>
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              padding: "16px 16px 16px 0px",
            }}
          >
            <Typography
              sx={{
                fontSize: "13px",
              }}
            >
              Duolingo
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Container
        sx={{
          position: "absolute",
          // bottom: 0,
          // left: 0,
        }}
      >
        {isSmallScreen ? miniObject() : largeObject()}
      </Container>
    </>
  );
};

export default DuoFooter;
