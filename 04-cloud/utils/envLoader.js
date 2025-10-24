import fs from "fs";

const REQUIRED_ENV_VARS = [
    "PORT",
    "ENV.MAX_FILE_SIZE_MB",
    "CLOUD_STORAGE_PATH"
];

//Saber que variables nos flatan
function validateEnvVars() {
    const required = REQUIRED_ENV_VARS;
    const missingVars = required.filter((varName) => !process.env[varName]);

    //alternativa for of es igual a :
    /*
    const missingVars = [];
    for ( let i = 0; i < required.length; i++) {
        const varName = required[i];
        if(!process.env[varName]) {
            missingVars.push(varName);
        }
    }
    return missingVars;
    */

    /*
    //Otra forma
    const missingVars = required.forEach((varName) => {
        if(!process.env[varName]) {
            return varName;
        }
    });

    */
    return missingVars;
}

//saber que el archivo .env esta creado o no
function validateEnvFile(){
    if(!fs.existsSync(".env") || fs.statSync(".env").size === 0) {
        console.log("Creando el archivo .env.");
        
        let str = "";
        REQUIRED_ENV_VARS.forEach((varName) => {
            str = str + varName + '=\n';
        });
        fs.writeFileSync(".env", str)
    
    }
}

validateEnvFile();
const missingVars = validateEnvVars();
missingVars.forEach((missingVar) => {
    console.warn(`Warning: Missing required enviroment variable: ${missingVar}`);
});


let ENV = () => {
    let salida = {};
    
    REQUIRED_ENV_VARS.forEach((varName) =>{
        salida[varName] = process.env[varName];
    });
    return salida ;
}

ENV  = ENV();
export default ENV;