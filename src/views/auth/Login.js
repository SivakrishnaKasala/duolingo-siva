import React, { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  IconButton,
  OutlinedInput,
  Typography,
} from "@mui/material";

// icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GoogleIcon from "@mui/icons-material/Google";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 1,
        }}
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/557e9cb1ce105779cdb5.svg"
            alt="duolingo"
          />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            spacing={2}
          >
            <Grid item xs={6}>
              <Card
                style={{
                  borderRadius: 8,
                }}
              >
                <CardHeader
                  subheader={
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          Log in to your account
                        </Typography>
                      </Box>
                    </>
                  }
                />
                <CardContent>
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    spacing={2}
                  >
                    <Grid item xs={8}>
                      <Typography variant="subtitle2">
                        Email address or phone number
                      </Typography>
                      <FormControl
                        fullWidth
                        sx={{
                          marginTop: 1,
                        }}
                      >
                        <OutlinedInput
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setPhoneNumber();
                          }}
                          size="small"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8}>
                      <Button
                        variant="contained"
                        disabled={!(email !== "" || phoneNumber !== "")}
                        fullWidth
                        sx={{
                          color: !(email !== "" || phoneNumber !== "")
                            ? "orange"
                            : "#fbe56d",
                          backgroundColor: "#083156",
                          fontWeight: "bold",
                          "&:hover": {
                            backgroundColor: "#083156",
                          },
                        }}
                      >
                        Next
                      </Button>
                    </Grid>
                    <Grid item xs={8}>
                      <Grid
                        container
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Grid item xs={5}>
                          <Divider />
                        </Grid>
                        <Grid
                          item
                          xs={2}
                          sx={{
                            display: "flex",
                            margin: "auto",
                            padding: "auto",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography color="darkgrey">OR</Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Divider />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={8}
                      sx={{
                        padding: "!0important",
                      }}
                    >
                      <Button
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          flexDirection: "row",
                        }}
                        fullWidth
                        variant="outlined"
                      >
                        <Avatar>S</Avatar>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{
                              textTransform: "none",
                            }}
                          >
                            Sign in as siva
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              direction: "column",
                              alignItems: "start",
                              justifyContent: "start-flex",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                textTransform: "none",
                              }}
                            >
                              siva@gamail.com
                            </Typography>
                            <IconButton
                              sx={{
                                padding: 0,
                              }}
                            >
                              <KeyboardArrowDownIcon size="small" />
                            </IconButton>
                          </Box>
                        </Box>
                        <GoogleIcon
                          size="small"
                          //   sx={{
                          //     padding: 0,
                          //   }}
                        />
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NavLink to="/auth/register">
                <Typography
                  sx={{
                    textDecoration: "none",
                  }}
                >
                  NEED AN ACCOUNT? SIGN UP
                </Typography>
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
