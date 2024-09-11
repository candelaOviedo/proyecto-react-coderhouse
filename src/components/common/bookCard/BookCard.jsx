import "./bookCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const BookCard = ({ author, title, price, image }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia component="img" height="360" image={image} alt="" />
          <CardContent>
            <p>{author}</p>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              AR$ {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default BookCard;
