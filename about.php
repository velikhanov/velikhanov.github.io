<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include 'includes/head.php'; ?>
        <meta name="format-detection" content="telephone=no">
        <link rel="stylesheet" href="css/about.css">
        <title>About me</title>
    </head>
    <body>

        <?php include 'includes/header.php'; ?>

        <section class="section">
            <h1 class="title" data-phrase-id="title">About me</h1>
            <div class="main">
                <img class="me" src="img/about/me.jpg" alt="Me">
                <div class="info-block">
                    <div class="about-me-info-item">
                        <p data-phrase-id="aboutMe">
                            I am a 25-year-old web developer with three years of commercial experience in programming.
                            I specialize in Python (Django, DRF, Fast API) and Golang, focusing on building robust backend systems and RESTful APIs.
                            I am proficient in database management with MySQL, PostgreSQL, MongoDB, and Redis.
                        </p>
                    </div>
                    <div class="hr"></div>
                    <div class="education-block">
                        <h3 class="subtitle"><i class="fa-solid fa-graduation-cap"></i> <strong data-phrase-id="education">Education</strong></h3>
                        <div class="mt"></div>
                        <div class="education">
                            <ul>
                                <li data-phrase-id="master">Master - Application Software</li>
                                <a class="link" href="https://unec.edu.az/en/" target="_blank">UNEC</a> | 2020 - 2022
                            </ul>
                            <ul>
                                <li data-phrase-id="bachelor">Bachelor - Computer Engineering</li>
                                <a class="link" href="https://aztu.edu.az/en" target="_blank">AzTU</a> | 2016 - 2020
                            </ul>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <div class="langs-and-contacts">
                        <div class="langs">
                            <h3 class="subtitle"><i class="fa-solid fa-globe"></i> <strong data-phrase-id="languages">Languages</strong></h3>
                            <div class="mt"></div>
                            <ul>
                                <li data-phrase-id="ua">Ukrainian</li>
                                <li data-phrase-id="en">English</li>
                                <li data-phrase-id="ru">Russian</li>
                                <li data-phrase-id="az">Azerbaijani</li>
                                <li data-phrase-id="tr">Turkish</li>
                            </ul>
                        </div>
                        <div class="contacts">
                            <h3 class="subtitle"><i class="fa-solid fa-address-book"></i> <strong data-phrase-id="contacts">Contacts</strong></h3>
                            <div class="mt"></div>
                            <ul>
                                <li><a class="link" href="mailto: teymur99@gmail.com?subject=Contact%20from%20website"><i class="fa-regular fa-envelope"></i> <span>teymur99@gmail.com</span></a></li>
                                <li><a class="link" href="tel: +994514339847"><i class="fa-solid fa-mobile-screen"></i> <span>+(994) 51-433-98-47</span></a></li>
                                <li><a class="link" href="https://www.linkedin.com/in/teymur-velikhanov-6715b420b" target="_blank"><i class="fab fa-linkedin-in"></i> <span>LinkedIn</span></a></li>
                                <li><a class="link" href="https://github.com/velikhanov" target="_blank"><i class="fab fa-github"></i> <span>Github</span></a></li>
                                <li><a class="link" href="/dynamicportfolio.com/form.php"><i class="fa-regular fa-rectangle-list"></i> <span data-phrase-id="contactForm">Contact form</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <div class="download-button-block"><a class="download-button" data-phrase-id="downloadCV" href="img/about/CV_Velikhanov_Teymur.pdf" class="button" download>Download CV</a></div>
                </div>
            </div>
        </section>

        <script src="js/languative.js" defer></script>
        <script src="lang/main.js" defer></script>
        <script src="lang/about.js" defer></script>
        <script src="js/scripts.js" async></script>
    </body>
</html>
