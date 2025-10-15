import { Box, Typography } from "@mui/material";
import { FaDumbbell, FaBiking } from "react-icons/fa";
import { GiBoxingGlove, GiLotus } from "react-icons/gi";
import { MdQrCode2 } from "react-icons/md";

export const Nosotros = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "3rem 2rem",
        textAlign: "center",
      }}
    >
    

      {/* Clases y servicios */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: "2rem",
          justifyItems: "center",
        }}
      >
        {/* Boxeo */}
        <Box sx={{ textAlign: "center" }}>
          <GiBoxingGlove size={60} />
          <Typography variant="h6" sx={{ marginTop: "0.5rem" }}>
            Clases de Boxeo
          </Typography>
        </Box>

        {/* Spinning */}
        <Box sx={{ textAlign: "center" }}>
          <FaBiking size={60} />
          <Typography variant="h6" sx={{ marginTop: "0.5rem" }}>
            Clases de Spinning
          </Typography>
        </Box>

        {/* Yoga */}
        <Box sx={{ textAlign: "center" }}>
          <GiLotus size={60} />
          <Typography variant="h6" sx={{ marginTop: "0.5rem" }}>
            Clases de Yoga
          </Typography>
        </Box>

        {/* Máquinas */}
        <Box sx={{ textAlign: "center" }}>
          <FaDumbbell size={60} />
          <Typography variant="h6" sx={{ marginTop: "0.5rem" }}>
            Las mejores Máquinas del pais 
          </Typography>
        </Box>

        {/* Acceso con QR */}
        <Box sx={{ textAlign: "center" }}>
          <MdQrCode2 size={60} />
          <Typography variant="h6" sx={{ marginTop: "0.5rem" }}>
            Acceso con QR
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
