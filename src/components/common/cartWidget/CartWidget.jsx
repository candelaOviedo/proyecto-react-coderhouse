import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCart } from "../../../context/ShoppingCartContext";


const CartWidget = () => {
  const {cart} = useCart()

  const totalItems = cart.length;
  return (
    <div>
      <Badge badgeContent={totalItems} color="secondary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
