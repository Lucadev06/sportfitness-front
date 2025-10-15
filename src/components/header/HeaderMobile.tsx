import { Box, Button, Modal , IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
    // Media queries
  const isLarge = useMediaQuery("(min-width:1000px)");
  const isMedium = useMediaQuery("(max-width:999px) and (min-width:700px)");
  const isSmall = useMediaQuery("(max-width:699px)");

  // Margin dinámico para el contenedor de iconos
  let iconMarginLeft = "auto"; // default
  if (isLarge) {
    iconMarginLeft = "60%";
  } else if (isMedium) {
    iconMarginLeft = "40%";
  } else if (isSmall) {
    iconMarginLeft = "20%";
  }

  return (
    <>
      {/* Header superior */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "black",
          height: "4.5rem",
          padding: "0 1rem",
          marginBottom: "1.3rem",
        }}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            height: "15rem",
            marginTop: "2rem",
            marginLeft: "3rem",
          }}
        />

        {/* Contenedor de íconos (menú primero, luego WhatsApp) */}
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: iconMarginLeft, gap: "0.8rem" }}>
          {/* Menú */}
          <IconButton onClick={() => setIsOpen(true)}>
            <MenuIcon sx={{ color: "white", fontSize: "2rem", marginTop: "2rem" }} />
          </IconButton>

          {/* WhatsApp */}
          <IconButton
            onClick={() =>
              window.open("https://wa.me/5491122334455", "_blank")
            }
            sx={{
              backgroundColor: "#25D366",
              "&:hover": { backgroundColor: "#1ebe57" },
              color: "white",
              marginTop: "2rem",
            }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Box>
      </Box>

        {/* Modal en vez de Drawer */}
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            borderRadius: "12px",
            width: "80%",
            maxWidth: "300px",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            height: "30%"
          }}
        >
        

          {/* Opciones del menú */}
          <Button variant="text" sx={{ fontSize: "1.1rem", color: "black", fontWeight: "bold" }}>
            NOSOTROS
          </Button>
          <Button variant="text" sx={{ fontSize: "1.1rem", color: "black", fontWeight: "bold" }}>
            SEDES
          </Button>
          <Button variant="text" sx={{ fontSize: "1.1rem", color: "black", fontWeight: "bold" }}>
            PLANES
          </Button>
          <Button variant="text" sx={{ fontSize: "1.1rem", color: "black", fontWeight: "bold" }}>
            CONTACTO
          </Button>
        </Box>
      </Modal>
    </>
  );
};
