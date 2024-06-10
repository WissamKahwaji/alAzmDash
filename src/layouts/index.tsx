import { Box } from "@mui/material";
import { ReactNode } from "react";
import SideBar from "./sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F2F2F2",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        color: "white",
        gap: 3,
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      <SideBar />
      <Box
        sx={{
          width: "100%",
          overflowY: "auto",
          padding: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
