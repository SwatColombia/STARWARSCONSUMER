# 🌌 Star Wars Films App

![Angular](https://img.shields.io/badge/Angular-17+-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

> App web que consume la API pública de Star Wars (SWAPI) y muestra todas las películas de la saga con estilo épico.

<img width="1278" height="940" alt="starwars" src="https://github.com/user-attachments/assets/cf745b29-3d5a-46e6-b38b-7926d82b2c58" />


## 📸 Preview

<!-- Arrastra tu screenshot aquí o pega el link -->
![Preview de la app](./assets/screenshot.png)

---

## 🚀 Tecnologías usadas

- **Angular 17+** — Framework principal (standalone components)
- **Tailwind CSS** — Estilos y diseño responsivo
- **TypeScript** — Tipado fuerte
- **SWAPI** — API pública de Star Wars `https://swapi.dev/api/films/`
- **HttpClient** — Consumo de la API REST

---

## ⚙️ Instalación y uso
```bash
# 1. Clona el repositorio
git clone https://github.com/TU_USUARIO/star-wars-app.git

# 2. Entra a la carpeta
cd star-wars-app

# 3. Instala las dependencias
npm install

# 4. Corre el servidor de desarrollo
ng serve

# 5. Abre en el navegador
http://localhost:4200
```

---

## 📁 Estructura del proyecto
```
src/
├── app/
│   ├── components/
│   │   └── api-consumer/
│   │       ├── api-consumer.ts
│   │       ├── api-consumer.html
│   │       └── api-consumer.css
│   ├── services/
│   │   └── api-consumer.service.ts
│   ├── models/
│   │   └── series.ts
│   ├── app.config.ts
│   └── app.routes.ts
```

---

## 🌐 API utilizada

| Endpoint | Descripción |
|---|---|
| `GET /films/` | Lista todas las películas de Star Wars |

Respuesta ejemplo:
```json
{
  "count": 6,
  "results": [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "director": "George Lucas",
      "release_date": "1977-05-25",
      "opening_crawl": "It is a period of civil war..."
    }
  ]
}
```

---

## 👨‍💻 Autor

**Tu Nombre**  
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TU_USUARIO)

---

## 📄 Licencia

Este proyecto es de uso educativo y libre distribución.

---

> *"May the Force be with you."* ⚔️
