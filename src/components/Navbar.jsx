import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItemStyle = {
    color: "#f97316",
    borderRadius: "12px",
    marginBottom: "6px",
    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor: "rgba(249,115,22,0.08)",
      border: "1px solid rgba(249,115,22,0.5)",
      color: "#ffffff",
      transform: "translateX(5px)",
    },
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black/70
        backdrop-blur-md
        border-b
        border-orange-500/20
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="
            text-xl
            md:text-2xl
            font-bold
            uppercase
            text-orange-500
            hover:text-orange-400
            transition
          "
        >
          James Nicholas
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium">
          <a
            href="#home"
            className="hover:text-orange-500 transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-orange-500 transition duration-300"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-orange-500 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-orange-500 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button
            onClick={handleClick}
            sx={{
              minWidth: 0,
              padding: 0,
              color: "#f97316",
            }}
          >
            <HiOutlineMenuAlt3 size={32} />
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              sx: {
                mt: 1.5,
                minWidth: 230,

                background: "rgba(0,0,0,0.55)",

                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",

                border: "1px solid rgba(249,115,22,0.2)",

                borderRadius: "20px",

                padding: "10px",

                boxShadow:
                  "0 8px 32px rgba(249,115,22,0.15)",
              },
            }}
          >
            <MenuItem
              component="a"
              href="#home"
              onClick={handleClose}
              sx={menuItemStyle}
            >
              Home
            </MenuItem>

            <MenuItem
              component="a"
              href="#about"
              onClick={handleClose}
              sx={menuItemStyle}
            >
              About
            </MenuItem>

            <MenuItem
              component="a"
              href="#projects"
              onClick={handleClose}
              sx={menuItemStyle}
            >
              Projects
            </MenuItem>

            <MenuItem
              component="a"
              href="#contact"
              onClick={handleClose}
              sx={menuItemStyle}
            >
              Contact
            </MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;