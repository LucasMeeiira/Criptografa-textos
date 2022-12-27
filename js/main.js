
let textoDigitado = document.querySelector('.criptografar__input');
let telaDoTexto = document.querySelector('.mensagem__input');
const buttonCriptografar = document.querySelector('.cripto');
const buttonDescriptografar = document.querySelector('.descripto');
const buttonCopiar = document.querySelector('.copiar');

const letras = "RLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCSRLFGJNMCS";
let codigo = "";
let codigoDescriptografado = "";
  

buttonCriptografar.addEventListener("click", ()=>{

  let somaCodigo ;
  let textoComValor = textoDigitado.value;

  for(let i = 0; i < textoComValor.length; i++){
    somaCodigo = textoComValor.charAt(i)  +  letras.charAt(i);  
    codigo += somaCodigo;
  } 

  telaDoTexto.innerHTML= codigo;
})



buttonDescriptografar.addEventListener("click", ()=>{
  
  let subtraiCodigo ;
  let textoComValor = textoDigitado.value 

  for(let i = 0; i < textoComValor.length; i=i+2 ){
    subtraiCodigo = textoComValor.charAt(i); 
    codigoDescriptografado += subtraiCodigo; 
  } 
  telaDoTexto.value = codigoDescriptografado;
})



buttonCopiar.addEventListener("click",()=>{

  let textoCriptografado = telaDoTexto;

  textoCriptografado.select(); 
  document.execCommand("copy")

    textoDigitado.value="";
   telaDoTexto.value="";
})




