 document.getElementById("convertir").addEventListener("click", function () {
    const txt = document.getElementById("texto_entrada").value;
    if (txt === "Introduzca su texto aquí" || txt === ""){
        alert("INGRESE TEXTO PARA PODER CONVERTIR")
    }else {
        convertir(txt)
    }
 });

// document.getElementById("convertir").addEventListener("click", function () {
//     let txt = "";
//     // const fs = require("fs");
//     // const text = fs.read;
//     // let pdfjsLib = window['pdfjs-dist/build/pdf'];
//     // pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
//     let maxPages;
//     let pdf = pdfjsLib.getDocument("public/js/core_functions/texts/Preguntas Parcial SO.pdf");
//     maxPages = pdf.numPages;
//     console.log("NUMERO DE PAGINAS: " + maxPages);
//     // pdfjsLib.getDocument("public/js/core_functions/texts/Preguntas Parcial SO.pdf").promise(function (doc) {
//     //     maxPages = doc.numPages;
//     //     console.log('# Document Loaded');
//     //     console.log('Number of Pages: ' + maxPages);
//     // });
//
//     for (let j = 1; j <= 23; j++) {
//         let page = pdf.getPage(j);
//         txt += page.getTextContent();
//     }
//
//     convertir(txt);
//     // const textByLine = text.split("\n");
//     // for (let i = 0; i < textByLine.length; i++) {
//     //     console.log(textByLine[i])
//     // }
// },{passive: true});

let timer;

function convertir(texto) {
    let i = 0;
    window.clearTimeout(timer);
    let texto_final ="";
    let array_intermedio = texto.split("\n");
    for(let enunciado of array_intermedio){
        texto_final = texto_final + " " + enunciado;
    }

    recursion(texto_final.split(" "), i);
}

function recursion(textoVec, i) {
    if (i < textoVec.length) {
        document.getElementById("myParagraph").innerHTML = textoVec[i];
        i++;
        timer = window.setTimeout(function () {
            recursion(textoVec, i);
        }, 300);
    }
}

document.getElementById("detener").addEventListener("click", function () {
    window.clearTimeout(timer);
    document.getElementById("myParagraph").innerHTML = "Esperando nuevo archivo";
});