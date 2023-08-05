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
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("");

  const { cart, getTotalPrice } = useContext(CartContext);

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    newsletter: "",
  });

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      newsletter: "",
    },
    onSubmit: (data) => {},
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Campo obligatorio")
        .min(10, "Ingrese su nombre y apellido")
        .max(40),
      email: Yup.string()
        .email("Ingrese su correo electrónico")
        .required("Campo obligatorio"),
      phone: Yup.string().required("Campo obligatorio"),
    }),
    validateOnChange: false,
  });

  let total = getTotalPrice();

  // const ordersCollection = collection(db, "orders");
  // addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

  // cart.forEach((product) => {
  //   updateDoc(doc(db, "products", product.id), {
  //     stock: product.stock - product.quantity,
  //   });
  // });

  // const handleChange = (evento) => {
  //   setData({ ...data, [evento.target.name]: evento.target.value });

  // let refCollection = collection(db, "products", id);
  // updateDoc(refDoc, { stock: product.stock - product.quantity });

  // let refDoc = doc();

  // forma correcta de actualizar el stock en FB
  // cart.forEach((product) =>{updateDoc (doc(dv, "products", product.id), {stock: product.stock - product.quantity})})

  // LAS VALIDACIONES

  // AXIOS.POST(URL, DATOS)
  console.log(data);

  return (
    <>
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
          justifyContent: "left",
        }}
      >
        <Grid container item xs={12} md={3} sm={6} px={2} direction="column">
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
                  <Typography variant="h6">
                    {product.title} | Cantidad: {product.quantity}{" "}
                  </Typography>
                </Box>
              </div>
            );
          })}
          <Typography variant="h4">Total: ${total}</Typography>
        </Grid>
        <Grid container item xs={12} sm={3} md={3} direction="column">
          {orderId ? (
            <p>gracias por su compra</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <FormLabel>Nombre completo</FormLabel>
              <TextField
                type="text"
                placeholder="Ingrese su nombre"
                name="name"
                onChange={handleChange}
                error={errors.name ? true : false}
                helperText={errors.name}
              />

              <FormLabel>Correo electrónico</FormLabel>
              <TextField
                type="text"
                placeholder="Ingrese su email"
                name="email"
                onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email}
              />
              <FormLabel>Teléfono</FormLabel>

              <TextField
                type="text"
                placeholder="Ingrese su teléfono"
                name="phone"
                onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email}
              />
              <Grid container item xs={12} sm={12} md={12} direction="row">
                <Checkbox
                  type="checkbox"
                  name="newsletter"
                  onChange={handleChange}
                />
                <Typography>Suscribirse al newsletter</Typography>
              </Grid>
              <Button type="submit" variant="contained">
                Confirmar compra
              </Button>
            </form>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default CheckoutContainer;