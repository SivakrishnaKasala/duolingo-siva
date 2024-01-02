import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
// import PerfectScrollbar from "react-perfect-scrollbar";

// import routes from "../../routes";

//icons
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import { FaWhatsapp } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { FaRegTimesCircle } from "react-icons/fa";

// import {
//   ButtonIconStyled,
//   IconButtonStyled,
// } from "../../assets/theme/component/sidebar";

const ButtonIconStyled = styled(Button)`
  && {
    height: 40px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    background-color: #fef6f0;
    border-color: #fa811b;
    color: #bf4900;
    &:hover {
      background-color: #fff;
      border-color: #fa811b;
    }
  }
`;

const MainSideBar = ({
  routes,
  logo,
  openResponsive,
  closeSidebarResponsive,
}) => {
  const location = useLocation();
  const [helpType, setHelpType] = useState(false);

  const [miniActive, setMiniActive] = useState(false);

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
              sx={{
                padding: "8px 10px",
              }}
            >
              {item.name}
            </Button>
          </NavLink>
        </Grid>
      );
    }
  });

  console.log(routes);
  const createLinks = (routes) => {
    return routes.map((pop, index) => {
      if (pop.redirect) {
        return null;
      } else if (pop.divider) {
        return <Divider key={index} />;
      }
      // } else if (pop.title) {
      //   if (miniActive) {
      //     return null;
      //   } else {
      //     return (
      //       <Typography variant="h6" component="h6" key={index}>
      //         {pop.title}
      //       </Typography>
      //     );
      //   }
      // }
      // let iconComponent = null;
      let textContext = () => {
        return (
          <>
            {!miniActive && (
              <Box display="flex" alignItems="center">
                {typeof pop.icon === "string" ? (
                  <Box component="i" marginLeft={miniActive ? "-.25rem" : ""} />
                ) : null}
                {typeof pop.icon === "object" ? (
                  <Box component={pop.icon} width="30px" height="30px" />
                ) : null}
                {pop.name !== undefined ? (
                  <Box component="span">{pop.name}</Box>
                ) : null}
              </Box>
            )}
            {miniActive && (
              <Box display="flex" alignItems="center">
                {typeof pop.icon === "string" ? <Box component="i" /> : null}
                {typeof pop.icon === "object" ? (
                  <Tooltip arrow placement="right" title={pop.name}>
                    <Box component={pop.icon} />
                  </Tooltip>
                ) : null}
              </Box>
            )}
          </>
        );
      };

      if (pop.collapse) {
        return null;
      } else if (pop.href) {
        return null;
      } else {
        return (
          <ListItem
            key={index}
            component={Link}
            to={pop.layout + pop.path}
            selected={location.pathname === pop.layout + pop.path}
          >
            {textContext()}
          </ListItem>
        );
      }
    });
  };

  const mobileObject = () => {
    return (
      <>
        {" "}
        <Box
          sx={{
            padding: "12px 15px",
          }}
        >
          <Box component={Grid} container>
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
          </Box>
        </Box>
      </>
    );
  };

  const desktopObject = () => {
    return (
      <>
        <Box
          sx={{
            padding: "12px 15px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          {/* <Tooltip title="raja" placement="right" arrow>
            Hello
          </Tooltip> */}
          <List>
            {createLinks(routes)}
            <ListItem key={routes.length}>
              <IconButton
                onClick={() => {
                  if (miniActive) {
                    setMiniActive(false);
                  } else {
                    setMiniActive(true);
                  }
                }}
              >
                <Tooltip
                  title={miniActive ? "Show Menu" : "Hide Menu"}
                  arrow
                  placement="right"
                >
                  <MenuOpenIcon />
                </Tooltip>
              </IconButton>
            </ListItem>
          </List>

          <Box>
            {helpType && (
              <ButtonGroup
                orientation="vertical"
                sx={{
                  padding: "0px",
                  marginBottom: "10px",
                }}
              >
                <ButtonIconStyled
                  // startIcon={}
                  variant="outlined"
                >
                  <SmsOutlinedIcon
                    sx={{
                      fontSize: "22px",
                    }}
                  />
                  {!miniActive && (
                    <Typography
                      variant="p1"
                      sx={{
                        marginLeft: "7px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      Chat
                    </Typography>
                  )}
                </ButtonIconStyled>
                <ButtonIconStyled
                  // startIcon={}
                  variant="outlined"
                  // sx={{
                  //   padding: "8px 10px",
                  //   height: "40px",
                  //   backgroundColor: "#fef6f0",
                  //   borderColor: "#fa811b",
                  //   color: "#bf4900",
                  //   "&:hover": {
                  //     // backgroundColor:""
                  //     backgroundColor: "#fff",
                  //     borderColor: "#fa811b",
                  //   },
                  // }}
                >
                  <FaWhatsapp
                    sx={{
                      fontSize: "30px",
                    }}
                    size="large"
                  />
                  {!miniActive && (
                    <Typography
                      variant="p1"
                      sx={{
                        marginLeft: "7px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      Whatsapp
                    </Typography>
                  )}
                </ButtonIconStyled>
              </ButtonGroup>
            )}
            {/* <Button
              onClick={() => {
                if (helpType === true) {
                  setHelpType(false);
                } else {
                  setHelpType(true);
                }
              }}
              variant="outlined"
              disableElevation
              disableRipple
              sx={{
                // width: "fit-content",
                height: "40px",
                padding: "8px 10px",
                display: "flex",
                // textAlign: "center",
                alignItems: "center",
                backgroundColor: "#fef6f0",
                borderColor: "#fa811b",
                color: "#bf4900",
                "&:hover": {
                  // backgroundColor:""
                  backgroundColor: "#fff",
                  borderColor: "#fa811b",
                },
              }}
            >
              
            </Button> */}
            <ButtonIconStyled
              onClick={() => {
                if (helpType === true) {
                  setHelpType(false);
                } else {
                  setHelpType(true);
                }
              }}
              variant="outlined"
              disableElevation
              disableRipple
              width={miniActive && "40px!important"}
            >
              <CiChat1
                size="large"
                // fontSize="40px"
              />
              {!miniActive && (
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
              )}
            </ButtonIconStyled>
          </Box>
        </Box>
      </>
    );
  };
  return (
    <>
      <Hidden mdDown implementation="css">
        <Drawer variant="permanent" anchor="open">
          {/* {navigator.platform.indexOf("Win") > -1
            ? {
                 <PerfectScrollbar>{desktopObject()}</PerfectScrollbar> 
              }
            : desktopObject()} */}
          {desktopObject()}
        </Drawer>
      </Hidden>
    </>
  );
};

export default MainSideBar;
