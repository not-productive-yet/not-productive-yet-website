import { Drawer, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavList from "./NavList";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  function openMenu() {
    setOpen(true);
  }
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const isWideScreen = useMediaQuery("(min-width:800px)");

  return (
    <>
      {isWideScreen ? (
        <Drawer class="nav navbar-desktop" anchor="left" variant="permanent">
          <NavList />
        </Drawer>
      ) : (
        <>
          <MenuIcon
            className={`menu-icon ${isWideScreen ? "hidden" : ""}`}
            onClick={openMenu}
          />
          <Drawer
            className="nav navbar-mobile"
            anchor="left"
            variant={isWideScreen ? "permanent" : "temporary"}
            open={open}
            onClose={toggleDrawer}
            onClick={toggleDrawer}
          >
            <NavList />
          </Drawer>
        </>
      )}
    </>
  );
}
