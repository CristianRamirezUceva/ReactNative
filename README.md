> Why do I have a folder named ".expo" in my project?

The ".expo" folder is created when an Expo project is started using "expo start" command.

> What does the "packager-info.json" file contain?

The "packager-info.json" file contains port numbers and process PIDs that are used to serve the application to the mobile device/simulator.

> What does the "settings.json" file contain?

The "settings.json" file contains the server configuration that is used to serve the application manifest.

> Should I commit the ".expo" folder?

No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.

Upon project creation, the ".expo" folder is already added to your ".gitignore" file.

################################################################################################

Instalar expo para trabajar con React Native

Antes de comenzar con los pasos se debe tener previamente instaldo node JS y una herramienta de desarrollo como por ejemplo Visual Studio Code

Pasos para trabajar con React Native

1- Nos dirigimos a la pagina de expo la cual es https://expo.io/ y damos click en Get Started

2- Abrimos una consola de comando y verificamos que estamos en la carpeta donde vamos a trabajar y ejecutamos el siguite comando "npm install --global expo-cli" (sin las comillas) el cual nos instalara las dependecias de expo

3- Despues de que termine de instalar expo procedemos a ejecutar el siguiete comando "expo init Nombre-Proyecto"(sin las comillas, debes reemplacer las palabras Nombre-Proyecto ya que ahi debe de ir el nombre de tu proyecto) con el cual vamos a crear nuetros primer proyecto

4- Los siguiente que debemos hacer es escoger la plantilla de nuestro proyecto (lo recomendable es escoger Blank ya que es un proyecto en blanco) despues comenzara a instalar las dependencias para poder trabajar en el proyecto

5- A continuacion debemos abrir una consola de comando o tambien peude ser en la que se venia previamente trabajando y entramos al directorio del proyecto creado y ejecutamos el sgt comando "expo start" (sin las comillas)

6- Se abrira una pestaña nueva en tu navegador en la cual esta Metro Bundler que con esta herramienta nos permite emular la aplicacion en nuetro telefono

8- Debemos instalar la aplicacion de expo para poder emular en nuestro telefono dicha aplicacion se encuentra en PlayStore la cual se llama "Expo"

8- Para trabajar de una manera mas rapida en campo de CONNECTION marcamos local (Recuerda el telefono debe de estar conectado y debe tener activo el modo desarrollador con la depuracion USB activada)

9- Luego procedemos a presionar el campo que dice Run on Android device/emulator (recuerda que el telefono debe estar conectado via USB al Pc), nos abrira la aplicacion en nuestro telefono (la primer vez puede demorar un poco).