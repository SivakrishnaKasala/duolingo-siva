import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

//icons
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GoogleIcon from "@mui/icons-material/Google";

import { NavLink } from "react-router-dom";

const Register = () => {
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

  const [correctUser, setCorrectUser] = useState(true);

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={2}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 2,
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
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item
              sx={{
                width: "300px",
              }}
            >
              <Card>
                <CardHeader
                  subheader={
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: "bold",
                              color: "black",
                            }}
                          >
                            Create an account
                          </Typography>
                        </Box>
                        <Box>
                          <Typography>
                            to access your free practice test
                          </Typography>
                        </Box>
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
                  >
                    <Grid item xs={11.5}>
                      <FormControl component={Box} fullWidth>
                        <Typography variant="subtitle2">Your age</Typography>
                        <TextField
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          size="small"
                        />
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      xs={11.5}
                      sx={{
                        marginTop: "8px",
                      }}
                    >
                      <FormControl fullWidth component={Box}>
                        <Typography variant="subtitle2">
                          Email address
                        </Typography>
                        <TextField
                          value={email}
                          error={showEmail}
                          onChange={(e) => {
                            if (e.target.value === "") {
                              setShowEmail(true);
                            } else {
                              setShowEmail(false);
                            }
                            setEmail(e.target.value);
                          }}
                          size="small"
                        />
                        {showEmail && (
                          <FormHelperText>
                            A valid email address is required
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      xs={11.5}
                      sx={{
                        marginTop: "8px",
                      }}
                    >
                      <FormControl fullWidth component={Box}>
                        <Typography variant="subtitle2">Password</Typography>
                        <TextField
                          type="password"
                          error={showPassword}
                          id="password1"
                          value={password}
                          onChange={(e) => {
                            if (e.target.value === "") {
                              setShowPassword(true);
                            } else {
                              setShowPassword(false);
                            }
                            setPassword(e.target.value);
                          }}
                          size="small"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  edge="end"
                                  onClick={() => {
                                    if (hidePassword) {
                                      document.getElementById(
                                        "password1"
                                      ).type = "password";
                                    } else {
                                      document.getElementById(
                                        "password1"
                                      ).type = "text";
                                    }

                                    setHidePassword(!hidePassword);
                                  }}
                                >
                                  {hidePassword ? (
                                    <VisibilityIcon />
                                  ) : (
                                    <VisibilityOffIcon />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                        {showPassword && (
                          <FormHelperText>
                            Password is too short or invalid
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      xs={11.5}
                      sx={{
                        marginTop: "15px",
                      }}
                    >
                      <Button
                        fullWidth
                        variant="contained"
                        disabled={correctUser}
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        CREATE ACCOUNT
                      </Button>
                    </Grid>
                    <Grid
                      item
                      xs={11}
                      sx={{
                        marginTop: "8px",
                      }}
                    >
                      <Grid
                        container
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Grid item xs={5}>
                          <Divider fullWidth />
                        </Grid>
                        <Grid
                          item
                          xs={2}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "darkgrey",
                              fontSize: "12px",
                              fontWeight: "bold",
                            }}
                          >
                            OR
                          </Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Divider fullWidth />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={11}>
                      <Button
                        variant="contained"
                        startIcon={<Avatar position="start">S</Avatar>}
                        endIcon={<GoogleIcon position="end" />}
                        fullWidth
                        size="medium"
                      >
                        heeloo
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink to="/auth/login">
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              HAVE AN ACCOUNT? LOG IN
            </Typography>
          </NavLink>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
