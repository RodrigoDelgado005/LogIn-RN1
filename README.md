# LogIn-RN1

Para comenzar con el proyecto, es importante ejecutar los siguientes comandos:

Instalación del CLI de React Native
```bash
npm install -g react-native-cli
```

Crear un Nuevo Proyecto
```bash
npx create-expo-app@latest
```

Navegar al Directorio del Proyecto
```bash
cd MiProyecto
```

Para poder navegar entre las paginas por medio de los botones, debemos instalar lo siguiente:
```bash
npm install @react-navigation/native --save
npm install @react-navigation/drawer --save
npm install @react-navigation/stack --save
npm install --save @react-native-community/async-storage
```

Para utilizar los iconos de FontAwesome 5 instalaremos lo siguiente:
```bash
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-native-fontawesome
```

Ejecutar la Aplicación en un Emulador o Dispositivo(En este caso utilizaremos Expo Go para Android) y lo iniciaremos con:
```bash
npx expo start
```

Debemos escaneaer el codigo QR con la aplicacion para acceder al proyecto
Es importante saber que ante cualquier problema, podemos acceder a la documentacion oficial de expo donde nos proporcionan la solucion a cualquier error(https://docs.expo.dev/tutorial/create-your-first-app/)

Problema a Resolver:
Realizar un Acceso mediante user, e-mail y password (Axios para la conexión y envio)
A considerar deben hacer la aplicación en react native
El BackEnd con (php, python o java) y la base de datos con mysql (Xampp o Wamp)

Solucion:
Para esto se utilizo el archivo index.tsx para realizar la pagina de presentacion en la cual hay un boton que nos lleva al login
Para que el boton nos lleve al Login, se creo en la carpeta navigation el archivo homeStack.tsx, en el cual definimos las rutas y en el archivo index.tsx definimos la funcion para que nos lleve al registro.
Esta parte de la aplicacion se ve asi:

![image](https://github.com/user-attachments/assets/c73dcc10-cade-42ed-b99a-0a43f7e440e8)


Para el Login se utilizo Xampp para la BD y PHP para el BackEnd, esta parte del proyecto se encuentra en el siguiente Repositorio:
https://github.com/RodrigoDelgado005/Login-BasedeDatos

Para el archivo Login.tsx, se realizo la conexion con el BackEnd, se definieron los distintos mensajes segun corresponda, se creo el Registro y el Inicio de Sesion los cuales se pueden alternar por medio de un boton. En caso del Registro se verificara el formato requerido y se consultara a la BD que no hayan datos que coincidan con un usuario existente y para el Inicio de Sesion se verificara que los datos ingresados coincidan con algun usuario en la BD. Es importante modificar la url de solicitud por la ip de nuestro PC, esto lo podemos obtener desde el simbolo del sistema por medio del comando 'ipconfig' junto a la ruta en donde se encuentra nuestro BackEnd.
Esta parte de la aplicacion se ve asi:

![image](https://github.com/user-attachments/assets/234d5ab1-2bcd-4ac1-af8e-3f2b294e7d99)

![image](https://github.com/user-attachments/assets/6f3991a1-ccde-4b15-aae6-eaa08ef9f7f0)


Cualquier duda o error podemos consultar la documentacion oficial y las fuentes utilizadas para el proyecto.
Para este proyecto se consulto a las siguientes fuentes:

https://medium-com.translate.goog/@ashfaaqahamed17/creating-signup-and-login-system-using-react-native-php-and-mysql-f176a1de2c73?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=nui&_x_tr_hist=true

https://blog.devops.dev/creating-simple-sign-up-screen-with-react-native-php-and-mysql-8a363a0d3a66

https://aboutreact.com/react-native-login-and-signup/

https://www.asapdevelopers.com/build-a-react-native-login-app-with-node-js-backend/
