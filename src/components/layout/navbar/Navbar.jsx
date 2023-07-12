import { Grid, Button } from "@mui/material";
import "./Navbar.css";
import Logo from "../../common/logo/Logo.jsx";
import CartWidget from "../../common/CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Grid
          container
          className="navbar"
          sx={{ color: "black", size: "large", fullWidt: true }}
        >
          <Grid item>
            <Link to="/">
              <Logo />
            </Link>
          </Grid>
          <Grid item>
            <ul>
              <il>
                <Link to="/category/dormitorio">
                  <Button
                    sx={{ color: "black", size: "large", fullWidt: true }}
                  >
                    Dormitorio
                  </Button>
                </Link>
              </il>
              <il>
                <Link to="/category/living">
                  <Button
                    sx={{ color: "black", size: "large", fullWidt: true }}
                  >
                    Living
                  </Button>
                </Link>
              </il>
              <il>
                <Link to="/category/cocina">
                  <Button
                    sx={{ color: "black", size: "large", fullWidt: true }}
                  >
                    Cocina
                  </Button>
                </Link>
              </il>
            </ul>
          </Grid>
          <Grid item>
            <CartWidget />
          </Grid>
        </Grid>
      </nav>
    </>
  );
};

export default Navbar;
