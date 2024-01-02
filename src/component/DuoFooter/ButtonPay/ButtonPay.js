import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React from "react";

const ButtonPay = () => {
  return (
    // <Container>
    <AppBar
      position="fixed"
      style={{
        top: "auto",
        bottom: 0,
        backgroundColor: "#fff",
        borderTop: "1px solid #ccc",
        paddingTop: "10px",
        width: "100%",
      }}
      elevation={0}
    >
      <Toolbar>
        <Box sx={{}}>
          <Button variant="contained">Submit</Button>
        </Box>
      </Toolbar>
    </AppBar>
    // </Container>
  );
};

export default ButtonPay;
