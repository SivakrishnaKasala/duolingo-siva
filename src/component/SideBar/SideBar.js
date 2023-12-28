import { NavLink, useLocation } from "react-router-dom";
import routes from "../../routes";
import {
  Box,
  Button,
  Divider,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";

//icons
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const SideBar = () => {
  const location = useLocation();
  console.log(location);

  const menuData = routes.map((item, index) => {
    if (item.isMenuItem === true && item.layout === "/duolingo") {
      return (
        <Grid item key={index} xs={12}>
          <NavLink to={item.layout + item.path}>
            <Button
              startIcon={item.icon}
              variant={
                location.pathname === item.layout + item.path
                  ? "outlined"
                  : "text"
              }
            >
              {item.name}
            </Button>
          </NavLink>
        </Grid>
      );
    }
  });
  //   console.log(menuData);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        // justifyContent: "start",
        height: "100vh",
        width: "100%",
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // borderBottomWidth: "20px",
          height: "67px",
        }}
        xs={12}
      >
        <Box
          component="img"
          src="https://d23cwzsbkjbm45.cloudfront.net/static/images/wp/d49071861c2d7edb1d9f.svg"
          sx={{
            height: "32px",
            width: "32px",
          }}
        />
        <IconButton sx={{}}>
          <MenuOpenIcon />
        </IconButton>
      </Grid>

      <Grid
        item
        sx={{
          paddingTop: 2,
        }}
        xs={12}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {menuData}
          <Grid
            item
            xs={12}
            sx={{
              marginTop: "25px",
              marginBottom: "25px",
            }}
          >
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              sx={{
                height: "auto",
                padding: "8px 10px",
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              <ShoppingCartOutlinedIcon
                sx={{
                  marginRight: "5px",
                }}
              />

              <Typography
                variant="span"
                sx={{
                  lineHeight: 1,
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              >
                PURCHASE A TEST
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid
        item
        sx={{
          flexGrow: 1,
        }}
      ></Grid> */}
      <Grid
        item
        xs={12}
        sx={{
          marginTop: "auto",
          marginBottom: "30px",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            width: "fit-content",
            height: "40px",
            padding: "8px 10px",
            display: "flex",
            // textAlign: "center",
            alignItems: "center",
            backgroundColor: "#fef6f0",
            borderColor: "#fa811b",
            color: "#bf4900",
          }}
        >
          <ChatBubbleOutlineOutlinedIcon
            sx={{
              fontSize: "18px",
            }}
          />
          <Typography
            variant="p1"
            sx={{
              marginLeft: "7px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Help
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default SideBar;
