import ItemCard from "../../common/ItemCard/ItemCard";
import { Typography } from "@mui/material";

const ItemList = ({ items }) => {
  console.log("ItemList Funciona en el presentacional");
  return (
    <div>
      <Typography variant="h2" my={1}>
        Catálogo de muebles
      </Typography>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: "1rem",
          padding: "10px 0 10px 0",
        }}
      >
        {items.map((elemento) => {
          return <ItemCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
