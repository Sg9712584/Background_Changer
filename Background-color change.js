const btn_1 = document.getElementById("btn");

const randomColor1 =()=>{
    let val ="0123456789ABCDEF";
    let cons = "#";
    for (let i = 0; i < 6; i++){
        cons = cons + val[Math.floor(Math.random()*15)];
    }
    return cons;
}


function colorRandomChanger(){
    document.body.style.backgroundColor = randomColor1();
    // document.body.style.background = linear-gradient(randomColor1(), randomColor2());
}

btn_1.addEventListener("click",colorRandomChanger);