import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import { Box, Button, Typography } from "@mui/material";

const CartContainer = () => {
  return (
    <div>
      <Typography variant="h2" my={2}>
        {" "}
        Carrito{" "}
      </Typography>

      <div key="{elemento.id}">
        <Box
          xs={6}
          sm={6}
          direction="column"
          p={"1rem"}
          my={"1rem"}
          sx={{ border: "1px solid grey" }}
        >
          <Typography variant="h4">Título producto</Typography>
          <Typography variant="h5">$100</Typography>
          <ItemCountContainer value="cantidad" stock="{elemento.stock}" />
          <Button>Eliminar</Button>
        </Box>
      </div>
    </div>
  );
};

export default CartContainer;
