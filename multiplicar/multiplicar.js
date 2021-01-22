// requireds
const fs = require('fs');
const colors = require('colors/safe');

const listarTabla = (base, limite = 10) => {
    console.log(colors.green('===================================================='));
    console.log(colors.green(`Tabla de multiplicar del ${base}, del 1 al ${limite}`));
    console.log(colors.green('===================================================='));
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
};

const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        };

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        };

        let data = '';
        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`);
            //console.log(`El archivo tabla-${base}.txt ha sido creado!`);
        });
    });
};


module.exports = {
    crearArchivo,
    listarTabla
};




