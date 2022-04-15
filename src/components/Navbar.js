import { Drawer, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Drawer anchor="left" variant="permanent">
      <List>
        <h2 className="nav-title">not-prod-yet</h2>
        {["Poems", "Stories", "Spare Thoughts", "Other"].map((text, index) => (
          <ListItem button key={text}>
            <Link className="nav-link" to="/poems">
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
