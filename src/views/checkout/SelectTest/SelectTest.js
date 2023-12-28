import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CheckHeader from "../../../component/duoheader/CheckHeader";
import {
  Box,
  Button,
  Card,
  CardActions,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const SelectTest = () => {
  const [backToHome, setBackToHome] = useState(false);
  const [backToSelect, setBackToSelect] = useState(false);
  const [moveToDelivery, setMovetoDelivery] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const isBelow470 = useMediaQuery(theme.breakpoints.down(470));
  console.log(isBelow470);

  const backToSelectPage = (select) => {
    setBackToSelect(true);
  };

  const renderSelectPage = () => {
    return (
      <>
        <CheckHeader selectType="SelectType" />
        <Container maxWidth="xl">
          <Grid
            container
            // sx={{
            //   display: "flex",
            //   flexDirection: "row",
            // }}
            display="flex"
            direction="row"
            justifyContent="center"
            width="100%"
          >
            {/* <Grid item></Grid> */}
            <Grid item alignSelf="center">
              <Grid container>
                <Grid item>
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Grid
                      item
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="h5">Choose a test option</Typography>
                      <Typography
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        Take it online anytime
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  // sx={{
                  //   marginTop: "10px",
                  //   marginBottom: "5px",
                  // }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      width: "400px",
                      height: "120px",
                      // padding: "17px",
                      position: "relative",
                      marginTop: "15px",
                      marginBottom: "15px",
                      padding: isBelow470 ? "45px 17px 17px" : 0,
                      border: "2px solid #ccc",
                    }}
                  >
                    <CardActions
                      sx={{
                        width: "100%",
                        // height: "100%",
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                      }}
                      onClick={() => {
                        console.log("selected");
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          width: "100%",
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            top: 0,
                            left: 0,
                            position: "absolute",
                          }}
                        >
                          Best value
                        </Button>
                      </Box>
                      <Grid
                        container
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          // justifyContent: "space-between",
                          padding: 0,
                        }}
                      >
                        {/* <Grid item>
                          <Button variant="contained">Best value</Button>
                        </Grid> */}
                        <Grid item xs={12}>
                          <Grid
                            container
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <Grid
                              item
                              sx={{
                                width: isBelow470 ? "80px" : 0,
                              }}
                            >
                              <Box
                                component="img"
                                src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/e64df21f23f793be6b00.svg"
                                sx={{
                                  width: "100%",
                                  margin: "auto",
                                }}
                              />
                            </Grid>
                            <Grid
                              item
                              sx={{
                                width: isBelow470 ? "80px" : 0,
                                flexGrow: 1,
                                // display: "flex",
                                // flexDirection: "row",
                                // justifyContent: "flex-start",
                              }}
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    paddingLeft: 1,
                                  }}
                                >
                                  2 tests
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid
                              item
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                height: isBelow470 ? "80px" : 0,
                              }}
                            >
                              <Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      fontSize: isBelow470 ? "17px" : "20px",
                                      fontWeight: 700,
                                    }}
                                  >
                                    $49
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      fontSize: "12px",
                                      fontWeight: 700,
                                      paddingLeft: 0.6,
                                      paddingTop: 0.4,
                                    }}
                                  >
                                    EACH
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontSize: isBelow470 ? "14px" : "16px",
                                      // fontWeight: 700,
                                      // textDecoration: "line-through",
                                    }}
                                  >
                                    <del
                                      style={{
                                        marginRight: "5px",
                                      }}
                                    >
                                      $118
                                    </del>
                                    $98 total
                                  </Typography>
                                  {/* <Typography
                                    sx={{
                                      fontSize: isBelow470 ? "14px" : "16px",
                                      // fontWeight: 700,
                                      paddingLeft: 0.8,
                                    }}
                                  >
                                    $98 total
                                  </Typography> */}
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid
                  item
                  // sx={{
                  //   marginTop: "10px",
                  //   marginBottom: "5px",
                  // }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      width: "400px",
                      height: "120px",
                      // padding: "17px",
                      position: "relative",
                      marginTop: "15px",
                      marginBottom: "15px",
                      padding: isBelow470 ? "45px 17px 17px" : 0,
                      border: "2px solid #ccc",
                    }}
                  >
                    <CardActions
                      sx={{
                        width: "100%",
                        // height: "100%",
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                      }}
                      onClick={() => {
                        console.log("selected");
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          width: "100%",
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            top: 0,
                            left: 0,
                            position: "absolute",
                          }}
                        >
                          Best value
                        </Button>
                      </Box>
                      <Grid
                        container
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          // justifyContent: "space-between",
                          padding: 0,
                        }}
                      >
                        {/* <Grid item>
                          <Button variant="contained">Best value</Button>
                        </Grid> */}
                        <Grid item xs={12}>
                          <Grid
                            container
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                            }}
                          >
                            <Grid
                              item
                              sx={{
                                width: isBelow470 ? "80px" : 0,
                              }}
                            >
                              <Box
                                component="img"
                                src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/e64df21f23f793be6b00.svg"
                                sx={{
                                  width: "100%",
                                  margin: "auto",
                                }}
                              />
                            </Grid>
                            <Grid
                              item
                              sx={{
                                width: isBelow470 ? "80px" : 0,
                                flexGrow: 1,
                                // display: "flex",
                                // flexDirection: "row",
                                // justifyContent: "flex-start",
                              }}
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  height: "100%",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    paddingLeft: 1,
                                  }}
                                >
                                  2 tests
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid
                              item
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                height: isBelow470 ? "80px" : 0,
                              }}
                            >
                              <Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      fontSize: isBelow470 ? "17px" : "20px",
                                      fontWeight: 700,
                                    }}
                                  >
                                    $49
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      fontSize: "12px",
                                      fontWeight: 700,
                                      paddingLeft: 0.6,
                                      paddingTop: 0.4,
                                    }}
                                  >
                                    EACH
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontSize: isBelow470 ? "14px" : "16px",
                                      // fontWeight: 700,
                                      // textDecoration: "line-through",
                                    }}
                                  >
                                    <del
                                      style={{
                                        marginRight: "5px",
                                      }}
                                    >
                                      $118
                                    </del>
                                    $98 total
                                  </Typography>
                                  {/* <Typography
                                    sx={{
                                      fontSize: isBelow470 ? "14px" : "16px",
                                      // fontWeight: 700,
                                      paddingLeft: 0.8,
                                    }}
                                  >
                                    $98 total
                                  </Typography> */}
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item></Grid> */}
            <Grid item xs={12}>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => navigate("/duolingo/checkout/delivery")}
                  sx={{
                    width: "100%",
                    padding: "0 25px",
                    marginBottom: "16px",
                    marginTop: "20px",
                    color: "#fff",
                    fontWeight: 700,
                    borderColor: "#3c5d87",
                    backgroundColor: "#3c5d87",
                    borderRadius: "6px",
                    fontSize: "15px",
                    height: "40px",
                  }}
                >
                  Continue
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  };

  const render = () => {
    if (backToHome) {
      return <Navigate to="/duolingo/pay" />;
    } else if (moveToDelivery) {
      return <Navigate to="/duolingo/checkout/delivery" />;
    } else {
      return renderSelectPage();
    }
  };
  return render();
};

export default SelectTest;
