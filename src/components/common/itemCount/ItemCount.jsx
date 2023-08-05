import { Button } from "@mui/material";

const ItemCount = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "5px",
        marginTop: "10px",
        marginBottom: "10px",
        border: "1px solid black",
        background: "lightgrey",
        direction: "row",
      }}
    >
      <Button onClick={restar} variant="secondary">
        -
      </Button>
      {contador}
      <Button onClick={sumar} variant="secondary">
        +
      </Button>
      <Button variant="contained secondary" onClick={() => onAdd(contador)}>
        Agregar
      </Button>
    </div>
  );
};

export default ItemCount;
