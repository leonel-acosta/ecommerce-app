import { Badge } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Link to="/cart">
        <Badge badgeContent={4} color="secondary">
          <AiOutlineShoppingCart color="black" size="35px" />
        </Badge>
      </Link>
    </>
  );
};

export default CartWidget;
