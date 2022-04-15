import { Drawer, List, ListItem, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery("(min-width:900px)");
  function openMenu() {
    setOpen(true);
  }
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };
  return (
    <>
      <Drawer
        className="fake-drawer"
        anchor="left"
        variant={!fullScreen ? "permanent" : "temporary"}
      >
        <MenuIcon
          className={`menu-icon ${fullScreen ? "hidden" : ""}`}
          onClick={openMenu}
        />
      </Drawer>
      <Drawer
        anchor="left"
        variant={fullScreen ? "permanent" : "temporary"}
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
