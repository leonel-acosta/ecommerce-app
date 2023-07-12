import ItemListContainer from "../components/pages/ItemList/ItemListContainer";
import ItemDetail from "../components/pages/ItemDetail/ItemDetailContainer";
import CartContainer from "../components/pages/cart/CartContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetail,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
];
