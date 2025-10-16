import { Box, Button, useMediaQuery } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const HeaderDesktop = () => {
  // Breakpoints
  const isXL = useMediaQuery("(min-width:1600px)");
  const isLG = useMediaQuery("(max-width:1599px) and (min-width:1200px)");
  const isMD = useMediaQuery("(max-width:1199px) and (min-width:900px)");

  // Márgenes dinámicos para logo y menú
  let logoSize = "14rem";
  let logoMarginLeft = "4rem";
  let menuMarginLeft = "10%";
  let marginTop = "2rem";

  if (isXL) {
    logoSize = "20rem";
    logoMarginLeft = "8rem";
    menuMarginLeft = "15%";
    marginTop = "3rem";
  } else if (isLG) {
    logoSize = "16rem";
    logoMarginLeft = "3rem";
    menuMarginLeft = "9%";
    marginTop = "2.5rem";
  } else if (isMD) {
    logoSize = "12rem";
    logoMarginLeft = "1rem";
    menuMarginLeft = "3%";
    marginTop = "2rem";
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
        padding: "0 1rem",
        height: "5rem",
        marginBottom: "1.3rem",
      }}
    >
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Logo"
        style={{
          height: logoSize,
          marginTop: marginTop,
          marginLeft: logoMarginLeft,
        }}
      />

      {/* Menú */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          marginLeft: menuMarginLeft,
          marginTop: marginTop,
        }}
      >
        <Button
          variant="text"
          className="boton-menu"
          sx={{ fontSize: "1.1rem", color: "white", fontWeight: "bold" }}
          onClick={() => scrollToSection("nosotros")}
        >
          NOSOTROS
        </Button>
        <Button
          variant="text"
          className="boton-menu"
          sx={{ fontSize: "1.1rem", color: "white", fontWeight: "bold" }}
          onClick={() => scrollToSection("sedes")}
        >
          SEDES
        </Button>
        <Button
          variant="text"
          className="boton-menu"
          sx={{ fontSize: "1.1rem", color: "white", fontWeight: "bold" }}
          onClick={() => scrollToSection("planes")}
        >
          PLANES
        </Button>
        <Button
          variant="text"
          className="boton-menu"
          sx={{ fontSize: "1.1rem", color: "white", fontWeight: "bold" }}
          onClick={() => scrollToSection("contacto")}
        >
          CONTACTO
        </Button>

        {/* Botón principal con ícono de WhatsApp */}
        <Button
          variant="contained"
          className="boton-primario"
          sx={{
            marginLeft: "1rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            backgroundColor: "#25D366",
            "&:hover": { backgroundColor: "#1ebe57" },
          }}
          startIcon={<WhatsAppIcon />}
        >
          ASOCIATE
        </Button>
      </Box>
    </Box>
  );
};