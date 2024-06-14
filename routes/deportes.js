import express from "express";
const router = express.Router();

let deportes = []; //almacenar

// Rutas
router.get("/agregar", (req, res) => {
  const { nombre, precio } = req.query;
  const nuevoDeporte = { nombre, precio };
  deportes.push(nuevoDeporte);
  res.send("Deporte agregado correctamente");
});

router.get("/", (req, res) => {
  res.json({ deportes });
});

//
router.get("/editar", (req, res) => {
  const { nombre, precio } = req.query;
  const index = deportes.findIndex((d) => d.nombre === nombre);
  if (index !== -1) {
    deportes[index].precio = precio;
    res.send("Precio actualizado correctamente");
  } else {
    res.status(404).send("Deporte no encontrado");
  }
});

//
router.get("/eliminar", (req, res) => {
  const { nombre } = req.query;
  const index = deportes.findIndex((d) => d.nombre === nombre);
  if (index !== -1) {
    deportes.splice(index, 1);
    res.send("Deporte eliminado correctamente");
  } else {
    res.status(404).send("Deporte no encontrado");
  }
});

export default router;
