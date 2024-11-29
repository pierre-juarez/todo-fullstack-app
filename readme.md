# Proyecto: Todo App

Este es un proyecto para la gestión de tareas desarrollado con **Nuxt 3** (frontend) y **Node.js** con **Express** (backend). Utiliza **TypeScript** tanto en el frontend como en el backend para una mejor tipificación y manejo del código. Así como **MongoDB** para almacenar los datos.

A continuación, encontrarás una guía paso a paso para instalar y ejecutar el proyecto en tu máquina.

---

## **Frontend** 🖥️

### Tecnologías y Librerías Principales 🔧

- **Framework:** Nuxt 3
- **Lenguaje:** TypeScript
- **Librerías utilizadas:**
  - [FontAwesome](https://fontawesome.com/) (iconos) 🖋️
  - [Axios](https://axios-http.com/) (para realizar solicitudes HTTP) 🌐
  - [v-tooltip](https://v-tooltip.netlify.app/) (para mostrar tooltips en los componentes) 💬
  - [Pinia](https://pinia.vuejs.org/) (para la gestión del estado) 🧠

### **Pasos para configurar y levantar el frontend** 🚀

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

## **Backend** 🖧

### Tecnologías y Librerías Principales 🔧

- **Framework:** Node.js con Express
- **Base de datos:** MongoDB
- **Lenguaje:** Javascript
- **Librerías utilizadas:**
  - [Mongoose](https://mongoosejs.com/) (para interactuar con MongoDB) 🗄️
  - [cors](https://www.npmjs.com/package/cors) (para habilitar CORS en las solicitudes HTTP) 🔐
  - [nodemon](https://www.npmjs.com/package/nodemon) (para reiniciar el servidor automáticamente en caso de cambios en el código) 🔄

### **Pasos para configurar y levantar el backend** 🚀

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
   npm start
   ```

   Esto iniciará el backend: http://localhost:5000 (Previamente, debes elegir este puerto, es opcional, pero dado que en el 3000 está el frontend, es mejor elegirlo).

5. **Build del proyecto** Levantar el servidor en modo producción Si necesitas ejecutar el backend en producción, usa:

   ```bash
   npm run build
   npm run start
   ```

## **Conexión entre el frontend y el backend** 🔗

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

## **Implementación de GraphQL** ⚡

Uno de los avances más significativos de este proyecto fue **integrar GraphQL** para la gestión de tareas. Esta implementación me permitió optimizar las consultas al servidor, ya que con GraphQL puedo obtener solo los datos que realmente necesito, en lugar de recibir una cantidad excesiva de datos como sucede en las API REST tradicionales.

### **Beneficios de GraphQL frente a una API REST** 🚀

1. **Consultas eficientes**: GraphQL permite hacer consultas más específicas, solicitando solo los campos necesarios, lo que reduce la sobrecarga de datos y mejora el rendimiento.
2. **Menos peticiones**: Con una sola consulta, puedes obtener múltiples recursos, lo que reduce la cantidad de peticiones HTTP necesarias.
3. **Esquema fuerte**: GraphQL proporciona un esquema muy estructurado y documentado que facilita el desarrollo y el mantenimiento del backend.

### **Mi experiencia con GraphQL** 📚

Siempre quise trabajar con **GraphQL** debido a su flexibilidad y poder. Para aprender más sobre esta tecnología, leí la documentación oficial en [Apollo GraphQL](https://www.apollographql.com/docs). Esto me permitió entender cómo manejar las consultas, mutaciones y suscripciones de manera eficiente.

Además, durante la implementación, me encontré con un problema relacionado con las consultas y la caché en los foros de **GitHub**. Después de investigar y experimentar, pude solucionarlo. Esto fue una gran oportunidad para aprender a manejar y resolver problemas comunes que pueden surgir en proyectos con GraphQL.

### **Cómo aprendí GraphQL** 📖

Mi aprendizaje de **GraphQL** fue un proceso gradual que involucró tanto la lectura de documentación oficial como la visualización de tutoriales y ejemplos prácticos. Comencé con los siguientes pasos:

1. **Documentación de Apollo GraphQL**: La documentación oficial me proporcionó una base sólida sobre cómo usar GraphQL, entender su esquema y cómo estructurar las consultas.
2. **Tutoriales en video**: Para comprender mejor cómo implementar GraphQL en un proyecto real, vi videos en YouTube que mostraban ejemplos de integración de GraphQL con **Apollo Client** y **Apollo Server**.

3. **Ejemplos prácticos**: Me ayudó mucho trabajar con ejemplos prácticos donde podía implementar consultas y mutaciones en el frontend y backend, (en este caso las mutaciones no fueron necesarias), viendo los resultados directamente en el navegador y solucionando problemas a medida que surgían.

A lo largo de este proceso, también consulté muchos foros como **Stack Overflow** y **GitHub Issues** para resolver problemas técnicos específicos. Por ejemplo, me encontré con un inconveniente en uno de los módulos de exportación en **Apollo Client**, que resolví después de revisar las respuestas en los foros. Esto me permitió aprender cómo solucionar problemas prácticos en la implementación de **GraphQL**.

---
