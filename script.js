// we define answers
let answers = ["Outlook purrfect",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You betcha",
    "As I see it, yes",
    "Pet me", "The great whisker gods tell me yes",
    "*retches up furball on carpet*", "Signs point to yes",
    "Fuck off",
    "Feed me first but probably no",
    "My sources say no",
    "Outlook not so good",
    "Leave me alone",
    "Meow",
    "I'll need a nap before I can answer that",
    "Can't you see I'm trying to ignore you?",
    "I wanna go outside",
    "Concentrate and ask again", "*licks crotch*", "*stares at random point in distance*",
    "F's in chat", "You are guest", "41"];

window.onload = function() {
    let answer = document.getElementById("answer");
    let ask = document.getElementById("ask");
    let question = document.getElementById("question");
    let textfield = document.getElementById("textfield");

    question.addEventListener("submit", function(event) {
        if (textfield.value.length < 1) {
            alert('Enter a question!');
        } else {
            answer.innerText = "";
            let num = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[num];
        }
        event.preventDefault()
    });
};