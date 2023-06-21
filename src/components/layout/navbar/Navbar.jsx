import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge, Grid, Button } from "@mui/material";
import "./Navbar.css";
import Logo from "../../common/logo/Logo.jsx";

const Navbar = () => {
  return (
    <>
      <nav>
        <Grid container className="navbar" sx={{ color: "black", size: "large", fullWidt: true }}>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <ul>
              <il>
                <Button sx={{ color: "black", size: "large", fullWidt: true }}>
                  Living
                </Button>
              </il>
              <il>
                <Button sx={{ color: "black", size: "large", fullWidt: true }}>
                  Cocina
                </Button>
              </il>
              <il>
                <Button sx={{ color: "black", size: "large", fullWidt: true }}>
                  Baño
                </Button>
              </il>
            </ul>
          </Grid>
          <Grid item>
            <Badge badgeContent={4} color="secondary">
              <AiOutlineShoppingCart color="black" size="35px" />
            </Badge>
          </Grid>
        </Grid>
      </nav>
    </>
  );
};

export default Navbar;
