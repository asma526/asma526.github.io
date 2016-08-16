//code for the multiple choice questions
var questions3 = new Array();
questions3[0] = 'The majority of social media users are_____';
questions3[1] = 'Even among the top-grossing G-rated family films, girl characters are out numbered by boys three-to-_____?',
questions3[2] = 'Female characters are more than _____ as likely to be either partially or fully naked.';

var choices3 = new Array();
choices3[0] = ['women', 'men', 'non-binary people'],
choices3[1] = ['none', 'one', 'two', 'three'],
choices3[2] = ['twice', 'three times', 'four times', 'five times'];

var answers3 = new Array();
answers3[0] = ['women']
answers3[1] = ['one'],
answers3[2] = ['twice'];

var score3 = 0;
i3= 0;

var listQuestion3 = function(){  
    if(i3<questions3.length){
        document.getElementById("myDiv9").innerHTML = '<p>'+questions3[i3]+'</p>';
        var choices3Output=[];//new Array()
        for (var k3=0; k3<choices3[i3].length; k3++){
            choices3Output.push(
                '<p><input type = "radio" name ='
                +' "question3choice">'+choices3[i3][k3]+'</p>');
        }
        document.getElementById("myDiv10").innerHTML =choices3Output.join("");
        document.getElementById("myDiv11").innerHTML = 
            '<p><button onClick = "getRadioValue3()">Check</button></p> <br>';
    }
};
var getRadioValue3 = function(){
    var value3 = '';
    for (var h3 = 0; 
        h3 < document.getElementsByName('question3choice').length; h3++){
        if (document.getElementsByName('question3choice')[h3]
            .checked==true){
            value3 = document.getElementsByName('question3choice')[h3].value3;
            score3++;
        }
    }
    if (value3== answers3[i3]){
        document.getElementById("myDiv12").innerHTML =
            "That is correct. </br><button input type = "
            +"'submit' onClick = 'loadContent3()'> Next Question</button>";
    }
    else {
        document.getElementById("myDiv12").innerHTML ="That is incorrect. "
           +"</br><button input type = 'submit' onClick = 'loadContent3()'> N"
           +"ext Question</button>"; 
    }
    i3++;
};
var whatIsScore3 = function(){
    return score3; 
};
function loadContent3(){
    document.getElementById("myDiv12").innerHTML="";
    listQuestion3();
}
window.onload = listQuestion3;

// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal
btn3.onclick = function() {
    listQuestion3();
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}