import { useState, useEffect } from "react";
import { products } from "../../../catalogo";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  const { categoryName } = useParams();

  useEffect(() => {
    let productsFiltrados = products.filter(
      (elemento) => elemento.category === categoryName
    );
    const tarea = new Promise((resolve, reject) => {
      setTimeout(
        resolve(categoryName === undefined ? products : productsFiltrados),
        2000
      );
      reject({ message: "No encontrado", status: 401 });
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => setError(error));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
