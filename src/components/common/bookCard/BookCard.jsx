import "./bookCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";

const BookCard = ({ id, author, title, price, image }) => {
  return (
    <Card sx={{ maxWidth: 250, height: "500px" }}>
      <CardActionArea>
        <Link
          to={`/bookDetail/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardMedia component="img" height="360" image={image} alt={title} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {author}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              AR$ {price}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default BookCard;
