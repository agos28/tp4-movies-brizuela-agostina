# TP3: App de Películas y Series con Next.js y TMDB

## Objetivo

El objetivo de este trabajo práctico es desarrollar una aplicación web utilizando **Next.js client side** que consuma datos desde la API de **The Movie Database — TMDB**.

La aplicación deberá permitir:

- Consultar diferentes secciones de películas desde distintos endpoints de la API.
- Mostrar listados de películas o series.
- Ingresar al detalle de una película o serie.
- Identificar entidades, atributos y estructuras de respuesta de una API externa.
- Utilizar `axios`, `useEffect` y `useState`.

Este trabajo se enfoca en el consumo de una API externa desde componentes client side de React dentro de un proyecto Next.js.

---

## Tecnologías a utilizar

El proyecto deberá utilizar:

- Next.js latest
- React
- JavaScript
- Axios
- Tailwind CSS

---

## Crear el proyecto

Clonar este proyecto y cambiarle la url de remote:

```bash
git remote set-url origin [URL] .git
```

Durante la instalación se puede elegir la configuración vista en clase.

Luego ingresar a la carpeta del proyecto:

```bash
cd tp-tmdb-next
```

Instalar dependencias

```bash
yarn
```

Instalar Axios:

```bash
yarn add axios
```

Ejecutar el proyecto:

```bash
yarn dev
```

---

## API a utilizar

La aplicación deberá consumir datos desde la API de TMDB.

Documentación oficial:

```txt
https://developer.themoviedb.org/docs/getting-started
```

Base URL de la API:

```txt
https://api.themoviedb.org/3
```

Base URL para imágenes:

```txt
https://image.tmdb.org/t/p/w500
```

Ejemplo para mostrar una imagen usando `poster_path`:

```js
const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
```

---

## API Key

Para consumir la API se necesita una API key de TMDB.

No se recomienda repetir la API key en muchos archivos del proyecto.

