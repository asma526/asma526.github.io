//code for the multiple choice questions
var questions1 = new Array();
questions1[0] = 'What is the name of a Kenyan actress who won an academy award for Best Actress in a supporting role?';
questions1[1] = 'This is singer-actress who is a prominent, controversial, and an occupier of the entertainment spotlight. She was born in New York and briefly attended N.Y.U. before dropping out to begin her career. This flamboyant performer has won numerous Grammys and more than a dozen MTV Awards. Her 2011 album "Born This Way" sold over eight million copies around the world. Can you name her?',
questions1[2] = 'What actress has been nominated for the Academy Award 19 times, and has won it three times? She is known for her roles in The Devil Wheres Prada and Mama Mia. Who is she?';

var choices1 = new Array();
choices1[0] = ['Lupita Nyongo', 'Jennifer Lawrence', 'George Clooney'],
choices1[1] = ['Cher', 'Lady Gaga', 'Madonna', 'Mickey Mouse'],
choices1[2] = ['Barney', 'Anne Hathaway', 'Meryl Streep', 'Tina Fey'];

var answers1 = new Array();
answers1[0] = ['Lupita Nyongo'],
answers1[1] = ['Lady Gaga'],
answers1[2] = ['Meryl Streep'];

var score1 = 0;
i1= 0;

var listQuestion1 = function(){  
    if(i1<questions1.length){
        document.getElementById("myDiv1").innerHTML = '<p>'+questions1[i1]+'</p>';
        var choices1Output=[];//new Array()
        for (var k1=0; k1<choices1[i1].length; k1++){
            choices1Output.push(
                '<p><input type = "radio" name ='
                +' "question1choice">'+choices1[i1][k1]+'</p>');
        }
        document.getElementById("myDiv2").innerHTML =choices1Output.join("");
        document.getElementById("myDiv3").innerHTML = 
            '<p><button onClick = "getRadioValue1()">Check</button></p> <br>';
    }
};
var getRadioValue1 = function(){
    var value1 = '';
    for (var h1 = 0; 
        h1 < document.getElementsByName('question1choice').length; h1++){
        if (document.getElementsByName('question1choice')[h1]
            .checked==true){
            value1 = document.getElementsByName('question1choice')[h1].value1;
            score1++;
        }
    }
    if (value1== answers1[i1]){
        document.getElementById("myDiv4").innerHTML =
            "That is correct. </br><button input type = "
            +"'submit' onClick = 'loadContent1()'> Next Question</button>";
    }
    else {
        document.getElementById("myDiv4").innerHTML ="Answer: Lupita Nyongo</br><img src=lupita.jpeg>"
           +"</br><button input type = 'submit' onClick = 'loadContent1()'> N"
           +"ext Question</button>"; 
    }
    i1++;
};
var whatIsScore1 = function(){
    return score1; 
};
function loadContent1(){
    document.getElementById("myDiv4").innerHTML="";
    listQuestion1();
}
window.onload = listQuestion1;

//var title1 = document.getElementById("title1").innerHTML="Actresses";

// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    listQuestion1();
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}






// var listQuestion = function(){  
//     if(i<questions.length){
//         document.getElementById("myDiv1").innerHTML = '<p>'+questions[i]+'</p>';
//         var choicesOutput=[];//new Array()
//         for (var k=0; k<choices[i].length; k++){
//             choicesOutput.push(
//                 '<p><input type = "radio" name ='
//                 +' "questionchoice">'+choices[i][k]+'</p>');
//         }
//         document.getElementById("myDiv2").innerHTML =choicesOutput.join("");
//         document.getElementById("myDiv3").innerHTML = 
//             '<p><button onClick = "getRadioValue()">Check</button></p> <br>';
//     }
// };
// var getRadioValue = function(){
//     var value = '';
//     for (var h = 0; 
//         h < document.getElementsByName('questionchoice').length; h++){
//         if (document.getElementsByName('questionchoice')[h]
//             .checked==true){
//             value = document.getElementsByName('questionchoice')[h].value;
//             score++;
//         }
//     }
//     if (value== answers[i]){
//         document.getElementById("myDiv4").innerHTML =
//             "That is correct. </br><button input type = "
//             +"'submit' onClick = 'loadContent()'> Next Question</button>"; 
//     }
//     else {
//         document.getElementById("myDiv4").innerHTML ="Answer: Lupita Nyongo</br><img src=lupita.jpeg>"
//            +"</br><button input type = 'submit' onClick = 'loadContent()'> N"
//            +"ext Question</button>"; 
//     }
//     i++;
// };
// var whatIsScore = function(){
//     return score; 
// };
// function loadContent(){
//     document.getElementById("myDiv4").innerHTML="";
//     listQuestion();
// }
// window.onload = listQuestion;

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn1");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function() {
//     listQuestion();
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }