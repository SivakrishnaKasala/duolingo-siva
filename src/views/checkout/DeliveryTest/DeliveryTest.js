import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CheckHeader from "../../../component/duoheader/CheckHeader";

import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const DeliveryTest = () => {
  const [backToSelect, setBackToSelect] = useState(false);
  const [backToHome, setBackToHome] = useState(false);
  const [moveToAmountPay, setMoveToAmountPay] = useState(false);

  const navigate = useNavigate();

  const theme = useTheme();
  const isBelow770 = useMediaQuery(theme.breakpoints.down(770));
  const between770And1250 = useMediaQuery(theme.breakpoints.between(770, 1250));
  const above1250ScreenPage = useMediaQuery(theme.breakpoints.up(1250));
  console.log(between770And1250);

  const optionsData = [
    {
      id: 1,
      option: 1,
      price: "59.00",
    },
    {
      id: 2,
      option: 2,
      price: "98.00",
    },
  ];
  const [priceValue, setPriceValue] = useState(optionsData[1].option);
  console.log(priceValue);

  const getPrice = optionsData.filter(
    (item, index) => item.option === priceValue
  );
  console.log(getPrice[0].price);

  const below770ScreenPage = () => {
    return (
      <>
        <Box
          sx={{
            padding: "0px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "85vh",
            overflowY: "auto",
            flex: "1",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  color: "#083156",
                  fontSize: "24px",
                  textAlign: "center",
                  // lineHeight: "150%",
                  outline: "none",
                }}
              >
                Want faster results?
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#3d4d5c",
                  marginTop: "6px",
                  outline: "none",
                }}
              >
                Get the results of your first test within 12 hours
              </Typography>
            </Box>
            <Box
              component="img"
              src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/1709727a3b1489a34532.svg"
              alt="delivery type"
              sx={{
                margin: "40px auto auto",
                width: "128px",
              }}
            />
          </Box>
          <Box
            sx={{
              marginBottom: "15px",
            }}
          >
            <Box
              sx={{
                marginBottom: "20px",
                width: "100%",
              }}
            >
              <NavLink
                to="/duolingo/checkout/pay"
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: "15px",
                    color: "#3c5d87",
                  }}
                >
                  NO THANKS
                </Typography>
              </NavLink>
            </Box>
            <Button
              variant="contained"
              disableElevation
              sx={{
                width: "100%",
                fontWeight: 700,
                fontSize: "16px",
                borderRadius: "6px",
                color: "#fff",
                cursor: "pointer",
                borderColor: "#3c5d87",
                backgroundColor: "#3c5d87",
                "&:hover": {
                  backgroundColor: "#3c5d87",
                },
              }}
            >
              Upgrade +$40
            </Button>
          </Box>
        </Box>
      </>
    );
  };

  const above770ScreenPage = () => {
    return (
      <>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Grid item md={above1250ScreenPage && 3.5}>
            <Typography></Typography>
          </Grid>
          <Grid item md={above1250ScreenPage && 5}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={
                    {
                      // textAlign: "center",
                    }
                  }
                >
                  <Typography
                    sx={{
                      color: "#083156",
                      fontSize: "30px",
                      fontWeight: 700,
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  >
                    Want faster results?
                  </Typography>
                  <Typography>
                    Get the results of your first result within 12 hours!
                  </Typography>
                </Box>
                <Box
                  component="img"
                  src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/1709727a3b1489a34532.svg"
                  alt="delivery type"
                  sx={{
                    width: "200px",
                    height: "200px",
                    margin: "40px 125px 180px 125px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "180px",
                  // justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => setMoveToAmountPay(true)}
                  sx={{
                    // textAlign: "center",
                    fontWeight: 700,
                    fontSize: "15px",
                    cursor: "pointer",
                    color: "#fff",
                    borderColor: "#3c5d87",
                    backgroundColor: "#3c5d87",
                    "&:hover": {
                      backgroundColor: "#3c5d87",
                    },
                    height: "40px",
                    letterSpacing: ".5px",
                    padding: "0 24px",
                  }}
                >
                  upgrade +$40
                </Button>
                <Box
                  sx={{
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  <NavLink
                    to="/duolingo/checkout/pay"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#3c5d87",
                        textAlign: "center",
                      }}
                    >
                      NO THANKS
                    </Typography>
                  </NavLink>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={above1250ScreenPage && 3.5}>
            <Card
              sx={{
                padding: "32px",
                width: "254px",
                height: "150px",
                // boxSizing: "border-box",
              }}
            >
              <CardContent
                sx={{
                  padding: "0",
                }}
              >
                <Grid
                  container
                  height="144px"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    // width: "100%",
                    // height: "100%",
                  }}
                >
                  <Grid
                    item
                    sx={
                      {
                        // height: "50px",
                      }
                    }
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        component="p"
                        sx={{
                          fontSize: "15px",
                          color: "#3d4d5c",
                        }}
                      >
                        Duolingo English Test
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          fontSize: "15px",
                          color: "#3d4d5c",
                        }}
                      >
                        $98.00
                      </Typography>
                    </Box>
                    <Box>
                      {/* <Autocomplete
                        value={priceValue}
                        onChange={(event, newValue) => setPriceValue(newValue)}
                        options={optionsData.map((option) => option.option)}
                        id="controllable-states-demo"
                        sx={{
                          width: "150px",
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <div style={{ marginRight: "8px" }}>Qty:</div>
                                </InputAdornment>
                              ),
                            }}
                          />
                        )} */}
                      {/* /> */}
                      {/* <InputLabel id="qty-label">Qty</InputLabel> */}
                      {/* <Select
                        value={priceValue}
                        onChange={(event) => setPriceValue(event.target.value)}
                        // label="Qty"
                        // labelId="qty-label"
                        // id="qty-select"
                      >
                        <MenuItem value="" disabled>
                          Qty:
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                      </Select> */}
                    </Box>
                  </Grid>

                  <Grid item>
                    <Divider
                      style={{
                        // border: "1px solid #ccc",
                        width: "100%",
                        height: "2px",
                        padding: "5px 0 5px 0 ",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: "#3d4d5c",
                      }}
                    >
                      Subtotal
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: "#3d4d5c",
                      }}
                    >
                      $59.00
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    );
  };

  const handleBackPage = (back) => {
    setBackToSelect(true);
  };

  const renderDeliveryPage = () => {
    return (
      <>
        <CheckHeader backPage={handleBackPage} />
        <Container maxWidth="lg">
          {/* <Grid container>
            <Grid item>
              <Typography>hello</Typography>
            </Grid>
          </Grid> */}
          <Box>
            <Box>{isBelow770 && below770ScreenPage()}</Box>
            <Box>
              {(between770And1250 || above1250ScreenPage) &&
                above770ScreenPage()}
            </Box>
          </Box>
        </Container>
      </>
    );
  };

  const render = () => {
    if (backToSelect) {
      return navigate("/duolingo/checkout/select");
    } else if (backToHome) {
      return navigate("/duolingo/home");
    } else if (moveToAmountPay) {
      return navigate("/duolingo/checkout/pay");
    } else {
      return renderDeliveryPage();
    }
  };

  return render();
};

export default DeliveryTest;
