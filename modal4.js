//code for the multiple choice questions
var questions4 = new Array();
questions4[0] = 'According to the National Science Foundation, what percent of 4th grade girls say they like science and math?';
questions4[1] = 'According to the National Science Foundation, what percent of all college engineering majors are female?';
questions4[2] = 'What percent of practicing engineers are women?';

var choices4 = new Array();
choices4[0] = ['33%', '41%', '54%', '66%' ],
choices4[1] = ['18%', '23%', '36%', '42%'],
choices4[2] = ['11%', '20%', '33%' ];

var answers4 = new Array();
answers4[0] = ['66%'],
answers4[1] = ['18%'],
answers4[2] = ['11%'];

var score4 = 0;
i4= 0;

var listQuestion4 = function(){  
    if(i4<questions4.length){
        document.getElementById("myDiv13").innerHTML = '<p>'+questions4[i4]+'</p>';
        var choices4Output=[];//new Array()
        for (var k4=0; k4<choices4[i4].length; k4++){
            choices4Output.push(
                '<p><input type = "radio" name ='
                +' "question4choice">'+choices4[i4][k4]+'</p>');
        }
        document.getElementById("myDiv14").innerHTML =choices4Output.join("");
        document.getElementById("myDiv15").innerHTML = 
            '<p><button onClick = "getRadioValue4()">Check</button></p> <br>';
    }
};
var getRadioValue4 = function(){
    var value4 = '';
    for (var h4 = 0; 
        h4 < document.getElementsByName('question4choice').length; h4++){
        if (document.getElementsByName('question4choice')[h4]
            .checked==true){
            value4 = document.getElementsByName('question4choice')[h4].value4;
            score4++;
        }
    }
    if (value4== answers4[i4]){
        document.getElementById("myDiv16").innerHTML ="That is correct. "
            +"</br><button input type = 'submit' onClick = 'loadContent4()'> N"
            +"ext Question</button>";
    }
    else {
        document.getElementById("myDiv16").innerHTML ="That is incorrect. "
           +"</br><button input type = 'submit' onClick = 'loadContent4()'> N"
           +"ext Question</button>"; 
    }
    i4++;
};
var whatIsScore4 = function(){
    return score4; 
};
function loadContent4(){
    document.getElementById("myDiv16").innerHTML="";
    listQuestion4();
}
window.onload = listQuestion4;

// Get the modal
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal
btn4.onclick = function() {
    listQuestion4();
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
    modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}