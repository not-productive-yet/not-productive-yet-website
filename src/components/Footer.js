import FavoriteIcon from "@mui/icons-material/Favorite";
import { useMediaQuery } from "@mui/material";

export default function Footer() {
  const isWideScreen = useMediaQuery("(min-width:600px)");

  return (
    <footer>
      <div className="heart-copyright">
        Made with <FavoriteIcon className="heart" /> and React.js
        {isWideScreen ? "•" : <br />} &copy; 2022 Lisa Trovato-Monastra
      </div>
    </footer>
  );
}
