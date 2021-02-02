# The Cocktel App

## Introducción

Proyecto final hecho por Jordi Enriquez y Jaume Garcia que, conectándose a la API de `https://thecocktaildb.com/`, hemos hecho una aplicación para dispositivos móviles completamente funcional, en la que puedes buscar cócteles de la base de datos, filtrarlos, añadirlos a favoritos y hasta añadir nuevos cócteles de forma local.

## Preview

<img src="https://github.com/JordiEnriquezBit/coctel-project/blob/main/Preview.gif" width="304" height="632">

## Objetivos

Poner en práctica todos los contenidos del curso. Es decir:
- Construir una aplicación web, responsive que se pueda visualizar de forma correcta en cualquier dispositivo.
- La aplicación web debe implementar funcionalidades nativas de los dispositivos móviles.
- La aplicación debe poder compilarse como una aplicación nativa.
- La aplicación debe conectarse a una API pública para la obtención de datos.

## Requerimientos Generales

- Arranca mostrando un splash screen personalizado. 
- Contiene un crud del perfil de usuario (imagen incluida)
- Conecta a una API pública de información:
    - Obtiene un listado general y detalles en función de parámetros específicos
- Incorpora alguna utilidad del móvil: Geoposicionamiento, envío de mail, escáner, etc.
- Vistas de la aplicación:
    - Splash Screen
    - Login
    - Register
    - Perfil Usuario
    - Lista General
    - Detalle
    - Vista(s) Libres
  
## Requerimientos funcionales:

- Usuarios únicos se relacionan con la información de la API (votar, favoritoscompartido, editada y almacenada, etc.)
- La información relativa al usuario debe conservarse aunque la aplicación secierre (no es necesario conservarla si la aplicación se desinstala)

## Requerimientos técnicos:

La navegación es fluida y no bloqueante. Se muestran spinners de carga (o carga progresiva) 
- Se estable navegación principal por pestañas o menú
- La navegación secundaria puede ser gestual (recomendada) o mediante interacción con elementos 
