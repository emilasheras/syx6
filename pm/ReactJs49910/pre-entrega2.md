# Segunda Entrega de tu Proyecto Final

## 📌 Tareas

- [ ] Entregar a través de un enlace al último commit en el repositorio de GitHub llamado "PreEntrega2+[Apellido]".

## Componentes a Desarrollar:
- [ ] Componente `NavBar` con icono de carrito (`CartWidget`).
- [ ] Componente `ItemListContainer` que muestra un catálogo con navegación a detalles de producto.
- [ ] Componente `ItemDetailContainer` para vistas detalladas de productos.

## Configuración de Enrutamiento:
- [ ] Configurar rutas en `App.js` usando `BrowserRouter` de `react-router-dom`.
- [ ] Establecer rutas: `'/'` para `ItemListContainer`, `'/category/:id'` para `ItemListContainer` filtrado, y `'/item/:id'` para `ItemDetailContainer`.
- [ ] Implementar enlaces de navegación: el logo lleva a `'/'`, el artículo a `'/item/:id'`, y la categoría en el navbar a `'/category/:categoryId'`.

## Integración Avanzada:
- [ ] Usar mocks asíncronos para responder a `:itemId` y `:categoryId`.
- [ ] Detectar la navegación entre categorías y recargar productos de la categoría seleccionada.

## Notas:
- [x] Usar `BrowserRouter` en lugar de `HashRouter`.
- [ ] Usar el id de categoría e ítem como parámetros en la URL.

## Para Entregar:
- [ ] Incluir GIF demostrando la funcionalidad de navegación.
- [ ] Nombrar la entrega según el formato proporcionado.


## Transcripción De Audio A Texto
*Final de la clase 12-12-2023, prof. Conrado*

- 🌐 **Navegación**
Desarrollar una vista de catálogo y detalle, permitiendo navegar entre categorías y a la vista de detalle del producto usando el router. 
Esencial para la entrega es desarrollar el componente de catálogo, detalle e integrar la navegación.
- 🛣️ **Configuración de Rutas**
Configurar en `app.js` el enrutamiento basado en `BrowseRouter`. Crear rutas para la página de inicio, navegación de categorización y navegación de detalles, replicando lo hecho en clase.
- 🚀 **Optimización del Código**
Se sugiere optimizar el código, aunque no es obligatorio. Lo importante es aplicar la navegación con el router de hoy, definiendo rutas, páginas y parámetros para renderizar condicionalmente las categorías o el detalle.
- 📆 **Plazo y Soporte**
El trabajo debe subirse a la plataforma en un plazo de 7 días desde el martes. Mantener contacto con el tutor para dudas, con disponibilidad de ayuda en el chat. Todos los códigos están en el repositorio.