import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Link } from "react-router-dom";

const Navbar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <main className='fixed top-0 left-0 w-full z-50 border-b-2 bg-gray-950 text-gray-400 flex justify-between items-center p-4'>      
        <div>
            <Link to="/" className='font-medium pl-4 text-md hover:text-white'>
                James Nicholas
            </Link>
        </div>

        <div className='hidden md:flex gap-10 pr-8 '> 
            <Link to="/" className='hover:text-white transition'>Home</Link>
            <Link to="/contact" className='hover:text-white transition'>Contact</Link>
            <Link to="/project" className='hover:text-white transition'>Project</Link>
            <Link to="/about" className='hover:text-white transition'>About</Link>
        </div>

        <div className='block md:hidden'>
            <Button variant="contained" onClick={handleClick}>
                Menu
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Project</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>

            </Menu>
        </div>

    </main>
  )
}

export default Navbar