const { argv } = require('./config/yargs');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.green(archivo)))
            .catch(err => console.log(colors.red(err)));
        break;

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    default:
        console.log(colors.red('Comando no reconocido'));
        break;
}
