import { useEffect, useState } from "react";
// import { products } from "../../../catalogo";
import { useParams } from "react-router-dom";
import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetail = () => {
  const [producto, setProducto] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  // useEffect(() => {
  //   let productoSeleccionado = products.find((elemento) => elemento.id === +id);
  //   const tarea = new Promise((res, rej) => {
  //     res(productoSeleccionado);
  //   });
  //   tarea.then((res) => setProducto(res));
  // }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);
    console.log(producto);
    console.log(cantidad);
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
      </Grid>
    </>
  );
};

export default ItemDetail;
