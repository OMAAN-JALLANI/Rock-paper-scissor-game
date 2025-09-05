let compscore = document.querySelector(".comp-count");
let userscore = document.querySelector(".user-count");
const RPS = document.querySelectorAll("#choice");
const msg = document.querySelector(".msg");

let compscores = 1;
let userscores = 1;
 
const gameplay = (userchoice) => {
    const comp = computerchoice();
    const user = userchoice;  
    msg.innerText = `You chose ${user} and Computer chose ${comp}.`;  
    if (comp === user) {
        msg.innerText += " Game Draw.";
        msg.style.backgroundColor = "tomato";
    } else {
        let userwin = true;
        if (user === "rock") { 
            userwin = comp === "paper" ? false : true;
        } else if (user === "paper") { 
            userwin = comp === "rock" ? true : false;
        } else if (user === "scissor") { 
            userwin = comp === "paper" ? true : false;
        }
        winner(userwin);
    }
}
const winner = (userwin) => {
    if (userwin) {
        userscore.innerText = userscores++;
        msg.innerText += " You won!";
        msg.style.backgroundColor = "green";
    } else {
        compscore.innerText = compscores++;
        msg.innerText += " You loose!";
        msg.style.backgroundColor = "lightcoral";
    }
}
 
const computerchoice = () => {
    const options = ["rock", "paper", "scissor"];
    let compchoice = Math.floor(Math.random() * 3);
    const compselect = options[compchoice];

    console.log(compselect);  
    return compselect;
}
 
RPS.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userchoice = choices.getAttribute("class");
        gameplay(userchoice);
    });
});
 
function openPage(pageName, elmnt) { 
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
     
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
     
    document.getElementById(pageName).style.display = "block";
     
    elmnt.className += " active";
}


