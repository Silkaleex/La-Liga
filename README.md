# Proyecto de la Liga Santander 
## Detalles del proyecto, Descripcion Funcional 
### Home 
#### Entrando por primera vez en esta pagina web nos dará la bienvenida, Además veremos una barra de navegación para entrar en otros enlaces y un carrusel de las imagenes de la liga.
![img1](https://user-images.githubusercontent.com/82760991/220388573-302e506a-f6e0-46f0-a984-511563134dbf.PNG)
### Por ultimo en la parte de abajo hay una descripción de ultimas noticias que te enviaran también a los demás enlaces
![img2](https://user-images.githubusercontent.com/82760991/220389413-7bac5503-bb3c-4fe4-9381-7b8e5830e6a6.PNG)
## Partidos 
### En esta parte tendrás toda la información actual de todos los partidos tanto si jugaron como equipo local, como visitante, el resultado, jornada y cuando se jugó dicho partido. Contiene una barra de filtrado que puedes buscar a tu jugador favorito tanto sus partidos ganados, perdidos, empatados y proximas partidos a los que vaya a jugar.
![img3](https://user-images.githubusercontent.com/82760991/220390062-f2bdd71f-557f-41bf-a503-2ad2fb0f330a.PNG)
## Clasificación
### En este apartado describimos en una tabla en que posición va cada equipo por sus victorias, derrotas, goles a favor en contra, puntos.
![img4](https://user-images.githubusercontent.com/82760991/220390230-069eafc7-b440-4a81-8797-2938a55d9bb6.PNG)
## Información
### En este apartado describimos las ultimas noticias más destacadas de la liga contando todos los detalles.
![img5](https://user-images.githubusercontent.com/82760991/220390367-01b1c391-fd8e-49d3-b955-860f67a5934b.PNG)
## Equipos
### En esta sección contamos en un breve resumen la historia de cada Equipo, donde se fundó, quien es su presidente y entrenador actual y su corrrespondiente estadio,un boton diseñado para enviarte al enlace a sus paginas principales.
![img6](https://user-images.githubusercontent.com/82760991/220390477-374a7506-18d3-413d-9db5-d5087a945788.PNG)
## Estadisticas
### Por ultimo Creamos 2 tablas de estadísticas, con los 5 equipos con mayores goles, como partido local, tanto en goles, como partidos y una media de cada equipo,en la otra tabla contiene los 5 equipos que menos goles encajaron como visitante con sus goles y sus partidos.
![img7](https://user-images.githubusercontent.com/82760991/220390600-db8928f0-4f11-4105-be5b-f1c3da4b0ca5.PNG)

# Descripcion Técnica
## Recogiendo datos de la api de la Liga Santander
### Accedimos a la pagina https://www.football-data.org/ accedimos a los datos en formato JSON mediante una API KEY, descargamos Postman, cogimos los datos a través de esta aplicación y creamos 2 archivos en javascript en la que obtenemos todos los datos de partidos y clasificaion de la api.
### Partidos
![img8](https://user-images.githubusercontent.com/82760991/220391356-94fac1f6-68e3-40ef-bb01-b096094a0c44.PNG)
### Clasificación
![img9](https://user-images.githubusercontent.com/82760991/220391486-24c801eb-9d97-4bfa-9e09-2b7b53908acc.PNG)
### Tabla Partidos
### Cogemos todos los datos que necesitamos y los metemos en una consola para verificar que dichos datos son correctos.
![img10](https://user-images.githubusercontent.com/82760991/220392010-da45671d-7116-49ba-80e1-591562800bd2.PNG)
### Creamos una función, Vamos a crear contenido en nuestro Tbody a través de Javascript, en nuestro Tbody le añadimos una etiqueta ID para añadir contenido.
![img11](https://user-images.githubusercontent.com/82760991/220392241-e8be1504-4599-42c7-b7e4-6c80841ef30d.PNG)
![img12](https://user-images.githubusercontent.com/82760991/220392310-e1b93177-8d48-405e-a4d6-fc9a14de87e9.PNG)
![img13](https://user-images.githubusercontent.com/82760991/220392338-d9204f9c-5584-460c-86e9-6832f3a1f233.PNG)
![img14](https://user-images.githubusercontent.com/82760991/220392388-cf001e78-3fd2-45e3-b00b-4e8122fb8c77.PNG)
### Con este contenido también podemos crear la tabla de clasificación, cogiendo los datos que creamos de la clasificación.
##Creando un filtrado de busqueda
### Creamos un Input de tipo radio y un boton en HTML y les ponemos un atributo id en nuestro ID a nuestras etiquetas. Se puede hacer sin botón pero es mejor ponerle un botón ya que el margen de error es menor. En Javascript le añadimos el evento AddEventListener a nuestro boton con el evento click, una vez pulsado si escribirmos los valores correctos nos dará dicha información.
Creamos una función con el atributo Id que le pusimos a input y le añadimos el valor value, y seleccionamos varios inputs que los vamos a poner de tipo radio en este caso con querySelector.
Por ultimo en la parte de filtrado le ponemos condiciones para que se cumpla por ejemplo en este caso que se escriba en Minúscula, de lo contrario no cogera datos.
Le añadimos estilos a traves del Dom.
Para terminar ponemos mas condiciones para nuestros input de radio en el que una vez pulsemos en uno de ellos(Ganados, perdidos, empatados y proximos partidos) nos salga las caracteristicas de que hemos seleccionado de nuestro equipo preferido.
![img15](https://user-images.githubusercontent.com/82760991/220392827-f3af8293-274f-404e-8c27-adbf2e92a906.PNG)
![img16](https://user-images.githubusercontent.com/82760991/220392874-7b32d20b-5617-4de6-8673-8059e8164b10.PNG)
![img17](https://user-images.githubusercontent.com/82760991/220392900-5f60979c-0d64-4987-9bc3-af93a54eefb3.PNG)
![img18](https://user-images.githubusercontent.com/82760991/220392979-08e2fc13-4997-4740-b555-68cb9e751a05.PNG)
### Por ultimo ponemos esta linea de codigo para que filtre el contenido dentro de nuestra funcion de crearTabla una vez le demmos al boton con el evento creado
![img19](https://user-images.githubusercontent.com/82760991/220393801-8a462f28-f4a0-4b0c-88d0-3ca997307406.PNG)

# ROADMAP
![IMG20230221171747](https://user-images.githubusercontent.com/82760991/220401076-0e1cdeda-a724-42eb-bcf6-47420dc0094f.jpg)
## HTML5, CSS3, JAVASCRIPT, BOOTSTRAP

## TO DO
### El diseño, mejorar el filtrado la estructura de información y otros aspectos que se presenten en un futuro.
