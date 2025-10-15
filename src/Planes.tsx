import { Box, Typography } from "@mui/material";

const planes = [
  {
    title: "Plan Trimestral + Inscripción / EFECTIVO",
    price: "$175.000.-",
  },
  {
    title: "Plan Trimestral + Inscripción / TRANSFERENCIA",
    price: "$195.000.-",
  },
  {
    title: "Plan Mensual + Inscripción / EFECTIVO",
    price: "$75.000.-",
  },
  {
    title: "Plan Mensual + Inscripción / TRANSFERENCIA",
    price: "$80.000.-",
  },
];

function Planes() {
  return (
    <Box
      sx={{
        padding: "2rem",
        marginTop: "5rem",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: "2rem",
      }}
    >
      {planes.map((plan, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "250px",
            borderRadius: "12px",
            border: "3px solid #4B0082",
            cursor: "pointer",
            "&:hover .info": {
              transform: "translateY(0%)",
            },
            "&:hover .logo": {
              transform: "translateY(-100%)",
            },
          }}
        >
          {/* Logo de fondo */}
          <Box
            className="logo"
            sx={{
              backgroundImage: "url(/logo.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "black",
              width: "100%",
              height: "100%",
              transition: "transform 0.5s ease",
            }}
          />

          {/* Info que aparece al hover */}
          <Box
            className="info"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.9)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              padding: "1rem",
              transform: "translateY(100%)",
              transition: "transform 0.5s ease",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              {plan.title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#A020F0",
                textShadow: "1px 1px 5px black",
              }}
            >
              {plan.price}
            </Typography>
          </Box>
        </Box>
      ))}

      {/* Mensaje extra */}
      <Box
        sx={{
          gridColumn: { xs: "span 1", md: "span 2" },
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "1px 1px 3px black",
          }}
        >
          ✔ Nuestros planes se adaptan a vos 💪
        </Typography>
      </Box>
    </Box>
  );
}

export default Planes;
