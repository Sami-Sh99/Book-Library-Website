<?php
$servername= "mysql.hostinger.com";
$username =  "u349067262_xyz";
$password =  "fZQQZQsEnM9A";
$database =  "u349067262_sami";

$conn = new mysqli($servername, $username, $password);
$a=$_POST['firstname'];
$b=$_POST['lastname'];
$c=$_POST['email'];
$d=$_POST['phone'] ;
$e=$_POST['University'];
$f=$_POST['Faculty'];
$g=$_POST['Education'] ;
$h=$_POST['entertaining'];
$i=$_POST['comment'] ;
echo ($x);
// Check connection 
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
try{
$sql = "INSERT INTO u349067262_sami.data(`firstname`, `lastname`, `email`, `phone`, `University`, `Faculty`, `Education`, `entertaining`, `comment`)
VALUES ('".$a."','".$b."','".$c."',".$d.",'".$e."','".$f."','".$g."','".$h."','".$i."')";
}
catch(Exception $e) {
    echo 'Message: ' .$e->getMessage();
  }
if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);

?>