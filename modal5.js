//code for the multiple choice questions
var questions5 = new Array();
questions5[0] = 'What famous singer has a total of 20 awards and 53 nominations from the Grammy Awards for her music?';
questions5[1] = 'According to the National Science Foundation, what percent of all college engineering majors are female?';
questions5[2] = 'what percent of practicing engineers are women?';

var choices5 = new Array();
choices5[0] = [' Madonna', 'Beyonce', 'Britney Spears', 'Alicia Keys' ],
choices5[1] = ['18%', '23%', '36%', '52%'],
choices5[2] = ['11%', '20%', '33%' ];

var answers5 = new Array();
answers5[0] = ['Beyonce'],
answers5[1] = ['18%'],
answers5[2] = ['11%'];

var score5 = 0;
i5= 0;

var listQuestion5 = function(){  
    if(i5<questions5.length){
        document.getElementById("myDiv17").innerHTML = '<p>'+questions5[i5]+'</p>';
        var choices5Output=[];//new Array()
        for (var k5=0; k5<choices5[i5].length; k5++){
            choices5Output.push(
                '<p><input type = "radio" name ='
                +' "question5choice">'+choices5[i5][k5]+'</p>');
        }
        document.getElementById("myDiv18").innerHTML =choices5Output.join("");
        document.getElementById("myDiv19").innerHTML = 
            '<p><button onClick = "getRadioValue5()">Check</button></p> <br>';
    }
};
var getRadioValue5 = function(){
    var value5 = '';
    for (var h5 = 0; 
        h5 < document.getElementsByName('question5choice').length; h5++){
        if (document.getElementsByName('question5choice')[h5]
            .checked==true){
            value5 = document.getElementsByName('question5choice')[h5].value5;
            score5++;
        }
    }
    if (value5== answers5[i5]){
        document.getElementById("myDiv20").innerHTML ="That is correct. "
            +"</br><button input type = 'submit' onClick = 'loadContent5()'> N"
            +"ext Question</button>";
    }
    else {
        document.getElementById("myDiv20").innerHTML ="That is incorrect. "
           +"</br><button input type = 'submit' onClick = 'loadContent5()'> N"
           +"ext Question</button>"; 
    }
    i5++;
};
var whatIsScore5 = function(){
    return score5; 
};
function loadContent5(){
    document.getElementById("myDiv20").innerHTML="";
    listQuestion5();
}
window.onload = listQuestion5;

// Get the modal
var modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
var btn5 = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];

// When the user clicks the button, open the modal
btn5.onclick = function() {
    listQuestion5();
    modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
    modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}