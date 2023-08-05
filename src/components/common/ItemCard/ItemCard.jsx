import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ItemCountContainer from "../itemCount/ItemCountContainer";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "react-toastify/dist/ReactToastify.css";

const ItemCard = ({ elemento, isInItemList = true }) => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const onAdd = (cantidad) => {
    let productCart = { ...elemento, quantity: cantidad };
    addToCart(productCart);
    toast.success("Agregado al carrito", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "light",
    });
  };
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        alt={elemento.title}
        image={elemento.pictureUrl}
      />
      <CardContent>
        <Typography variant="body1" size="small">
          {elemento.category}
        </Typography>
        <Typography variant="h5">{elemento.title}</Typography>
        <Typography variant="h6">$ {elemento.price}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/ItemDetail/${elemento.id}`}>
          <Button size="large">Ver detalles</Button>
        </Link>
      </CardActions>
      <ItemCountContainer stock={elemento.stock} onAdd={onAdd} />
      <ToastContainer />
    </Card>
  );
};

export default ItemCard;
