# TDP_2020
Create React App Create React App es un ambiente cómodo para aprender React, y es la mejor manera de comenzar a construir una nueva aplicación de página única usando React.  Create React App configura tu ambiente de desarrollo de forma que puedas usar las últimas características de Javascript, brindando una buena experiencia de desarrollo, y optimizando tu aplicación para producción. Necesitarás tener Node >= 8.10 y npm >= 5.6 instalados en tu máquina. Para crear un proyecto ejecuta:  npx create-react-app my-app cd my-app npm start Nota  En la primera línea npx no es un error de escritura: Es una herramienta de ejecución de paquetes que viene con npm 5.2+.  Create React App no se encarga de la lógica de backend o de bases de datos; tan solo crea un flujo de construcción para frontend, de manera que lo puedes usar con cualquier backend. Para ello internamente usa Babel y webpack, pero no necesitas saber nada de estas herramientas para usar Create React App.  Cuando estés listo para desplegar a producción, ejecuta npm run build lo cual crea una compilación optimizada de tu aplicación en el directorio build. Puedes aprender más acerca de Create React App en su archivo README y en la Guía del Usuario.  Next.js Next.js es un framework popular y ligero para aplicaciones estáticas y renderizadas en servidor construidas con React. Integra soluciones de estilo y enrutamiento y asume que estás usando Node.js como ambiente de servidor.  Aprende Next.js de su guía oficial.  Gatsby Gatsby es la mejor manera de crear sitios web estáticos usando React. Te permite usar componentes React, pero genera HTML y CSS pre-renderizado para garantizar el tiempo de carga más rápido.  Aprende Gatsby de su guía oficial y de la galería de kits de inicio.  Cadenas de herramientas más flexibles Las siguientes cadenas de herramientas ofrecen más opciones y flexibilidad. Las recomendamos para los usuarios con más experiencia:  Neutrino combina el poder de webpack con la simplicidad de los presets (configuraciones preempaquetadas), e incluye presets para aplicaciones React y componentes React. Nx es un conjunto de herramientas para el desarrollo full-stack en monorepos, con compatibilidad incluida con React, Next.js, Express, y más. Parcel es un empaquetador de aplicaciones web rápido y de cero configuración que funciona con React. Razzle es un framework de renderizado en servidor que no requiere ninguna configuración, pero ofrece más flexibilidad que Next.js. Creando una cadena de herramientas desde cero Una cadena de herramientas para construir Javascript generalmente consiste de:  Un gestor de paquetes como Yarn o npm. Este te permite aprovechar el vasto ecosistema de paquetes de terceros, e instalarlos o actualizarlos de una manera fácil. Un empaquetador como webpack o Parcel. Este te permite escribir código modular y empaquetarlo junto en paquetes más pequeños que optimizan el tiempo de carga. Un compilador como Babel. Este te permite escribir Javascript moderno que aún así funciona en navegadores más antiguos. Si prefieres configurar tu propia cadena de herramientas JavaScript desde cero, chequea esta guía que recrea parte de la funcionalidad de Create React App.  No te olvides de asegurarte que tu cadena de herramientas esté configurada apropiadamente para producción.
