function wlecome(){
var name = prompt("what is your name")
alert("hey, wlecome in our Shop " + name )
return wlecome;
}



function seaechType(){
var type = prompt("input the type you wont to seaech for it  Him, Her or Baby?")

var numberOfPic =prompt("How many times you wish see it")
 while(numberOfPic>7){
   numberOfPic = prompt("Please enter number less then 7!")

 }

 while(type != "Him" && type != "Her" && type != "Baby") {
   type = prompt(" please  you can only input Him , Her or Baby?")
 }

if(type == "Him"){

  for (var i =0;i<numberOfPic;i++)
{document.write(
  "<div>" + "<h3>" + type+"</h3>"
+ "<img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_vvMxcFgjabeEL-KXLzSdCU5fLPdGdZ2wA&usqp=CAU' width='200' height='200'     />" + "</div>")
}
}

else if (type =="Her"){

  for (var i =0;i<numberOfPic;i++)
{document.write(
  "<div>" + "<h3>" + type+"</h3>"
+ "<img  src='https://blog.grabon.in/wp-content/uploads/2017/01/Featured-image-25-Gift-ideas-for-her.jpg' width='100' height='100'     />" + "</div>")
}
}

else if(type =="Baby"){
  for (var i =0;i<numberOfPic;i++)
{document.write(
  "<div>" + "<h3>" + type+"</h3>"
+ "<img  src='https://images.ctfassets.net/6m9bd13t776q/2NfQZpAV5p8fKPfAH2qQgi/0ce7322e46107dccacbe5feb942ecbaf/fauve-co-newborn-baby-gift-box-750x550.jpg?q=75' width='100' height='100'     />" + "</div>")
}
}
return seaechType;
 }
wlecome();
seaechType();
