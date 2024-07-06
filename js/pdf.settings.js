// URL of the PDF file
const pdfUrl = 'img/about/CV_Velikhanov_Teymur.pdf';

const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'js/pdf.worker.min.js';
const canvas = document.getElementById('pdf-viewer');
(async function renderPDF(url) {
    const loadingTask = pdfjsLib.getDocument(url);
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(1);

    // Calculate scale based on device pixel ratio and viewport size
    const viewport = page.getViewport({scale: 5});
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Hide the loader
    document.getElementById('loader').style.display = 'none';

    // Enhance render context for better quality
    const renderContext = {
        canvasContext: context,
        viewport: viewport,
        // removePageBorders: true,
        // removePageTrim: true
    };
    await page.render(renderContext).promise;
})(pdfUrl).then(() => {
    // Show the canvas after PDF is loaded and rendered
    canvas.style.display = 'block';
});
