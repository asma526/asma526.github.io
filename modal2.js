var questions2 = new Array();
questions2[0] = 'What woman was the first elected female head of state in Africa?';
questions2[1] = 'What woman survived an attempted coup détat in 1995 and earned the nickname "Iron Lady" because of her tough rhetorical opposition to her domestic political rivals?',
questions2[2] = 'What woman, in the United States, became the first female candidate to be nominated for president by a major U.S. political party?';

var choices2 = new Array();
choices2[0] = ['Angela Merkel', 'Ellen Johnson Sirleaf', 'Benazir Bhutto'],
choices2[1] = ['Nusrat Bhutto', 'Benazir Bhutto', 'Asifa Bhutto'],
choices2[2] = ['Hillary Clinton', 'Mellie Grant', 'Claire Hale Underwood'];

var answers2 = new Array();
answers2[0] = ['Ellen Johnson Sirleaf'],
answers2[1] = ['Benazir Bhutto'],
answers2[2] = ['Hillary Clinton'];

var score2 = 0;
i2= 0;

var listQuestion2 = function(){  
    if(i2<questions2.length){
        document.getElementById("myDiv5").innerHTML = '<p>'+questions2[i2]+'</p>';
        var choices2Output=[];//new Array()
        for (var k2=0; k2<choices2[i2].length; k2++){
            choices2Output.push(
                '<p><input type = "radio" name ='
                +' "question2choice">'+choices2[i2][k2]+'</p>');
        }
        document.getElementById("myDiv6").innerHTML =choices2Output.join("");
        document.getElementById("myDiv7").innerHTML = 
            '<p><button onClick = "getRadioValue2()">Check</button></p> <br>';
    }
};
var getRadioValue2 = function(){
    var value2 = '';
    for (var h2 = 0; 
        h2 < document.getElementsByName('question2choice').length; h2++){
        if (document.getElementsByName('question2choice')[h2]
            .checked==true){
            value2 = document.getElementsByName('question2choice')[h2].value2;
            score2++;
        }
    }
    if (value2== answers2[i2]){
        document.getElementById("myDiv8").innerHTML =
            "That is correct. </br><button input type = "
            +"'submit' onClick = 'loadContent2()'> Next Question</button>";
    }
    else {
        document.getElementById("myDiv8").innerHTML ="That is incorrect. "
           +"</br><button input type = 'submit' onClick = 'loadContent2()'> N"
           +"ext Question</button>"; 
    }
    i2++;
};
var whatIsScore2 = function(){
    return score2; 
};
function loadContent2(){
    document.getElementById("myDiv8").innerHTML="";
    listQuestion2();
}
window.onload = listQuestion2;

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
    listQuestion2();
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}