Crear un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_TMDB_API_KEY=TU_API_KEY
```

Luego, en el código, se puede acceder a la variable de entorno de esta manera:

```js
const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
```

Importante: al modificar el archivo `.env.local`, se debe reiniciar el servidor de desarrollo.

```bash
npm run dev
```

Aclaración: como este trabajo se realiza del lado del cliente, la API key pública puede verse desde el navegador. Para este trabajo práctico se acepta porque el objetivo es aprender consumo de APIs desde el frontend.

---

## Requisito importante sobre los endpoints

Cada sección de la aplicación deberá consumir datos desde un endpoint diferente de la API.

No alcanza con pedir un único listado y después dividirlo manualmente en varias secciones.

Por ejemplo, no sería correcto hacer solamente este pedido:

```txt
/trending/movie/day
```

y luego crear todas las secciones usando filtros internos.

La idea es que cada sección represente un pedido real a la API.

---

## Endpoints obligatorios de películas

La aplicación deberá utilizar, como mínimo, los siguientes endpoints.

### 1. Películas en tendencia

Endpoint:

```txt
https://api.themoviedb.org/3/trending/movie/day?api_key=TU_API_KEY
```

Uso esperado:

Mostrar una sección de películas que están en tendencia durante el día.

Nombre sugerido de la sección:

```txt
Películas en tendencia
```

---

### 2. Películas populares

Endpoint:

```txt
https://api.themoviedb.org/3/movie/popular?api_key=TU_API_KEY
```

Uso esperado:

Mostrar una sección de películas populares según TMDB.

Nombre sugerido de la sección:

```txt
Películas populares
```

---

### 3. Películas mejor puntuadas

Endpoint:

```txt
https://api.themoviedb.org/3/movie/top_rated?api_key=TU_API_KEY
```

Uso esperado:

Mostrar una sección de películas ordenadas por puntuación.

Nombre sugerido de la sección:

```txt
Mejor puntuadas
```

---

### 4. Películas en cartelera

Endpoint:

```txt
https://api.themoviedb.org/3/movie/now_playing?api_key=TU_API_KEY
```

Uso esperado:

Mostrar películas que actualmente se encuentran en cartelera.

Nombre sugerido de la sección:

```txt
En cartelera
```

---

### 5. Próximos estrenos

Endpoint:

```txt
https://api.themoviedb.org/3/movie/upcoming?api_key=TU_API_KEY
```

Uso esperado:

Mostrar películas próximas a estrenarse.

Nombre sugerido de la sección:

```txt
Próximos estrenos
```

---

## Endpoint obligatorio para detalle de película

Cuando el usuario haga clic en una película, deberá ingresar a una página de detalle.

Endpoint:

```txt
https://api.themoviedb.org/3/movie/ID_MOVIE?api_key=TU_API_KEY
```

Ejemplo:

```txt
https://api.themoviedb.org/3/movie/550?api_key=TU_API_KEY
```

Donde `ID_MOVIE` debe reemplazarse por el `id` real de la película seleccionada.

Ruta sugerida en Next.js:

```txt
/movie/[id]
```

Ejemplo de URL dentro de la app:

```txt
/movie/550
```

---

## Endpoints opcionales de series

Si el estudiante decide incluir series, deberá utilizar endpoints propios de series.

No se deben mezclar los endpoints de películas con los de series.

### 1. Series populares

Endpoint:

```txt
https://api.themoviedb.org/3/tv/popular?api_key=TU_API_KEY
```

Nombre sugerido de la sección:

```txt
Series populares
```

---

### 2. Series mejor puntuadas

Endpoint:

```txt
https://api.themoviedb.org/3/tv/top_rated?api_key=TU_API_KEY
```

Nombre sugerido de la sección:

```txt
Series mejor puntuadas
```

---

### 3. Detalle de serie

Endpoint:

```txt
https://api.themoviedb.org/3/tv/ID_SERIE?api_key=TU_API_KEY
```

Ejemplo:

```txt
https://api.themoviedb.org/3/tv/1399?api_key=TU_API_KEY
```

Ruta sugerida en Next.js:

```txt
/tv/[id]
```

---

## Resumen de pedidos requeridos

La aplicación deberá realizar distintos pedidos HTTP GET.

| Sección | Endpoint |
|---|---|
| Películas en tendencia | `/trending/movie/day` |
| Películas populares | `/movie/popular` |
| Películas mejor puntuadas | `/movie/top_rated` |
| Películas en cartelera | `/movie/now_playing` |
| Próximos estrenos | `/movie/upcoming` |
| Detalle de película | `/movie/{movie_id}` |
| Series populares, opcional | `/tv/popular` |
| Series mejor puntuadas, opcional | `/tv/top_rated` |
| Detalle de serie, opcional | `/tv/{series_id}` |

---

## Entidad principal: Movie

La entidad principal del trabajo será `Movie`.

Una película puede tener atributos como:

```txt
id
title
overview
poster_path
backdrop_path
release_date
vote_average
vote_count
popularity
original_language
genre_ids
```

En los listados, cada película deberá mostrar algunos de estos datos.

Por ejemplo:

- Título
- Imagen
- Fecha de estreno
- Puntuación
- Botón o enlace para ver detalle

---

## Entidad opcional: TV Show

Si se trabaja también con series, la entidad será `TV Show`.

Una serie puede tener atributos como:

```txt
id
name
overview
poster_path
backdrop_path
first_air_date
vote_average
vote_count
popularity
original_language
genre_ids
```

Atención: en películas el título suele venir como `title`, pero en series suele venir como `name`.

---

## Página principal

La página principal deberá mostrar varias secciones de contenido.

Cada sección deberá realizar su propio pedido a la API.

Secciones mínimas sugeridas:

```txt
Películas en tendencia
Películas populares
Mejor puntuadas
En cartelera
Próximos estrenos
```

Cada sección deberá renderizar un listado de tarjetas.

---

## Uso de client side

Las páginas o componentes que usen hooks de React deberán tener la directiva:

```js
"use client";
```

Ejemplo:

```js
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Pedido a la API
  }, []);

  return (
    <main>
      <h1>Películas</h1>
    </main>
  );
}
```

---

## Uso de Axios

Los pedidos a la API deberán realizarse con Axios.

Ejemplo de pedido GET:

```js
const response = await axios.get(
  `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
);
```

La mayoría de los endpoints de listado devuelven un objeto que contiene una propiedad `results`.

Ejemplo conceptual:

```js
const movies = response.data.results;
```

Luego se debe guardar esa información en un estado:

```js
setMovies(response.data.results);
```

---

## Estados requeridos

La aplicación deberá manejar estados básicos.

Como mínimo:

```js
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

Mientras se cargan los datos, se deberá mostrar un mensaje:

```txt
Cargando películas...
```

Si ocurre un error, se deberá mostrar un mensaje:

```txt
No se pudieron cargar los datos.
```

---

## Tarjeta de película

Cada película deberá mostrarse dentro de una tarjeta.

La tarjeta deberá incluir:

- Imagen o póster
- Título
- Fecha de estreno
- Puntuación
- Enlace al detalle

Ejemplo de información esperada:

```txt
Título: Fight Club
Fecha de estreno: 1999-10-15
Puntuación: 8.4
```

Ejemplo de navegación:

```js
<Link href={`/movie/${movie.id}`}>
  Ver detalle
</Link>
```

---

## Página de detalle de película

La página de detalle deberá obtener el `id` desde la URL.

Ruta sugerida:

```txt
src/app/movie/[id]/page.jsx
```

El endpoint a consultar será:

```txt
https://api.themoviedb.org/3/movie/ID_MOVIE?api_key=TU_API_KEY
```

La página deberá mostrar, como mínimo:

- Título
- Imagen
- Descripción
- Fecha de estreno
- Duración
- Puntuación
- Géneros
- Idioma original
- Estado de la película

---

## Página de detalle de serie

Este punto es opcional.

Ruta sugerida:

```txt
src/app/tv/[id]/page.jsx
```

Endpoint:

```txt
https://api.themoviedb.org/3/tv/ID_SERIE?api_key=TU_API_KEY
```

La página puede mostrar:

- Nombre de la serie
- Imagen
- Descripción
- Fecha del primer episodio
- Cantidad de temporadas
- Cantidad de episodios
- Puntuación
- Géneros
- Idioma original
- Estado

---

## Estructura sugerida del proyecto

Se sugiere la siguiente estructura:

```txt
src/
  app/
    page.jsx
    movie/
      [id]/
        page.jsx
    tv/
      [id]/
        page.jsx
  components/
    MovieCard.jsx
    MovieSection.jsx
    TvCard.jsx
  styles/
```

La carpeta de series es opcional.

---

## Componentes sugeridos

El proyecto puede dividirse en componentes.

Componentes posibles:

```txt
MovieCard
MovieSection
TvCard
LoadingMessage
ErrorMessage
```

No es obligatorio usar exactamente estos nombres, pero sí se espera una organización clara del código.

---

## Ejemplo de endpoints en un archivo de constantes

Se puede crear un archivo para organizar los endpoints.

Ejemplo:

```js
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const endpoints = {
  trendingMovies: `${API_URL}/trending/movie/day?api_key=${API_KEY}`,
  popularMovies: `${API_URL}/movie/popular?api_key=${API_KEY}`,
  topRatedMovies: `${API_URL}/movie/top_rated?api_key=${API_KEY}`,
  nowPlayingMovies: `${API_URL}/movie/now_playing?api_key=${API_KEY}`,
  upcomingMovies: `${API_URL}/movie/upcoming?api_key=${API_KEY}`,
};
```

También puede agregarse el idioma:

```js
export const endpoints = {
  trendingMovies: `${API_URL}/trending/movie/day?api_key=${API_KEY}&language=es-ES`,
  popularMovies: `${API_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`,
  topRatedMovies: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
  nowPlayingMovies: `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=es-ES`,
  upcomingMovies: `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=es-ES`,
};
```

---

## Diseño de la interfaz

La aplicación deberá tener una interfaz clara y ordenada.

No se evaluará un diseño avanzado, pero sí se espera que la información se pueda leer correctamente.

Se tendrá en cuenta:

- Separación entre secciones.
- Tarjetas ordenadas.
- Imágenes con tamaño adecuado.
- Botones o enlaces visibles.
- Textos legibles.
- Diseño responsive básico.

---

## Requisitos técnicos mínimos

El trabajo deberá cumplir con los siguientes requisitos:

- Crear un proyecto con Next.js latest.
- Utilizar componentes client side.
- Utilizar `axios`.
- Utilizar `useEffect`.
- Utilizar `useState`.
- Consumir datos desde TMDB.
- Usar diferentes endpoints para diferentes secciones.
- Mostrar listados de películas.
- Mostrar una página de detalle de película.
- Navegar desde una tarjeta al detalle.
- Mostrar estados de carga.
- Mostrar estados de error.
- Organizar el código en componentes.

---

## Requisitos funcionales mínimos

La aplicación deberá permitir:

- Ver películas en tendencia.
- Ver películas populares.
- Ver películas mejor puntuadas.
- Ver películas en cartelera.
- Ver próximos estrenos.
- Entrar al detalle de una película.
- Volver desde el detalle al inicio.

---

## Requisitos opcionales

De forma opcional, se podrá agregar:

- Sección de series populares.
- Sección de series mejor puntuadas.
- Detalle de serie.
- Buscador de películas.
- Filtro por idioma.
- Ordenamiento por puntuación.
- Botón de favoritos visual, sin persistencia.
- Modo oscuro.
- Página 404 personalizada.
- Mejoras responsive.

---

## Entrega

La entrega deberá incluir:

- Link al repositorio de GitHub.
- Capturas de pantalla de la aplicación funcionando.
- Archivo `README.md` con explicación del proyecto.
- Instrucciones para instalar y ejecutar la app.
- Explicación breve de los endpoints utilizados.
- Apartado de consentimiento de uso de IA

---

## README del proyecto

El proyecto deberá incluir un archivo `README.md` con la siguiente información:

```txt
Nombre del proyecto
Descripción
Tecnologías utilizadas
Instrucciones de instalación
Instrucciones para ejecutar el proyecto
Endpoints utilizados
Capturas de pantalla
Declaración de uso de IA
```

Ejemplo de comandos para el README:

```bash
npm install
npm run dev
```

---

## Criterios de evaluación

Se evaluará:

- Correcta creación del proyecto en Next.js.
- Uso correcto de componentes client side.
- Uso correcto de `axios`.
- Uso correcto de `useEffect`.
- Uso correcto de `useState`.
- Consumo correcto de endpoints de TMDB.
- Uso de diferentes endpoints para diferentes secciones.
- Renderizado dinámico de datos.
- Navegación al detalle.
- Correcta lectura del parámetro `id`.
- Manejo de carga y error.
- Organización del código.
- Claridad visual de la interfaz.
- Presentación general del trabajo.

---

## Aclaración final

El objetivo principal no es copiar una interfaz terminada, sino comprender cómo una aplicación frontend consume datos desde una API externa.

El trabajo debe demostrar que el estudiante puede:

- Leer documentación de una API.
- Identificar endpoints.
- Identificar entidades y atributos.
- Hacer pedidos HTTP GET.
- Guardar datos en estados.
- Renderizar listados dinámicos.
- Crear una página de detalle usando un `id`.
- Separar la interfaz en componentes reutilizables.

## Uso de la IA en el TP

Se uso la ia para poder entender conceptos, para preguntar por buenas practicas para entender errores que marcaba next y saber clases de tailwind.
