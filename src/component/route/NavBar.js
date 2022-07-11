import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import MenuIcon from '@material-ui/icons/Menu'

function NavBar() {
    return (
        <div>   
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Menu"
                    >
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        React User List
                    </Typography>
                    <Button color="inherit">HONE</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;