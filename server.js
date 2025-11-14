import express from "express";
import categoriesRouter from "./src/routes/categories.js";

const app = express();
const PORT = process.env.PORT || 10000;

app.use("/news", categoriesRouter);

app.get("/", (req, res) => {
  res.json({ message: "API Noticias de Arquitectura (8 categorías) lista." });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
