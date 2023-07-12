import { useState } from "react";
import ItemCount from "./itemCount";

const ItemCountContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : alert("CANTIDAD MÁXIMA DISPONIBLE");
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <ItemCount
      contador={contador}
      sumar={sumar}
      restar={restar}
      onAdd={onAdd}
    />
  );
};

export default ItemCountContainer;
