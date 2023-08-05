import { Link } from "react-router-dom";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "¿Querés eliminar los productos de tu carrito?",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito limpiado exitosamente", "", "success");
      }
    });
  };

  return (
    <div>
      <Typography variant="h2" my={2}>
        {" "}
        Carrito{" "}
      </Typography>

      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <Box
              xs={6}
              sm={6}
              direction="column"
              p={"1rem"}
              my={"1rem"}
              sx={{ border: "1px solid grey" }}
            >
              <CardMedia
                component="img"
                alt={elemento.title}
                image={elemento.pictureUrl}
                height="200"
              />
              <Typography variant="h4">{elemento.title}</Typography>
              <Typography variant="h5">${elemento.price}</Typography>
              <Typography variant="h5">Cantidad:{elemento.quantity}</Typography>
              <Button onClick={() => deleteById(elemento.id)}>Eliminar</Button>
            </Box>
          </div>
        );
      })}

      {cart.length > 0 && <Button onClick={limpiar}>Limpiar carrito</Button>}

      <Typography variant="h2">Total: ${total}</Typography>

      <Link to="/checkout">
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </div>
  );
};

export default CartContainer;
