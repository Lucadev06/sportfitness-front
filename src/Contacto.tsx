import { Box, Typography, TextField, Button, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const Contacto = () => {
  const [motivo, setMotivo] = useState("");

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contacto
      </Typography>
      <form>
        <Select
          fullWidth
          labelId="motivo-consulta-label"
          id="motivo-consulta"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          displayEmpty
          required
        >
          <MenuItem value="" disabled>
            Motivo de consulta
          </MenuItem>
          <MenuItem value="suscripciones">Suscripciones</MenuItem>
          <MenuItem value="quejas">Quejas</MenuItem>
          <MenuItem value="otros">Otros</MenuItem>
        </Select>
        <TextField
          fullWidth
          label="Nombre"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Mail"
          margin="normal"
          required
          type="email"
        />
        <TextField
          fullWidth
          label="Teléfono"
          margin="normal"
          required
          type="tel"
        />
        <TextField
          fullWidth
          label="Consulta"
          margin="normal"
          required
          multiline
          rows={4}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            type="submit"
            sx={{ marginTop: "1rem", backgroundColor: "violet", width: "50%", borderRadius: "1rem" }}
          >
            Enviar
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Contacto;