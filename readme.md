# Proyecto: Todo App

Este es un proyecto para la gestión de tareas desarrollado con **Nuxt 3** (frontend) y **Node.js** con **Express** (backend). Utiliza **TypeScript** tanto en el frontend como en el backend para una mejor tipificación y manejo del código. Así como **MongoDB** para almacenar los datos.

A continuación, encontrarás una guía paso a paso para instalar y ejecutar el proyecto en tu máquina.

---

## **Frontend**

### Tecnologías y Librerías Principales

- **Framework:** Nuxt 3
- **Lenguaje:** TypeScript
- **Librerías utilizadas:**
  - [FontAwesome](https://fontawesome.com/) (iconos)
  - [Axios](https://axios-http.com/) (para realizar solicitudes HTTP)
  - [v-tooltip](https://v-tooltip.netlify.app/) (para mostrar tooltips en los componentes)
  - [Pinia](https://pinia.vuejs.org/) (para la gestión del estado)

### **Pasos para configurar y levantar el frontend**

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/jeanjuarez/todo-fullstack-app.git
   ```

2. **Ir a la carpeta del frontend**

   ```bash
   cd frontend
   ```

3. **Instalar las dependencias del proyecto** Asegúrate de que tienes [Node.js](https://nodejs.org/en) instalado (versión recomendada: 18 o superior).

   ```bash
   npm install
   ```

4. **Levantar servidor de desarrollo**

   ```bash
   npm run dev
   ```

   Esto iniciará el proyecto y podrás acceder al frontend en: http://localhost:3000

5. **Build del proyecto** Si necesitas compilar el proyecto para producción, puedes utilizar el siguiente comando:

   ```bash
   npm run build
   npm run start
   ```

## **Backend**

### Tecnologías y Librerías Principales

- **Framework:** Node.js con Express
- **Base de datos:** MongoDB
- **Lenguaje:** Javascript
- **Librerías utilizadas:**
  - [Mongoose](https://mongoosejs.com/) (para interactuar con MongoDB)
  - [cors](https://www.npmjs.com/package/cors) (para habilitar CORS en las solicitudes HTTP)
  - [nodemon](https://www.npmjs.com/package/nodemon) (para reiniciar el servidor automáticamente en caso de cambios en el código)

### **Pasos para configurar y levantar el backend**

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/jeanjuarez/todo-fullstack-app.git
   ```

2. **Ir a la carpeta del backend**

   ```bash
   cd backend
   ```

3. **Configurar la base de datos MongoDB**

- Instala y ejecuta MongoDB en tu máquina local. Puedes usar [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) si prefieres una base de datos en la nube.
- Una vez que tengas MongoDB corriendo, anota la conexión URI (por ejemplo, `mongodb://localhost:27017/tasks`).

4. **Levantar servidor de desarrollo** Usa el siguiente comando para iniciar el servidor en modo desarrollo (con nodemon):

   ```bash
   npm run dev
   ```

   Esto iniciará el backend: http://localhost:5000 (Previamente, debes elegir este puerto, es opcional, pero dado que en el 3000 está el frontend, es mejor elegirlo).

5. **Build del proyecto** Levantar el servidor en modo producción Si necesitas ejecutar el backend en producción, usa:

   ```bash
   npm run build
   npm run start
   ```

## **Conexión entre el frontend y el backend**

- Asegúrate de levantar el backend, y que esté corriendo con normalidad.

- Para conectar el frontend con el backend, necesitarás configurar las rutas de las API en el frontend. Con axios en Nuxt, puedes hacer esto de la siguiente manera:

```javascript
 private apiClient = axios.create({
    baseURL: "http://localhost:5000/api/tasks",
    headers: {
      "Content-Type": "application/json",
    },
  });
```

    En este caso, la ruta de la API es `/api/tasks`, y el backend ubicado en el puerto 5000.

    Cuando ambos servidores estén en ejecución, ambos podrán comunicarse.
