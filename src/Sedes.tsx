import { Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const sedes = [
  {
    name: "SPORT FITNESS BELGRANO",
    address: "Av. Cabildo 2345, Belgrano",
    activities: "Musculación, Crossfit, Yoga, Pilates",
    images: ["foto-sede.jpeg","/foto-gym-01.png", "/foto-gym-02.png", "/foto-gym-03.png"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.994245823923!2d-58.4599638847724!3d-34.5537639804723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb42f768426a1%3A0x8c34b3a7c9e1e3e3!2sAv.%20Cabildo%202345%2C%20C1428AAV%20CABA!5e0!3m2!1ses-419!2sar!4v1678886400000!5m2!1ses-419!2sar",
  },
  {
    name: "SPORT FITNESS PARQUE CHACABUCO",
    address: "Av. Asamblea 1234, Parque Chacabuco",
    activities: "Funcional, Boxeo, Spinning",
    images: ["foto-sede.jpeg","/foto-gym-02.png", "/foto-gym-03.png", "/foto-gym-01.png"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.83333825535!2d-58.449!3d-34.636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca52f17357d9%3A0x1a56a44f3b8d9d1!2sAv.%20Asamblea%201234%2C%20C1424%20CABA!5e0!3m2!1ses-419!2sar!4v1678886400000!5m2!1ses-419!2sar",
  },
  {
    name: "SPORT FITNESS PALERMO",
    address: "Av. Santa Fe 5678, Palermo",
    activities: "Musculación, Zumba, Natación",
    images: ["foto-sede.jpeg","/foto-gym-03.png", "/foto-gym-01.png", "/foto-gym-02.png"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.01670932393!2d-58.422372084771!3d-34.598738980459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca62a8d8d8d8%3A0x8d8d8d8d8d8d8d8d!2sAv.%20Santa%20Fe%205678%2C%20C1425%20CABA!5e0!3m2!1ses-419!2sar!4v1678886400000!5m2!1ses-419!2sar",
  },
  {
    name: "SPORT FITNESS BOEDO",
    address: "Av. Boedo 901, Boedo",
    activities: "Yoga, Pilates, Boxeo",
    images: ["foto-sede.jpeg","/foto-gym-01.png", "/foto-gym-02.png", "/foto-gym-03.png"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9166353553!2d-58.4116667847709!3d-34.606249980459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sAv.%20Boedo%20901%2C%20C1239AAB%20CABA!5e0!3m2!1ses-419!2sar!4v1678886400000!5m2!1ses-419!2sar",
  },
];

function ImageCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      <img
        src={images[current]}
        alt={`Foto ${current + 1}`}
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <IconButton
        onClick={prev}
        sx={{ position: "absolute", top: "50%", left: "10px", color: "white" }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={next}
        sx={{ position: "absolute", top: "50%", right: "10px", color: "white" }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}

function Sedes() {
  return (
    <Box
      sx={{
        padding: "2rem",
        marginTop: "5rem",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      {sedes.map((sede, index) => (
        <Box
          key={index}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: "2rem",
            alignItems: "flex-start",
            backgroundColor: "rgba(0,0,0,0.7)",
            border: "3px solid #4B0082", // violeta oscuro
            borderRadius: "12px",
            padding: "1.5rem",
          }}
        >
          {/* Izquierda: nombre, dirección + mapa */}
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "white", marginBottom: "0.5rem" }}
            >
              {sede.name}
            </Typography>
            <Typography sx={{ color: "white", marginBottom: "0.5rem" }}>
              {sede.address}
            </Typography>
            <Box sx={{ marginBottom: "1rem" }}>
              <iframe
                key={sede.name}
                src={sede.mapUrl}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
            <Typography variant="h6" sx={{ color: "white" }}>
              Actividades:
            </Typography>
            <Typography sx={{ color: "white" }}>{sede.activities}</Typography>
          </Box>

          {/* Derecha: carrusel */}
          <ImageCarousel images={sede.images} />
        </Box>
      ))}
    </Box>
  );
}

export default Sedes;
