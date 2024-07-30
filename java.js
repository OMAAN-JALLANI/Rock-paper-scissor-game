

let compscore = document.querySelector(".comp-count")
let userscore = document.querySelector(".user-count");
const RPS  = document.querySelectorAll("#choice");
const  msg = document.querySelector(".msg");

compscores = 1;
userscores = 1;
//gameplay..
const gameplay = (userchoice)=>{
 const  comp = computerchoice();
 const user = userchoice;
//rock..
if(comp===user){
    msg.innerText = "Game Draw  play again"
    msg.style.backgroundColor = "tomato"
}

else{ 
     let userwin = true;
    if(user==="rock"){
        //scissor | paper..
    userwin = comp==="paper"?false:true;
} else if(user==="paper"){
    //rock | scissor..
  userwin = comp==="rock"?true:false;   
}
else if(user==="scissor"){
    //rock | paper..
   userwin =  comp==="paper"?true:false;
}
winner(userwin);
}}

const winner = (userwin)=>{
    if(userwin){
       userscore.innerText = userscores++;
        msg.innerText = "YOU ARE WIN"
        msg.style.backgroundColor = "green"

    }
    else{
       compscore.innerText =  compscores++;
        msg.innerText = "YOU ARE LOSE"
        msg.style.backgroundColor = "red"
    }
}


//computerselect..
 const computerchoice = ()=>{
    const options =["rock","paper","scissor"];
  let compchoice = Math.floor(Math.random()*3)
  const  compselect = options[compchoice];


  return compselect;
}

//userselect..
RPS.forEach((choices)=>{
    choices.addEventListener("click",()=>{
       const userchoice = choices.getAttribute("class")
        gameplay(userchoice); 
    })
})
