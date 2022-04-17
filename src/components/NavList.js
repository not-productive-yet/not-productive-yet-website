import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const navListItems = [
  {
    text: "Poems",
    link: "/poems",
  },
  {
    text: "Stories",
    link: "",
  },
  {
    text: "Spare Thoughts",
    link: "",
  },
  {
    text: "Other",
    link: "",
  },
];

export default function NavList() {
  return (
    <List className="nav-list">
      <ListItem>
        <Link className="nav-link" to="/">
          <SentimentSatisfiedAltIcon className="nav-logo" />
        </Link>
      </ListItem>
      {navListItems.map((item) => (
        <ListItem button key={item.text}>
          <Link className="nav-link" to={item.link}>
            {item.text}
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
