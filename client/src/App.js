import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  InputAdornment,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { CustomButton } from "./components/CustomeButton";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import { CustomTextField } from "./components/CustomTextfield";

const drawerWidth = 240;

function App() {
  const [open, setOpen] = React.useState(false);

  //used to make the drawer responsive
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        background: "#282c34",
        minHeight: "100vh",
        color: "#fff",
        display: "flex",
      }}
    >
      <CssBaseline />

      <Drawer
        variant={isMdUp ? "permanent" : "temporary"}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "#202123",
            padding: "12px",
          },
        }}
        open={open}
        onClose={handleDrawerToggle}
        anchor="left"
      >
        <CustomButton startIcon={<AddIcon />}>New Chat</CustomButton>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#343541",
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          position: "relative",
        }}
      >
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: `${drawerWidth}px`,
            display: { xs: "flex", sm: "none" },
          }}
        >
          <Toolbar>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar sx={{ display: { xs: "flex", sm: "none" } }} />
        <List sx={{ width: "100%", bgcolor: "inherit" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                  >
                    hello world
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start" sx={{ bgcolor: "#444654" }}>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                  >
                    chat reply
                  </Typography>
                </>
              }
            />
          </ListItem>
        </List>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>

        <Box
          sx={{
            padding: "12px",
            position: "fixed",
            right: 0,
            left: 0,
            bottom: 0,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <CustomTextField
            fullWidth
            inputProps={{
              sx: {
                "&::placeholder": {
                  color: "#fff",
                },
                color: "#fff",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton type="submit">
                    <SendIcon sx={{ color: "gray" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{}}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
