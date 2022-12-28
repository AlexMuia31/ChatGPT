import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const CustomButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  justifyContent: "flex-start",
  padding: "12px",
  border: "1px solid white",
  color: "white",
  borderRadius: "5px",
  textAlign: "left !important",
  lineHeight: 1.5,
  backgroundColor: "inherit",

  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",

    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "inherit",
  },
});
