import { Container, Grid } from "@mui/material";
import DuoFooter from "../component/DuoFooter/DuoFooter";
import DuoHeader from "../component/duoheader/DuoHeader";
import FollowCard from "../component/FollowCard/FollowCard";
import PurchaseTest from "../component/PurchaseTest/PurchaseTest";
import PracticeTestCard from "../component/PracticeTest/PracticeTestCard";
import ScoreLatestCard from "../component/ScoreCard/ScoreLatestCard";

const Duolingo = () => {
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

export default Duolingo;
