import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Grid } from "@mui/material";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Grid container sx={{ my: "1rem", px: "2rem" }}>
        <Outlet />
      </Grid>

      <Footer />
    </div>
  );
};

export default Layout;
