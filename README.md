# API Noticias Arquitectura — 8 Categorías (Gratis, sin pagos)

Este repositorio contiene una API Node.js que obtiene noticias GRATIS usando **RSS públicos**, sin cuotas, sin límites de NewsAPI, sin llaves ni pagos.

## Categorías incluidas:
- arquitectura  
- interiorismo  
- paisajismo  
- mobiliario  
- arquitectura_comercial  
- proyectos  
- modular  
- urbanismo  

## Endpoints:
### Listar categorías:
GET `/news`

### Obtener noticias de una categoría:
GET `/news/:categoria`

Ejemplo:
`/news/arquitectura`
`/news/paisajismo`

## Cómo ejecutar:
```
npm install
npm start
```

Compatible con Render.
