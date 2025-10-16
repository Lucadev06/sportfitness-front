import { Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const sedes = [
  {
    name: "SPORT FITNESS BELGRANO",
    address: "Blanco Encalada 2635, Belgrano",
    activities: "Musculación, Crossfit, Yoga, Pilates",
    images: ["foto-sede.jpeg", "/foto-gym-01.png", "/foto-gym-02.png", "/foto-gym-03.png"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.899676016832!2d-58.46178722331351!3d-34.556271472977504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb41a90f0e8b5%3A0xb5f04f6d3f7a09e!2sBlanco%20Encalada%202635%2C%20C1428%20CABA!5e0!3m2!1ses-419!2sar!4v1739750400000!5m2!1ses-419!2sar",
  },
  {
    name: "SPORT FITNESS PARQUE CHACABUCO",
    address: "Av. Asamblea 1130, Parque Chacabuco",
    activities: "Funcional, Boxeo, Spinning",
    images: ["foto-sede.jpeg", "/foto-gym-02.png", "/foto-gym-03.png", "/foto-gym-01.png"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.842937889155!2d-58.44324562331208!3d-34.60809757296802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb13457a97a9%3A0x1234567890abcdef!2sAv.%20Asamblea%201130%2C%20C1424%20CABA!5e0!3m2!1ses-419!2sar!4v1739750500000!5m2!1ses-419!2sar",
  },
  {
    name: "SPORT FITNESS PALERMO",
    address: "Bonpland 2069, Palermo",
    activities: "Musculación, Zumba, Natación",
    images: ["foto-sede.jpeg", "/foto-gym-03.png", "/foto-gym-01.png", "/foto-gym-02.png"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.786799454973!2d-58.430421623311996!3d-34.60950377296791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb13f7d1d34f%3A0xabcdef1234567890!2sBonpland%202069%2C%20C1425%20CABA!5e0!3m2!1ses-419!2sar!4v1739750600000!5m2!1ses-419!2sar",
  },
  {
    name: "SPORT FITNESS BOEDO",
    address: "Carlos Calvo 3595, Boedo",
    activities: "Yoga, Pilates, Boxeo",
    images: ["foto-sede.jpeg", "/foto-gym-01.png", "/foto-gym-02.png", "/foto-gym-03.png"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9166353553!2d-58.4101234233121!3d-34.60678957296763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb131234abcd%3A0xabcdef9876543210!2sCarlos%20Calvo%203595%2C%20C1239%20CABA!5e0!3m2!1ses-419!2sar!4v1739750700000!5m2!1ses-419!2sar",
  },
  {
    name: "SPORT FITNESS ITUZAINGÓ",
    address: "Santa Rosa 2330, Castelar",
    activities: "Musculación, Funcional, Crossfit",
    images: ["foto-sede.jpeg", "/foto-gym-01.png", "/foto-gym-02.png"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.581819067415!2d-58.6602781233103!3d-34.64175057296604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7b7a44b5c8d%3A0xabcdefabcdef!2sSanta%20Rosa%202330%2C%20Castelar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1739750800000!5m2!1ses-419!2sar",
  },
  {
    name: "SPORT FITNESS OLIVOS",
    address: "Av. Maipú 1873, Olivos",
    activities: "Próximamente...",
    images: ["foto-sede.jpeg"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.024041979228!2d-58.49389192331149!3d-34.518726472969076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc8fcd7cdbe3d%3A0xabcdefabcdef1234!2sAv.%20Maip%C3%BA%201873%2C%20B1636%20Olivos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1739750900000!5m2!1ses-419!2sar",
    comingSoon: true,
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
          opacity: 0.9,
        }}
      />
      {images.length > 1 && (
        <>
          <IconButton onClick={prev} sx={{ position: "absolute", top: "50%", left: "10px", color: "white" }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={next} sx={{ position: "absolute", top: "50%", right: "10px", color: "white" }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
}

function Sedes() {
  return (
    <Box sx={{ padding: "2rem", marginTop: "5rem", display: "flex", flexDirection: "column", gap: "3rem" }}>
      {sedes.map((sede, index) => (
        <Box
          key={index}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: "2rem",
            alignItems: "flex-start",
            backgroundColor: sede.comingSoon ? "rgba(128,128,128,0.3)" : "rgba(0,0,0,0.7)",
            border: "3px solid #4B0082",
            borderRadius: "12px",
            padding: "1.5rem",
            opacity: sede.comingSoon ? 0.8 : 1,
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "white", marginBottom: "0.5rem" }}>
              {sede.name} {sede.comingSoon && "(Próximamente)"}
            </Typography>
            <Typography sx={{ color: "white", marginBottom: "0.5rem" }}>{sede.address}</Typography>
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
          <ImageCarousel images={sede.images} />
        </Box>
      ))}
    </Box>
  );
}

export default Sedes;
