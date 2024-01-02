import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckHeader from "../../../component/duoheader/CheckHeader";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { LiaCcVisa } from "react-icons/lia";
import { BiLogoMastercard } from "react-icons/bi";
import { GrCreditCard } from "react-icons/gr";

//icons
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ButtonPay from "../../../component/DuoFooter/ButtonPay/ButtonPay";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

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

  // card details
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberFocused, setCardNumberFocused] = useState(false);
  const handleCardFocus = () => {
    setCardNumberFocused(true);
  };
  const handleCardBlur = () => {
    setCardNumberFocused(false);
  };
  const [cardMonth, setCardMonth] = useState("");
  const [cardMonthFocused, setCardMonthFocused] = useState(false);
  const handleMonth = () => {
    setCardMonthFocused(true);
  };
  const closeMonth = () => {
    setCardMonthFocused(false);
  };

  const [cardCvc, setCardCvc] = useState("");
  const [cardCvcFocused, setCardCvcFocused] = useState(false);

  const cvcFocused = () => {
    setCardCvcFocused(true);
  };
  const closeFocused = () => {
    setCardCvcFocused(false);
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleGridClick = () => {
    setIsChecked((prev) => !prev); // Toggle the checkbox state
  };

  const getFixCardNumber = (newValue, cardNumber) => {
    console.log(newValue);
    let cardNum = "";
    const arrayNum = [];
    const newData = cardNumber.replace(" ", "");
    console.log(newData);
    let lengthNum = newData.length / 4;
    console.log(lengthNum);
    let n;
    if (lengthNum < 1) {
      n = 1;
    } else if (lengthNum >= 1 && lengthNum < 2) {
      n = 2;
    } else if (lengthNum >= 2 && lengthNum < 3) {
      n = 3;
    } else {
      n = 4;
    }
    let a = 0;
    let b = 4;
    for (let i = 0; i < n; i++) {
      arrayNum.push(newData.slice(a, b));
      console.log(arrayNum);
    }
  };
  const handleCardNumberKeyDown = (e) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      setCardNumber(e.target.value);
    }
  };

  const navigate = useNavigate();

  const renderPage = () => {
    return (
      <>
        <CheckHeader backPage={() => setBackToDelivery(true)} />
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              display: "grid",
              gap: "20px",
            }}
          >
            <Grid
              item
              xs={12}
              style={
                {
                  // paddingBottom: "50px",
                }
              }
            >
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
                      <Grid
                        container
                        sx={{
                          display: "grid",
                          gridGap: "20px",
                        }}
                      >
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
                            <TextField
                              fullWidth
                              sx={{
                                border: "1px solid #ccc",
                                "& .MuiInputBase-root": {
                                  height: 50,
                                  fontSize: "20px",
                                },
                                borderRadius: "6px",
                                marginBottom: "6px",
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
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box>
                            <InputLabel>State/Union territory</InputLabel>
                            <TextField
                              fullWidth
                              sx={{
                                "& .MuiInputBase-root": {
                                  height: 50,
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
                                border: "1px solid #ccc",
                                borderRadius: "6px",
                              }}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        component="p"
                        sx={{
                          color: "#083156",
                          fontSize: "16px",
                        }}
                      >
                        Payment method
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Card
                        elevation={0}
                        sx={{
                          width: "100%",
                          border: "1px solid #ccc",
                        }}
                      >
                        <CardHeader
                          subheader={
                            <>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginRight: "15px",
                                    color: "#2285d0",
                                  }}
                                >
                                  <CreditCardOutlinedIcon />
                                </Box>
                                <Typography
                                  color="#2285d0"
                                  sx={{
                                    paddingLeft: "5px",
                                  }}
                                >
                                  Card
                                </Typography>
                              </Box>
                            </>
                          }
                        />
                        <CardContent>
                          <Grid container>
                            <Grid item xs={12}>
                              <Box>
                                <InputLabel>Card number</InputLabel>
                                <TextField
                                  variant="outlined"
                                  value={cardNumber}
                                  placeholder="1234 1234 1234 1234"
                                  focused={cardNumberFocused}
                                  onFocus={handleCardFocus}
                                  onBlur={handleCardBlur}
                                  onKeyDown={handleCardNumberKeyDown}
                                  onChange={(e) => {
                                    // setCardNumber(e.target.value);
                                    const enteredValue = e.target.value;
                                    if (!isNaN(enteredValue)) {
                                      console.log("number");

                                      // console.log(e);
                                      if (cardNumber.length < 20) {
                                        setCardNumber(e.target.value);
                                        getFixCardNumber(
                                          enteredValue,
                                          cardNumber
                                        );
                                      }
                                    }
                                  }}
                                  fullWidth
                                  type="text"
                                  sx={{
                                    "& .MuiInputBase-root": {
                                      height: 50,
                                      fontSize: "16px",
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                      borderColor: cardNumberFocused
                                        ? "black !important"
                                        : "#ccc",
                                    },
                                    "& input": {
                                      color: "black", // Set the text color to black
                                    },
                                  }}
                                  InputProps={{
                                    endAdornment: (
                                      <InputAdornment>
                                        <LiaCcVisa />
                                        <BiLogoMastercard />
                                        <BiLogoMastercard />
                                        <BiLogoMastercard />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={6}>
                              <InputLabel>Expiration</InputLabel>
                              <TextField
                                value={cardMonth}
                                placeholder="MM/YY"
                                focused={cardMonthFocused}
                                onFocus={handleMonth}
                                onBlur={closeMonth}
                                onChange={(e) => {
                                  setCardMonth(e.target.value);
                                }}
                                sx={{
                                  "& .MuiInputBase-root": {
                                    fontSize: "16px",
                                    height: 50,
                                  },
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: cardMonthFocused
                                      ? "black !important"
                                      : "#ccc",
                                  },
                                }}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <InputLabel>CVC</InputLabel>
                              <TextField
                                value={cardCvc}
                                focused={cardCvcFocused}
                                onFocus={cvcFocused}
                                onBlur={closeFocused}
                                placeholder="CVC"
                                sx={{
                                  "& .MuiInputBase-root": {
                                    height: 50,
                                    fontSize: "16px",
                                  },
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: cardCvcFocused
                                      ? "black !important"
                                      : "#ccc",
                                  },
                                }}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <GrCreditCard />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              onClick={handleGridClick}
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              <FormControlLabel
                                label="Save card"
                                control={<Checkbox checked={isChecked} />}
                                // fullWidth
                              />
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Card
                elevation={0}
                sx={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                }}
              >
                <CardContent
                  sx={{
                    padding: "10px !important",
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
                          display: "grid",
                          gap: "10px",
                        }}
                      >
                        <Grid
                          item
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography>Duolingo English Test Bundle</Typography>
                          <Typography
                            sx={{
                              // textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <CurrencyRupeeOutlinedIcon fontSize="small" />
                            8,150.00
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography>Faster Results</Typography>
                          <Typography
                            sx={{
                              // textAlign: "center",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <CurrencyRupeeOutlinedIcon fontSize="small" />
                            3,300.00
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Divider />
                    </Grid>
                    <Grid item>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <Typography>Total</Typography>
                        <Typography
                          sx={{
                            // textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <CurrencyRupeeOutlinedIcon fontSize="small" />
                          11,480.00
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "70px",
              }}
            >
              <ButtonPay />
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
