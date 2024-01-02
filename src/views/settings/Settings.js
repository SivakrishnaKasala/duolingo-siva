import React, { useState } from "react";
import DuoHeader from "../../component/duoheader/DuoHeader";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import CheckHeader from "../../component/duoheader/CheckHeader";
import FooterHeader from "../../component/applicantbar/footerdetails/FooterHeader";
import DuoFooter from "../../component/DuoFooter/DuoFooter";
import MainSideBar from "../../component/SideBar/MainSideBar";

const Settings = () => {
  const [passwordFilled, setPasswordFilled] = useState(false);
  return (
    <>
      <DuoHeader />
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Grid container>
            <Grid
              item
              sx={{
                width: "180px",
              }}
            >
              <MainSideBar />
            </Grid>
            <Grid item>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{
                    padding: "20px",
                  }}
                >
                  <Grid
                    container
                    sx={{
                      display: "grid",
                      gap: "20px",
                    }}
                  >
                    <Grid item xs={12}>
                      <Grid
                        container
                        sx={{
                          width: "70%",
                          display: "grid",
                          gap: "20px",
                        }}
                      >
                        <Grid item xs={12}>
                          <Box>
                            <InputLabel
                              sx={{
                                marginBottom: "4px",
                                color: "#3d4d5c",
                                fontSize: "14px",
                              }}
                            >
                              Email Address
                            </InputLabel>
                            <TextField
                              sx={{
                                border: "1px solid #ccc",
                                borderRadius: "6px",
                                "& .MuiInputBase-root": {
                                  height: "44px",
                                  fontSize: "16px",
                                },
                                "& .MuiOutlinedInput-root": {
                                  "& fieldset": {
                                    borderColor: "transparent",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "transparent",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "transparent",
                                  },
                                },
                              }}
                              fullWidth
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            sx={{
                              color: "#083156",
                              fontWeight: 700,
                            }}
                          >
                            Change password
                          </Typography>
                          <Grid
                            container
                            sx={{
                              border: "1px solid #ccc",
                              borderRadius: "6px",
                              //   padding: "10px 20px",
                              padding: "8px 0",
                            }}
                          >
                            <Grid
                              item
                              xs={12}
                              sx={{
                                margin: "5px 20px",
                              }}
                            >
                              <InputLabel>Current password</InputLabel>
                              <TextField
                                fullWidth
                                sx={{
                                  border: "1px solid #ccc",
                                  borderRadius: "6px",
                                  "& .MuiInputBase-root": {
                                    height: "44px",
                                    fontSize: "14px",
                                  },
                                  "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                      borderColor: "transparent",
                                    },
                                    "&:hover fieldset": {
                                      borderColor: "transparent",
                                    },
                                    "&.Mui-focused fieldset": {
                                      borderColor: "transparent",
                                    },
                                  },
                                }}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              sx={{
                                margin: "5px 20px",
                              }}
                            >
                              <InputLabel>New password</InputLabel>
                              <TextField
                                fullWidth
                                sx={{
                                  border: "1px solid #ccc",
                                  borderRadius: "6px",
                                  "& .MuiInputBase-root": {
                                    height: "44px",
                                    fontSize: "14px",
                                  },
                                  "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                      borderColor: "transparent",
                                    },
                                    "&:hover fieldset": {
                                      borderColor: "transparent",
                                    },
                                    "&.Mui-focused fieldset": {
                                      borderColor: "transparent",
                                    },
                                  },
                                }}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              sx={{
                                margin: "5px 20px",
                              }}
                            >
                              <InputLabel>Confirm password</InputLabel>
                              <TextField
                                fullWidth
                                sx={{
                                  border: "1px solid #ccc",
                                  borderRadius: "6px",
                                  "& .MuiInputBase-root": {
                                    height: "44px",
                                    fontSize: "14px",
                                  },
                                  "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                      borderColor: "transparent",
                                    },
                                    "&:hover fieldset": {
                                      borderColor: "transparent",
                                    },
                                    "&.Mui-focused fieldset": {
                                      borderColor: "transparent",
                                    },
                                  },
                                }}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            disableElevation
                            disableRipple
                            disabled={!passwordFilled ? true : false}
                            sx={{
                              borderRadius: "6px",
                              padding: "0 20px",
                              height: "40px",
                              fontSize: "16px",
                              borderColor: passwordFilled ? "blue" : "#f1f4f6",
                              backgroundColor: passwordFilled
                                ? "blue"
                                : "#f1f4f6",
                              color: passwordFilled ? "#fff" : "#8c96a1",
                              "&:hover": {
                                borderColor: passwordFilled
                                  ? "blue"
                                  : "#f1f4f6",
                                backgroundColor: passwordFilled
                                  ? "blue"
                                  : "#f1f4f6",
                                color: passwordFilled ? "#fff" : "#8c96a1",
                              },
                            }}
                          >
                            Save changes
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        sx={{
                          width: "70%",
                          display: "grid",
                          gap: "20px",
                        }}
                      >
                        <Grid item xs={12}>
                          <Typography>Notifications</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid
                            container
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Grid item>
                              <Checkbox />
                            </Grid>
                            <Grid item>
                              <Typography>
                                I would like to receive promotional emails from
                                the Duolingo English Test
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        sx={{
                          width: "70%",
                          display: "grid",
                          //   alignItems: "center",
                          gap: "20px",
                        }}
                      >
                        <Grid item xs={12}>
                          <Typography>Counselor</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            sx={{
                              color: "#fff",
                              backgroundColor: "#3c5d87",
                              borderColor: "#3c5d87",
                              "&:hover": {
                                backgroundColor: "#3c5d87",
                              },
                              borderRadius: "6px",
                              height: "44px",
                              fontSize: "14px",
                              fontWeight: 700,
                            }}
                          >
                            Add invite code
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <DuoFooter />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Settings;
