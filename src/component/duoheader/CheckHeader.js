import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";

//icons
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CheckHeader = ({ selectType, backPage }) => {
  const [backToHome, setBackToHome] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  // console.log(navigate);
  const isBelow440 = useMediaQuery(theme.breakpoints.down(440));
  return (
    <>
      <Box
        sx={{
          padding: "24px 32px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            padding: "0!important",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              //   padding: 0,
            }}
          >
            <Grid item>
              {selectType === "SelectType" ? null : (
                <IconButton onClick={() => backPage()}>
                  <ArrowBackOutlinedIcon fontSize="large" />
                </IconButton>
              )}
            </Grid>
            <Grid item sx={{}}>
              <Box
                sx={{
                  height: "100%",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  textAlign="center"
                  style={{
                    textAlign: "center",
                  }}
                  src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/557e9cb1ce105779cdb5.svg"
                />{" "}
              </Box>
            </Grid>
            <Grid item>
              <IconButton onClick={() => setBackToHome(true)}>
                <CloseOutlinedIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Dialog
        open={backToHome}
        aria-labelledby="dialog-title"
        // hideBackdrop
        // aria-describedby="dialog-a"
        maxWidth="xs" // this maxwidth and fullwidth is important for changing the width of the dialog
        fullWidth
        sx={
          {
            // width: isBelow440 ? "320px" : "380px",
            // height: isBelow440 ? "220px" : "200px",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // flexDirection: "column",
            // overflow: "scroll",
            // // padding: "20px",
          }
        }
      >
        <DialogTitle
          id="dialog-title"
          sx={{
            fontWeight: 700,
            padding: "20px 20px 10px 20px",
          }}
        >
          Are you sure you want to exit?
        </DialogTitle>
        <DialogActions>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0 20px 20px 20px",
            }}
            spacing={1.5}
          >
            <Grid item xs={12}>
              <Button
                variant="contained"
                onClick={() => setBackToHome(false)}
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  borderColor: "#3c5d87",
                  backgroundColor: "#3c5d87",
                  borderRadius: "6px",
                  fontSize: "16px",
                  height: "48px",
                  width: "100%",
                  "&:hover": {
                    color: "#fff",
                    fontWeight: 700,
                    borderColor: "#3c5d87",
                    backgroundColor: "#3c5d87",
                  },
                }}
              >
                Stay in checkout
              </Button>
            </Grid>
            <Grid item xs={12}>
              {/* <NavLink to="/duolingo/home"> */}
              <Button
                variant="outlined"
                onClick={() => navigate("/duolingo/home")}
                sx={{
                  color: "#3c5d87",
                  fontWeight: 700,
                  borderRadius: "6px",
                  fontSize: "16px",
                  height: "48px",
                  width: "100%",
                }}
              >
                Return home
              </Button>
              {/* </NavLink> */}
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CheckHeader;
