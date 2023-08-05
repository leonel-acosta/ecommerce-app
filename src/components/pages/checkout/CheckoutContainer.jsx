import { useState } from "react";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("");

  const { cart, getTotalPrice } = useContext(CartContext);

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  let total = getTotalPrice();

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });
  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });

    // let refCollection = collection(db, "products", id);
    // updateDoc(refDoc, { stock: product.stock - product.quantity });

    // let refDoc = doc();

    // forma correcta de actualizar el stock en FB
    // cart.forEach((product) =>{updateDoc (doc(dv, "products", product.id), {stock: product.stock - product.quantity})})

    // LAS VALIDACIONES

    // AXIOS.POST(URL, DATOS)
    console.log(data);
  };

  return (
    <div>
      <Typography variant="h2">Checkout</Typography>
      <Grid
        container
        item
        xs={12}
        sm={12}
        direction="row"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "10px 0 10px 0",
          flexDirection: "row",
        }}
      >
        <Grid container item xs={12} md={12} sm={12} direction="column">
          <Typography variant="h5">Su orden de compra:</Typography>
          {cart.map((product) => {
            return (
              <div key={product.id}>
                <Box
                  xs={6}
                  sm={6}
                  direction="column"
                  p={"1rem"}
                  my={"1rem"}
                  sx={{ border: "1px solid grey" }}
                >
                  <Typography variant="h4">
                    {product.title} | Cantidad: {product.quantity}{" "}
                  </Typography>
                </Box>
              </div>
            );
          })}
          <Typography variant="h4">Total: ${total}</Typography>
        </Grid>
        <Grid container item xs={12} sm={12} direction="column">
          {orderId ? (
            <p>gracias por su compra</p>
          ) : (
            <FormControl onSubmit={handleSubmit}>
              <FormLabel>Nombre completo</FormLabel>
              <TextField
                type="text"
                placeholder="Ingrese su nombre"
                name="name"
                onChange={handleChange}
              />

              <FormLabel>Correo electrónico</FormLabel>
              <TextField
                type="text"
                placeholder="Ingrese su email"
                name="email"
                onChange={handleChange}
              />
              <FormLabel>Teléfono</FormLabel>

              <TextField
                type="text"
                placeholder="Ingrese su teléfono"
                name="phone"
                onChange={handleChange}
              />
              <Button type="submit" variant="contained">
                Confirmar compra
              </Button>
            </FormControl>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutContainer;