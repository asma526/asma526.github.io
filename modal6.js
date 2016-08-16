//code for the multiple choice questions
var questions6 = new Array();
questions6[0] = 'What woman sold her company to AOL for $315 million?';
questions6[1] = 'What state is home to more self-made women than any other state in the country?';
questions6[2] = 'What prominent entrepreneur, while in high school, completed three college Mandarin courses and sold C compilers to Chinese universities?';

var choices6 = new Array();
choices6[0] = ['Arianna Huffington', 'Oprah Winfrey', 'Sara Blakely'],
choices6[1] = ['New York', 'California', 'Texas', 'Florida'],
choices6[2] = ['Weili Dai', 'Diane Hendricks', 'Elizabeth Holmes', 'Taylor Swift' ];

var answers6 = new Array();
answers6[0] = ['Arianna Huffington'],
answers6[1] = ['California'],
answers6[2] = ['Elizabeth Holmes'];

var score6 = 0
i6= 0;

var listQuestion6 = function(){  
    if(i6<questions6.length){
        document.getElementById("myDiv21").innerHTML = '<p>'+questions6[i6]+'</p>';
        var choices6Output=[];//new Array()
        for (var k6=0; k6<choices6[i6].length; k6++){
            choices6Output.push(
                '<p><input type = "radio" name ='
                +' "question6choice">'+choices6[i6][k6]+'</p>');
        }
        document.getElementById("myDiv22").innerHTML =choices6Output.join("");
        document.getElementById("myDiv23").innerHTML = 
            '<p><button onClick = "getRadioValue6()">Check</button></p> <br>';
    }
};
var getRadioValue6 = function(){
    var value6 = '';
    for (var h6 = 0; 
        h6 < document.getElementsByName('question6choice').length; h6++){
        if (document.getElementsByName('question6choice')[h6]
            .checked==true){
            value6 = document.getElementsByName('question6choice')[h6].value6;
            score6++;
        }
    }
    if (value6== answers6[i6]){
        document.getElementById("myDiv24").innerHTML ="That is correct. "
            +"</br><button input type = 'submit' onClick = 'loadContent6()'> N"
            +"ext Question</button>";
    }
    else {
        document.getElementById("myDiv24").innerHTML ="That is incorrect. "
           +"</br><button input type = 'submit' onClick = 'loadContent6()'> N"
           +"ext Question</button>"; 
    }
    i6++;
};
var whatIsScore6 = function(){
    return score6; 
};
function loadContent6(){
    document.getElementById("myDiv24").innerHTML="";
    listQuestion6();
}
window.onload = listQuestion6;

// Get the modal
var modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
var btn6 = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close6")[0];

// When the user clicks the button, open the modal
btn6.onclick = function() {
    listQuestion6();
    modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span6.onclick = function() {
    modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
}