import { Drawer, List, ListItem, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isWideScreen = useMediaQuery("(min-width:600px)");
  function openMenu() {
    setOpen(true);
  }
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <MenuIcon
        className={`menu-icon ${isWideScreen ? "hidden" : ""}`}
        onClick={openMenu}
      />
      <Drawer
        anchor="left"
        variant={isWideScreen ? "permanent" : "temporary"}
        open={open}
        onClose={toggleDrawer}
        onClick={toggleDrawer}
      >
        <List>
          <h2 className="nav-title">
            <Link className="nav-link" to="/">
              not-prod-yet
            </Link>
          </h2>
          {["Poems", "Stories", "Spare Thoughts", "Other"].map(
            (text, index) => (
              <ListItem button key={text}>
                <Link className="nav-link" to="/poems">
                  {text}
                </Link>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </>
  );
}
