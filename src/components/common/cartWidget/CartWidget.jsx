import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={3} color="secondary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
