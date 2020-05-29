# ![logo](./src/assets/img/logo.png)
## Descripción del producto
Fight Covid App es una aplicación que te muestra un listado de personas dispuestas a colaborar en la emergencia sanitaria producto del Covid-19.

## Tecnología Utilizada

Esta aplicación fue hecha con React bajo la libreria Create React App

```sh
npx create-react-app my-app
cd my-app
npm start
```
- React Hooks
- React-router-dom
- Firebase Auth
- Flexbox CSS
- Bootstrap

## Link de Deploy 🚀

[Fight-Covid](https://fightcovid-278700.df.r.appspot.com/)

## Instrucciones para deployar la aplicación en Google Cloud Platform ☁️

Para desplegar tu proyecto en la nube de Google, dirigete al [sitio oficial de Google Cloud](https://cloud.google.com/) y registrate.

Luego, asegurate de haber generado la carpeta build en tu proyecto, esa es la carpeta que despliega la aplicación; abre la terminal de comandos en la raíz de tu proyecto y corre el siguiente comando:

```sh
npm run build
```

Después, en la página de Google Cloud, sigue los siguientes pasos:

 1. Ir a Consola

 2. Storage

 3. Crear segmento, lo que significa crear un nuevo proyecto de almacenamiento en la nube, selecciona todas las opciones de almacenamiento por defecto y dale a continuar

 4. Sube la carpeta build de tu proyecto al segmento.

 5. Debes crear y subir al segmento el archivo `app.yaml` de configuraciones del entorno de ejecución de tu app, incluidas las versiones y las URL. Un ejemplo básico de configuración sería en el caso de esta aplicación:

    ```sh
    runtime: reactjs
    handlers:
    - url: /(.*\..+)$
    static_files: build/\1
    upload: build/(.*\..+)$
    - url: /.*
    static_files: build/index.html
    upload: build/index.html
    ```

6. Abres la Cloud Shell de Google y escribes los siguientes comandos.

    Después de project colocas el id de tu proyecto

    ```sh
    gcloud config set project fightcovid-278700
    ```
    Crea una carpeta con un nombre relacionado a tu proyecto
    ```sh
    mkdir fight-covid
    ```
    Luego escribe esto, donde `gs` es el nombre de tu proyecto y en `./` va el nombre de la carpeta creada anteriormente
    ```sh
    gsutil rsync -r gs://fightcovid ./fight-covid
    ```

    Entra en la carpeta
    ```sh
    cd fight-covid
    ```

    Y por último, ejecuta el comando de Deploy
    ```sh
    gcloud app deploy
    ```

    Tardará unos minutos y te generará la URL donde estará alojado tu proyecto.

## Autor
> Diseñado y desarrollado por Gonzalo Varas



