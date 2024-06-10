import { Box, Hidden, ListItemIcon, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../constants";
import logo from "../../assets/logo.png";
const SideBar = () => {
  const navLinks = NAV_LINKS;
  return (
    <Box
      sx={{
        backgroundColor: "#464443",
        padding: 2,

        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
      >
        <Hidden smDown>
          {/* <Typography
            variant="h5"
            component="h1"
            my={2}
            fontWeight={4}
            fontSize={18}
          >
            Valorem
          </Typography> */}
          <img
            src={logo}
            alt={"asda"}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Hidden>
        <Box
          sx={{
            py: {
              xs: "0px",
              ls: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map(item => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <item.icon />
                </ListItemIcon>
                <Hidden mdDown>
                  <Typography
                    sx={{
                      "&:hover": {
                        color: "#bdb9b6",
                      },
                      color: "white",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
