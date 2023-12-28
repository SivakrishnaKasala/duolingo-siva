import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

//icons
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { NavLink } from "react-router-dom";

const PurchaseTest = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(440));
  console.log(isSmallScreen);
  const render = () => {
    return (
      <>
        <Box>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #ccc",
            }}
          >
            <CardHeader
              subheader={
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      What should I do next?
                    </Typography>
                    <IconButton>
                      <HelpOutlineOutlinedIcon />
                    </IconButton>
                  </Box>
                </>
              }
            />
            <Divider
              sx={{
                margin: 0,
              }}
            />
            <CardContent>
              <Grid container>
                <Grid
                  item
                  sx={{
                    minWidth: "230px",
                  }}
                  xs={12}
                >
                  <Box
                    sx={{
                      width: "auto",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Purchase another test
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        margin: "12px 0 20px",
                      }}
                    >
                      Buy now and take it any time in the next 21 days!
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <NavLink to="/duolingo/pay">
                      <Button
                        variant="contained"
                        sx={{
                          width: isSmallScreen && "100%",
                          minWidth: "210px",
                          borderRadius: "6px",
                          padding: "0 24px",
                          backgroundColor: "#3c5d87",
                          borderColor: "#3c5d87",
                          fontSize: "15px",
                          height: "40px",
                          "&:hover": {
                            backgroundColor: "#3c5d87",
                            borderColor: "#3c5d87",
                          },
                        }}
                      >
                        Buy again
                      </Button>
                    </NavLink>
                  </Box>
                </Grid>
                {!isSmallScreen && (
                  <Grid item>
                    <Box
                      component="img"
                      src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/cba6e6426b3caff7bb5e.svg"
                    />
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </>
    );
  };

  return render();
};

export default PurchaseTest;
