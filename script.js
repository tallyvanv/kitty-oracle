// we define answers
let answers = ["Outlook purrfect",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely", "The great whisker gods tell me yes",
    "Yes", "Signs point to yes",
    "Fuck off",
    "Feed me first but probably no",
    "My sources say no",
    "Outlook not so good",
    "Leave me alone",
    "Meow",
    "I'll need a nap before I can answer that",
    "Better not tell you now",
    "I wanna go outside",
    "Concentrate and ask again"];

window.onload = function() {
    let answer = document.getElementById("answer");
    let ask = document.getElementById("ask");
    let question = document.getElementById("question");

    ask.addEventListener("click", function() {
        if (question.value.length < 1) {
            alert('Enter a question!');
        } else {
            answer.innerText = "";
            let num = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[num];
        }
    });
};