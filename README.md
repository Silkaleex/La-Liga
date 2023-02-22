# Proyecto de la Liga Santander

## Detalles del proyecto, Descripcion Funcional

## Home

### Entrando por primera vez en esta pagina web nos dara la bienvenida, Ademas veremos una barra de navegación para entrar en otros enlaces y un carrusel de las imagenes de la liga.

![img1](https://user-images.githubusercontent.com/82760991/220388573-302e506a-f6e0-46f0-a984-511563134dbf.PNG)
### Por ultimo en la parte de abajo hay una descripción de ultimas noticias que te enviaran también a los demás enlaces
![img2](https://user-images.githubusercontent.com/82760991/220694236-0d8b2725-2735-4102-9da6-e7edaad81fa4.PNG)


## Partidos

### En esta parte tendrás toda la información actual de todos los partidos tanto si jugaron como equipo local como visitante el resultado jornada y cuando se jugó dicho partido. Contiene una barra de filtrado que puedes buscar a tu jugador favorito tanto sus partidos ganados perdidos empatados y proximas partidos a los que vaya a jugar.

![img3](https://user-images.githubusercontent.com/82760991/220694333-ee522bdd-54d7-4cc5-b475-f2ce40e650b3.PNG)

## Clasificación

### En este apartado describimos en una tabla en que posición va cada equipo por sus victorias, derrotas, goles a favor en contra, puntos.

![img4](https://user-images.githubusercontent.com/82760991/220390230-069eafc7-b440-4a81-8797-2938a55d9bb6.PNG)

## Información

### En este apartado describimos las ultimas noticias mas destacadas de la liga contando todos los detalles.

![img5](https://user-images.githubusercontent.com/82760991/220694576-808cfc27-83f3-4a61-9b03-31eccfe108b7.PNG)

## Equipos

### En esta sección contamos en un breve resumen la historia de cada Equipo, donde se fundó, quien es su presidente y entrenador actual y su corrrespondiente estadio, creando un enlace a sus paginas principales.

![img6](https://user-images.githubusercontent.com/82760991/220390477-374a7506-18d3-413d-9db5-d5087a945788.PNG)

## Estadisticas

### Por ultimo Creamos 2 tablas de estadísticas con los 5 equipos con mayores goles como partido local tanto en goles como partidos y una media de cada equipo,en la otra tabla contiene los 5 equipos que menos goles encajaron como visitante con sus goles y sus partidos.

![img7](https://user-images.githubusercontent.com/82760991/220694470-b348e42f-2bdc-4d04-8aba-f421f5ffab78.PNG)

# Descripcion Técnica

## Recogiendo datos de la api de la Liga Santander

### Accedimos a la pagina https://www.football-data.org/ accedimos a los datos en formato JSON mediante una Api KEY, descargamos Postman, cogimos los datos a traves de esta aplicacion y creamos 2 archivos en javascript en la que obtenemos todos los datos de partidos y clasificaion de la api.

### Partidos

![img8](https://user-images.githubusercontent.com/82760991/220391356-94fac1f6-68e3-40ef-bb01-b096094a0c44.PNG)

### Clasificación

![img9](https://user-images.githubusercontent.com/82760991/220391486-24c801eb-9d97-4bfa-9e09-2b7b53908acc.PNG)

### Tabla Partidos

### Cogemos todos los datos que necesitamos y los metemos en una consola para verificar que dichos datos son correctos.

![img10](https://user-images.githubusercontent.com/82760991/220392010-da45671d-7116-49ba-80e1-591562800bd2.PNG)

### Creamos una funcion, Vamos a crear contenido en nuestro Tbody a traves de javascript, en nuestro tbody le añadimos una etiqueta ID para añadir contenido.

![img11](https://user-images.githubusercontent.com/82760991/220392241-e8be1504-4599-42c7-b7e4-6c80841ef30d.PNG)
![img12](https://user-images.githubusercontent.com/82760991/220698410-67bfa871-0db6-475b-bcfd-ea0df4e1c432.PNG)
![img13](https://user-images.githubusercontent.com/82760991/220698418-cb589425-43a7-48c2-8d68-c3ff871f3435.PNG)
![img14](https://user-images.githubusercontent.com/82760991/220698431-19d7a416-f2f9-4488-ac5c-6a543577e524.PNG)


### Con este contenido tambien podemos crear la tabla de clasificacion, cogiendo los datos que creamos de la clasificación.

##Creando un filtrado de busqueda

### Creamos un Input de tipo radio y un boton en HTML y les ponemos un atributo id en nuestro ID a nuestras etiquetas. Se puede hacer sin boton pero es mejor ponerle un boton ya que el margen de error es menor. En javascript le añadimos el evento AddEventListener a nuestro boton con el evento click, una vez pulsado si escribirmos los valores correctos nos dará dicha información.

Creamos una función con el atributo Id que le pusimos a input y le añadimos el valor value, y seleccionamos varios inputs que los vamos a poner de tipo radio en este caso con querySelector.
Por ultimo en la parte de filtrado le ponemos condiciones para que se cumpla por ejemplo en este caso que se escriba en Minúscula, de lo contrario no cogera datos.
Le añadimos estilos a traves del Dom.
Para terminar ponemos mas condiciones para nuestros input de radio en el que una vez pulsemos en uno de ellos(Ganados, perdidos, empatados y proximos partidos) nos salga las caracteristicas de que hemos seleccionado de nuestro equipo preferido.
![img15](https://user-images.githubusercontent.com/82760991/220702283-be0b03ed-52cf-40af-9005-9373d9b8ad47.PNG)
![img16](https://user-images.githubusercontent.com/82760991/220702330-2089f31e-fac1-4d66-aa41-458d3712c429.PNG)
![img17![img18](https://user-images.githubusercontent.com/82760991/220702373-e8c4c773-31d7-4b45-98b1-cbe0fa409a8f.PNG)
](https://user-images.githubusercontent.com/82760991/220702362-0ebd0e74-e155-479b-838f-bc9395719e3f.PNG)

### Por ultimo ponemos esta linea de codigo para que filtre el contenido dentro de nuestra funcion de crearTabla una vez le demmos al boton con el evento creado
![img19](https://user-images.githubusercontent.com/82760991/220702989-af601967-fade-4b6c-8fd6-dc036700771d.PNG)

# ROADMAP
![IMG20230221171747](https://user-images.githubusercontent.com/82760991/220401076-0e1cdeda-a724-42eb-bcf6-47420dc0094f.jpg)
## HTML5, CSS3, JAVASCRIPT, BOOTSTRAP

## TO DO
### El diseño, mejorar el filtrado la estructura de informacion y otros aspectos que se presenten en un futuro.
añadir en la seccion de partidos en los inputs de radio(ganados,perdidos,empatados y proximos) poner una alerta que ponga "selecciona el boton de buscar".

