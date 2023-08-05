import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ItemCountContainer from "../itemCount/ItemCountContainer";
const ItemCard = ({ elemento, isInItemList = true }) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        alt={elemento.title}
        image={elemento.pictureUrl}
      />
      <CardContent>
        <Typography variant="body1" size="small">
          {elemento.category}
        </Typography>
        <Typography variant="h5">{elemento.title}</Typography>
        <Typography variant="h6">$ {elemento.price}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${elemento.id}`}>
          <Button size="large">Ver detalles</Button>
        </Link>
      </CardActions>
      <ItemCountContainer stock={elemento.stock} />
    </Card>
  );
};

export default ItemCard;
