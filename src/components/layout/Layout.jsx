import React from "react";
import { NavBar } from "../navBar";
import { Footer } from "../footer";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box height={"100vh"} display={"flex"} flexDirection={"column"}>
      <NavBar />
      <Box p={5} flex={"1 0 auto"}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
