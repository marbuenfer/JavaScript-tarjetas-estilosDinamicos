# INSERTAR TEXTO, IMÁGENES Y CAMBIAR ESTILOS DINÁMICAMENTE.

En el archivo index.html se crea de forma estática un div contenedor ("tarjeta") y se le asignan estilos en CSS.

En CSS se definen clases que se invocarán desde index.js utilizando el lenguaje JavaScript para cambiar de forma dinámica el estilo de la tarjeta.

Igualmente desde JavaScript se cambiarán el contenido y las imágenes añadiendo o eliminandolas, dependiendo de los clics que haga el usuario dentro en la tarjeta.

- Inicialmente se carga una tarjeta con un precio, imagen y descripción.

  ![image](https://user-images.githubusercontent.com/66112531/184160232-32f8a8db-9dfd-4576-a2b3-1f432f09376c.png)

- Cuando se hace clic en la imagen:
  - Una primera vez se cambia el precio, la descripción, la imagen y el estilo.
  
   ![image](https://user-images.githubusercontent.com/66112531/184160299-72b9b164-4d4b-46be-948a-796a1bfc729d.png)
   
  - Una segunda vez, se añade una imagen a la tarjeta (permanece la anterior), se cambia el precio, la descripción y el estilo.
  
  ![image](https://user-images.githubusercontent.com/66112531/184160361-6589354c-b077-46ac-9377-2829e582be92.png)
  
  - Una tercera vez, se cambia estilo y se vuelve a la tarjeta inicial, se repite el proceso.
  
  ![image](https://user-images.githubusercontent.com/66112531/184160232-32f8a8db-9dfd-4576-a2b3-1f432f09376c.png)
  

 
  

