import { Box, Container, Grid } from "@mui/material";
import DuoFooter from "../component/DuoFooter/DuoFooter";
import DuoHeader from "../component/duoheader/DuoHeader";
import FollowCard from "../component/FollowCard/FollowCard";
import PurchaseTest from "../component/PurchaseTest/PurchaseTest";
import PracticeTestCard from "../component/PracticeTest/PracticeTestCard";
import ScoreLatestCard from "../component/ScoreCard/ScoreLatestCard";
import SideBar from "../component/SideBar/SideBar";
import routes from "../routes";
import { useState } from "react";
import MainSideBar from "../component/SideBar/MainSideBar";

const Duolingo = () => {
  const [sidebarOpenResponsive, setSidebarOpenResponsive] = useState(false);
  const renderDuoSiva = () => {
    return (
      <>
        <DuoHeader />
        <Container
          sx={{
            marginTop: "15px",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <PurchaseTest />
                </Grid>
                <Grid item xs={12}>
                  <PracticeTestCard />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <ScoreLatestCard />
                </Grid>
                <Grid item xs={12}>
                  <FollowCard />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <DuoFooter />
      </>
    );
  };

  return (
    <>
      <Box display="flex">
        <MainSideBar
          routes={routes.filter(
            (route, index) => route.layout === "/duolingo" && route.isMenuItem
          )}
          logo={{}}
          openResponsive={sidebarOpenResponsive}
          closeSidebarResponsive={() => setSidebarOpenResponsive(false)}
        />
      </Box>
    </>
  );
};

export default Duolingo;
