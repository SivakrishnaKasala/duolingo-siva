import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckHeader from "../../../component/duoheader/CheckHeader";
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const TestAmount = () => {
  const [backToHome, setBackToHome] = useState(false);
  const [backToDelivery, setBackToDelivery] = useState(false);

  const theme = useTheme();
  const isBelow440 = useMediaQuery(theme.breakpoints.down(480));
  const between440And650 = useMediaQuery(theme.breakpoints.between(440, 650));
  const above850Screen = useMediaQuery(theme.breakpoints.up(850));

  // data
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const navigate = useNavigate();

  const renderPage = () => {
    return (
      <>
        <CheckHeader backPage={() => setBackToDelivery(true)} />
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      textAlign: "center",
                      color: "#083156",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: isBelow440
                          ? "24px"
                          : between440And650 && "30px",
                        fontWeight: 700,
                        paddingBottom: "20px",
                      }}
                    >
                      Enter your payment details
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#083156",
                        fontSize: "18px",
                        padding: "20px 0",
                        fontWeight: "bold",
                      }}
                    >
                      Your information
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      {/* <FormControl fullWidth component={Box}> */}
                      <Box
                        sx={{
                          width: "100%",
                        }}
                      >
                        <InputLabel
                          sx={{
                            color: "#3d4d5c",
                          }}
                        >
                          Email address
                        </InputLabel>
                        <TextField
                          variant="outlined"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          sx={{
                            fontSize: "16px",
                            // height: "60px",
                            width: "100%",
                            marginBottom: "5px",

                            boxSizing: "border-box",
                            border: "1px solid #ccc",
                            borderRadius: "6px",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "transparent",
                              },
                              "&:hover fieldset": {
                                borderColor: "transparent",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "transparent", // remove focus border color
                              },
                            },
                            "& .MuiInputBase-root": {
                              height: 50,
                              fontSize: "20px",
                            },
                          }}
                        />
                      </Box>
                      {/* <OutlinedInput /> */}
                      {/* </FormControl> */}
                    </Grid>
                    {/* <Grid item xs={12}>
                      <TextField
                        autoComplete="off"
                        sx={{
                          marginTop: "10px",
                        }}
                        size="small"
                        fontSize="16px"
                        padding="20px"
                        fullWidth
                      />
                    </Grid> */}
                    {/* <Grid item>
                      <TextField
                        variant="outlined"
                        sx={{
                          width: { sm: 200, md: 300 },
                          "& .MuiInputBase-root": {
                            height: 50,
                          },
                        }}
                      />
                    </Grid> */}
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Box>
                            <InputLabel
                              sx={{
                                color: "#3d4d5c",
                                fontSize: "14px",
                                marginBottom: "4px",
                                lineHeight: "120%",
                              }}
                            >
                              Country/Region
                            </InputLabel>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  };

  const render = () => {
    if (backToDelivery) {
      return navigate("/duolingo/checkout/delivery");
    } else {
      return renderPage();
    }
  };
  return render();
};

export default TestAmount;
