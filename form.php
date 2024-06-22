<!DOCTYPE html>
<html lang="en">
  <head>
    <?php include 'includes/head.php'; ?>
    <meta name="format-detection" content="telephone=no">
    <link rel="stylesheet" href="css/form.css">
    <title>Contact me</title>
  </head>
  <body>

    <?php include 'includes/header.php'; ?>

    <section class="section">
      <div class="toast"></div>
      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span data-phrase-id="Title">CONTACT ME</span>
                  <!-- <span></span> -->
                </div>
                <div class="app-contact">
                  <span data-phrase-id="details">Contact details:</span><br><br>
                  <span>+(994)51 433-98-47</span><br>
                  <span>teymur99@gmail.com</span><br>
                </div>
              </div>
              <div class="screen-body-item">
                <form class="wrapper" id="contact_form" action="/" method="POST">
                  <div class="app-form-group">
                    <input class="app-form-control" type="text" name="name" data-phrase-id="name" placeholder="Name"  maxlength="50" autocomplete="off">
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" type="email" name="email" placeholder="test@gmail.com"  maxlength="50">
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" type="text" name="subject" data-phrase-id="subject" placeholder="Subject" maxlength="50" autocomplete="off">
                  </div>
                  <div class="app-form-group message">
                    <input class="app-form-control" type="text" name="message" data-phrase-id="message" placeholder="Message" autocomplete="off">
                  </div>
                  <div class="app-form-group buttons">
                    <button type="submit" class="app-form-button" disabled><span class="btn-send-text" data-phrase-id="send">Send</span><img class="btn-loading-gif" src="img/loading.gif"></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <script src="js/languative.js" defer></script>
    <script src="lang/main.js" defer></script>
    <script src="lang/form.js" defer></script>
    <script src="js/scripts.js" async></script>
    <script src="js/formvalidation.js" async></script>
    <script src="js/formajax.js" async></script>
  </body>
</html>
