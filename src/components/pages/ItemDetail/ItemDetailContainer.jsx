import { useEffect, useState, useContext } from "react";
// import { products } from "../../../catalogo";
import { useParams } from "react-router-dom";
import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  const { addToCart, getQuantityById } = useContext(CartContext);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);

    toast.success("Agregado al carrito", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "light",
    });
  };

  return (
    <>
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
        }}
      >
        <Grid container item xs={12} sm={3} direction="column">
          <Card>
            <CardMedia
              image={producto.pictureUrl}
              component="img"
              alt={producto.title}
            />
          </Card>
        </Grid>
        <Grid container item xs={12} sm={6} px={10} direction="column">
          <Typography variant="h3" my={1}>
            {producto.title}
          </Typography>
          <Typography variant="h4" my={1}>
            ${producto.price}
          </Typography>
          <Typography variant="body1" my={2}>
            {producto.description}
          </Typography>
          <ItemCountContainer my={2} stock={producto.stock} onAdd={onAdd} />
        </Grid>
        <ToastContainer />
      </Grid>
    </>
  );
};

export default ItemDetailContainer;
