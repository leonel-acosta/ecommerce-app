import { Badge } from "@mui/material";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <>
      <Link to="/cart">
        <Badge badgeContent={total} color="secondary">
          <AiOutlineShoppingCart color="black" size="35px" />
        </Badge>
      </Link>
    </>
  );
};

export default CartWidget;
