import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Grid>
        <GridItem marginBottom="60px">
          <Navbar />
        </GridItem>
        <GridItem>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
