import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavList() {
  return (
    <List className="nav-list">
      <ListItem>
        <Link className="nav-link title" to="/">
          <h1>cool title</h1>
        </Link>
      </ListItem>
      {["Poems", "Stories", "Spare Thoughts", "Other"].map((text, index) => (
        <ListItem button key={text}>
          <Link className="nav-link" to="/poems">
            {text}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
