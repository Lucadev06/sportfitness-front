import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © 2025 todos los derechos reservados
      </Typography>
    </Box>
  );
};

export default Footer;
