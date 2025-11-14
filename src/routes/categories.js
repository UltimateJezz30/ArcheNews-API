import express from "express";
import Parser from "rss-parser";

const router = express.Router();
const parser = new Parser();

// Fuentes RSS gratuitas para cada categoría (sin pagos)
const feeds = {
  arquitectura: [
    "https://www.archdaily.com/feed",
    "https://www.designboom.com/architecture/feed/"
  ],
  interiorismo: [
    "https://www.designboom.com/interiors/feed/",
    "https://interiordesign.net/category/projects/feed/"
  ],
  paisajismo: [
    "https://www.landscapearchitecturemagazine.org/feed/",
    "https://www.dezeen.com/landscape-architecture/feed/"
  ],
  mobiliario: [
    "https://www.designboom.com/design/feed/",
    "https://www.dezeen.com/design/feed/"
  ],
  arquitectura_comercial: [
    "https://www.dezeen.com/retail/feed/",
    "https://www.archdaily.com/search/projects/categories/commercial?ad_medium=feed"
  ],
  proyectos: [
    "https://www.dezeen.com/architecture/feed/",
    "https://www.archdaily.com/feed"
  ],
  modular: [
    "https://www.dezeen.com/modular/feed/",
    "https://www.archdaily.com/search/projects/tags/modular?ad_medium=feed"
  ],
  urbanismo: [
    "https://www.dezeen.com/urbanism/feed/",
    "https://www.archdaily.com/search/projects/categories/urban-planning?ad_medium=feed"
  ]
};

// Función general para leer múltiples RSS
async function leerFeeds(lista) {
  const resultados = [];

  for (const url of lista) {
    try {
      const data = await parser.parseURL(url);
      resultados.push(...data.items.slice(0, 10)); // Top 10 por fuente
    } catch (err) {
      console.log("Error leyendo feed:", url, err.message);
    }
  }

  return resultados;
}

// Endpoint dinámico para las 8 categorías
router.get("/:categoria", async (req, res) => {
  const categoria = req.params.categoria.toLowerCase();

  if (!feeds[categoria]) {
    return res.status(404).json({ error: "Categoría no encontrada", categorias: Object.keys(feeds) });
  }

  const noticias = await leerFeeds(feeds[categoria]);
  res.json({
    categoria,
    total: noticias.length,
    noticias
  });
});

// Endpoint listado de categorías
router.get("/", (req, res) => {
  res.json({
    categorias: Object.keys(feeds)
  });
});

export default router;
