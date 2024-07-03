export default class Cl_discoteca{
    constructor(){
        this.acumGanancias = 0;
        this.contChicas = 0;
        this.contChicasMayor21 = 0;
        this.contSexoM = 0;
        this.contSexoF = 0;


    }
    procesarRumbero(ru){
        this.acumGanancias+= ru.calcularPago();
        if(ru.sexo == "F"){
            this.contChicas++;
        }
        if(ru.sexo == "F" && ru.edad >= 21){
            this.contChicasMayor21++;
        }
        if(ru.sexo == "M"){
            this.contSexoM++;
        }
        if(ru.sexo == "F"){
            this.contSexoF++;
        }
    }
    devolverAcumGanancias(){
        return this.acumGanancias;
    }
    devolverContChicas(){
        return this.contChicas;
    }
    devolverContChicasMayor21(){
        return this.contChicasMayor21;
    }
    devolvercontSexoMayor(){
        if(this.contSexoF > this.contSexoM){
            return "MUJER";
        }
        else if(this.contSexoF < this.contSexoM){
            return "HOMBRE";
        }
        else{
            return "AMBOS POR IGUAL"
        }
    }
    porcRumberaMayor21(){
        return this.contChicasMayor21*100/this.contChicas;
    }
} 