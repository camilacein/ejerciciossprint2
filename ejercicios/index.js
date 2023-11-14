//1
let cambiar= document.getElementById("cambiar")
let cuadradocolor= document.getElementById("cuadradocolor")
cambiar.addEventListener ("click", (evento)=>{
    evento.preventDefault()
    cuadradocolor.innerHTML=""
    let colorEnTxt= document.createElement("h2")
if(cuadradocolor.classList.contains("gris")){
    cuadradocolor.className="azul w-[400px] h-[400px] bg-blue-500 flex mt-12 justify-center "
    colorEnTxt.textContent= "azul"
    colorEnTxt.classList="flex justify-center font-bold"
    cuadradocolor.appendChild(colorEnTxt)
  
}
else if(cuadradocolor.classList.contains("azul")){
    cuadradocolor.className="rojo w-[400px] h-[400px] bg-red-500 flex mt-12 justify-center "
    colorEnTxt.textContent= "rojo"
    colorEnTxt.classList="flex justify-center font-bold"
    cuadradocolor.appendChild(colorEnTxt)
}
else if(cuadradocolor.classList.contains("rojo")){
    cuadradocolor.className="gris w-[400px] h-[400px] bg-gray-500 flex mt-12 justify-center  "
    colorEnTxt.textContent= "gris"
    colorEnTxt.classList="flex justify-center font-bold"
    cuadradocolor.appendChild(colorEnTxt)
}
})
//2
let texto = document.getElementById("texto")
let cuadradotexto=document.getElementById("cuadradotexto")
let borrar= document.getElementById("borrar")
texto.addEventListener("input",(evento)=>{
    evento.preventDefault()
let escribir= texto.value
cuadradotexto.textContent=escribir
})
borrar.addEventListener("click", (evento)=>{
texto.value=""
cuadradotexto.textContent=""
})
//3
function calcularIMC(evento){
evento.preventDefault()
let peso = Number(document.getElementById("peso").value)
let altura=Number(document.getElementById("altura").value)

const calcularAlturaEnM= altura/100
const imc= peso/(calcularAlturaEnM*calcularAlturaEnM)
document.getElementById("imc").value=imc }
document.getElementById("calcular").addEventListener("click",calcularIMC)
//4
document.getElementById("convertir").addEventListener("click", convertirADolares)
function convertirADolares(evento){
    evento.preventDefault()
    let pesoarg= Number(document.getElementById("pesoarg").value)
    let dolares= Number(document.getElementById("dolares").value)
    let tasaDeCambio= 500
    if (pesoarg>0&&dolares==0) {
        const resultadoEnUsd = (pesoarg / tasaDeCambio)
        document.getElementById("resultado").value = resultadoEnUsd
    } else if (dolares>0&&pesoarg==0) {
        const resultadoPesoArg = (dolares * tasaDeCambio)
        document.getElementById("resultado").value = resultadoPesoArg
    } else {
        alert("Ingrese un monto válido.");
    }
}
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("pesoarg").value = ""
    document.getElementById("dolares").value = ""
    document.getElementById("resultado").value = ""
})
