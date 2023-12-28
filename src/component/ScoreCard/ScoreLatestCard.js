import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const ScoreLatestCard = () => {
  const render = () => {
    return (
      <>
        <Box>
          <Card
            sx={{
              width: "100%",
              border: "1px solid #ccc",
            }}
            elevation={0}
          >
            <CardHeader
              subheader={
                <>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "start",
                    }}
                  >
                    <Typography>Latest test</Typography>
                  </Box>
                </>
              }
            />
            <Divider
              sx={{
                margin: 0,
              }}
            />
            <CardContent></CardContent>
          </Card>
        </Box>
      </>
    );
  };
  return render();
};

export default ScoreLatestCard;
