<?php
    $size = $_POST['size'];
    $recieveMethod = $_POST['recieve_method'];
    $toppings = $_POST['toppings'];
    $boxColor = $_POST['box_color'];
    $callbackPhone = $_POST['callback_phone'];
    $emailAddress = $_POST['email'];
    $pickupTime = $_POST['pickup_time'];
    $extraInstructions = $_POST['extra_instructions'];
        
        
    echo 'SIZE: '.$size . '<br/>';
    echo 'RECIEVE METHOD: '.$recieveMethod;
    echo 'TOPPINGS: '.$toppings;
    echo 'BOX COLOR: '.$boxColor;
    echo 'CALLBACK PHONE NUMBER: '.$callbackPhone;
    echo 'EMAIL ADDRESS: '.$emailAddress;
    echo 'PICKUP TIME: '.$pickupTime;
    echo 'EXTRA INSTRUCTIONS: '.$extraInstructions;
    echo 'AGE: '.$age;
    echo 'NAME: '.$recieveMethod;
    echo 'AGE: '.$age;
    echo 'NAME: '.$recieveMethod;
?>