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
import chat from "../src/assets/chat.svg";

const drawerWidth = 240;

function App() {
  const [open, setOpen] = React.useState(false);

  //input states
  const [input, setInput] = React.useState("");
  const [chatLog, setChatLog] = React.useState([
    {
      user: "gpt",
      message: "Lets do this",
    },
    {
      user: "me",
      message: "test",
    },
    {
      user: "gpt",
      message: "Lets do this",
    },
  ]);

  //used to make the drawer responsive
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setChatLog([...chatLog, { user: "me", message: `${input}` }]);
    setInput("");
  }

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
          {chatLog.map((message, index) => (
            <ListItem
              key={index}
              alignItems="flex-start"
              sx={{ bgcolor: `${message.user === "gpt" && "#444654"}` }}
            >
              <ListItemAvatar>
                <Avatar src={message.user === "gpt" && chat} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                    >
                      {message.message}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>

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
          component="form"
          onSubmit={handleSubmit}
        >
          <CustomTextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
