<?php
 
if(isset($_POST['email'])) {
 
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "cbarnett427@live.com";
 
    $email_subject = "claytonbarnett.com - Contact Form Submission";
 
     
 
     
 
    function died($error) {
 
        // Error Code
      
        // Embedded HTML Page
        echo '
        <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Clayton Barnett | Whoops...</title>
          <!-- ========== Internal Links ========== -->
          <link rel="stylesheet" type="text/css" href="css/thankyou.css" media="screen"/>
        </head>
        <style>
          .main_content_exclamation {
            font-size: 4.375rem;
            line-height: 1;
            color: #eed202;
          }
          @media only screen and (min-width: 40em) {
            .main_content_exclamation {
              font-size: 9.75rem;
            }
          }
        </style>
        <body>
        
          <header class="site_header" id="header">
            <i class="fa fa-exclamation main_content_exclamation" id="checkmark"></i>
            <h1 class="site_header_title">Whoops...</h1>
          </header>
        
          <div class="main_content">
            <p>Your submission was not received, please resubmit the form.</p>
          </div>
          <br>
        </body>
        </html>';
 
        echo "<strong><p>The following items are not specified correctly:</p></strong>";
 
        echo $error."";
        // Embedded HTML Page Footer
        echo '
        <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <!-- ========== Internal Links ========== -->
          <link rel="stylesheet" href="css\thankyou.css">
        </head>
        <style>
          .site_footer {
            margin: 0 auto;
              padding: 30px 0 25px;
            max-width: 820px;
          }
        </style>
        <body>
          <footer class="site_footer" id="footer">
          <a href="https://claytonbarnett.com" class="btn"><i class="fa-solid fa-arrow-left"></i> Go Back</a>
          </footer>
        </body>
        </html>';
        die();
    }
  
 
    $full_name = $_POST['full_name']; // Required
    $email_from = $_POST['email']; // Required
    $comments = $_POST['comments']; // Required


    $error_message = ""; // Displays error messages
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= '<p>• The completed e-mail address appears to be incorrect<p>';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$full_name)) {
    $error_message .= '<p>• Full name appears to be wrong</p>';
  }
 
  if(strlen($comments) < 2) {
    $error_message .= '<p>• Message appears to be incorrect</p>';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    // Email Layout

    $email_message = "Form details are given below.\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
    $email_message .= "Full Name: ".clean_string($full_name)."\n";
    $email_message .= "Email Address: ".clean_string($email_from)."\n";
    $email_message .= "Message: ".clean_string($comments)."\n";
      
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 

 
<!-- Successful Submission Embedded HTML Page -->
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Clayton Barnett | Thank You!</title>
  <!-- ========== Internal Links ========== -->
	<link rel="stylesheet" href="css\thankyou.css">
</head>
<body>
	<header class="site_header" id="header">
    <i class="fa fa-check main_content_checkmark" id="checkmark"></i>
    <h1 class="site_header_title">Thank You!</h1>
	</header>

	<div class="main_content">
		<p>Your submission has been received and I will contact you soon.</p>
    <p>This page will redirect in <span id="timer"></span>s.</p>
	</div>

  <script type="text/javascript">
    var count = 10;
    var redirect = "https://claytonbarnett.com";
    function countDown() {
    if(count >= 0){
      document.getElementById("timer").innerHTML = count--;
      setTimeout("countDown()", 1000);
    }else{
      window.location.href = redirect;
    }
    }
    countDown();
  </script>
</body>
</html>
 
 
<?php
 
}
 
?>