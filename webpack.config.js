const path = require('path'); // Permite acceder a las carpetas en el proyecto, da igual si es local o nube. Y sabremos en donde estamos
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Requerimos el plugin que hemos instalado para utilizar el HTML con Webpack
const CopyWebpackPlugin = require('copy-webpack-plugin'); //Requerimos este plugin para poder utilizar los CSS con Webpack y lo lleva a la carpeta DIST

module.exports = {
    entry: './src/index.js', //Creamos nuestra entrada y donde vive el código inicial
    output: {
        path: path.resolve(__dirname, 'dist'), //Donde se encuentre la carpeta es donde vas a crear la nueva carpeta dist 
        filename: 'main.js', //Así es como se llama nuestro fichero que realizará webpack donde tendrá todo lo compilado en un solo js
    },
    resolve : {
        extensions: ['.js'], // con eso le diremos que tipo de ficheros tendremos al empaquetar
    },
    module: {
        // Creamos unas reglas en un array y que estructurará nuestro código y como identificar nuestros archivos
        rules : [
          {
            //Va a tener unos valores que va a filtrar ya sea una ruta o un archivo
            test: /\.js?$/,
            // Excluimos archivos
            exclude: /node_modules/,
            // Le decimos que configuración vamos a utilizar en todo nuestro codigo
            use: {
                //utilizamos la confiruación de babel-loader
                loader: 'babel-loader',
            }
          }
        ]
    },
    //Implementamos los plugins que vamos a utilizar
    plugins: [
        //Esto nos permitirá utilizar los archivos HTML en webpack
        new HtmlWebpackPlugin(
            {   //
                inject: true,
                // Donde se encuentra nuestro template principal
                template: './public/index.html',
                // Donde va a guardar nuestros cambios y empaquetamos
                filename: './index.html'
            }),
        new CopyWebpackPlugin([{
            from: './src/styles/styles.css',
            to : ''
        }])
    ],
}