<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include 'includes/head.php'; ?>
        <link rel="stylesheet" href="css/about.css">
        <title>About me</title>
    </head>
    <body>

        <?php include 'includes/header.php'; ?>

        <section class="section">
            <div class="about">
                <h1 data-phrase-id="title">About me</h1>
                <a href="img/about/CV_Velikhanov_Teymur.pdf" class="fa fa-download" download></a>
            </div>
            <div id="loader"></div>
            <canvas id="pdf-viewer"></canvas>
        </section>

        <script src="js/languative.js" defer></script>
        <script src="lang/main.js" defer></script>
        <script src="lang/about.js" defer></script>
        <script src="js/pdf.min.js" defer></script>
        <script src="js/pdf.settings.js" defer></script>
        <script src="js/scripts.js" async></script>
    </body>
</html>
