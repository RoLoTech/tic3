// 1. After including the Tesseract script, initialize it in the browser
// Note: to prevent problems while tesseract loads scripts, provide the absolute path to the file from your domain
window.Tesseract = Tesseract.create({
    // Path to worker
    workerPath: 'http://mydomain.com/worker.js',
    // Path of folder where the language trained data is located
    // note the "/" at the end, this string will be concatenated with the selected language
    langPath: 'http://mydomain.com/langs-folder/',
    // Path to index script of the tesseract core ! https://github.com/naptha/tesseract.js-core
    corePath: 'http://mydomain.com/index.js',
});

// 2. Write some logic to initialize the text recognition
document.getElementById("img-to-txt").addEventListener("click", function () {
    let btn = this;

    // Disable button until the text recognition finishes
    btn.disable = true;

    // Configure recognition
    let tesseractSettings = {
        lang: 'spa'
    };

    // Convert an image to text. This task works asynchronously, so you may show
    // your user a loading dialog or something like that, or show the progress with Tesseract
    Tesseract.recognize($("#pdf-canvas").getContext('2d') , tesseractSettings).then(function (result) {
        // The result object of a text recognition contains detailed data about all the text
        // recognized in the image, words are grouped by arrays etc
        console.log(result);

        // Show recognized text in the browser !
        alert(result.text);
    }).finally(function () {
        // Enable button once the text recognition finishes (either if fails or not)
        btn.disable = false;
    });
}, false);