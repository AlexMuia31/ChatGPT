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
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "inherit" }}>
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
        <Box
          sx={{
            padding: "24px",
            bottom: 0,
            position: "absolute",
            left: 0,
            right: 0,
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
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
