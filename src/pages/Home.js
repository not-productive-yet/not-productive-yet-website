import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  function goToPoems() {
    navigate(`/poems`);
  }

  return (
    <div className="home">
      <div className="image-container">
        <img
          className="home-image"
          src={require("../assets/images/real_artist.jpg")}
          alt="real artist"
        />
      </div>
      <p className="home-text">(not really)</p>
      <Button className="home-button" variant="outlined" onClick={goToPoems}>
        Check out my stuff
      </Button>
    </div>
  );
}
