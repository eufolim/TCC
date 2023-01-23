// var quest = require("./db_question")
// var connec = require("./db_connection")
/*
const q1 = {
    question:"No anime Naruto, o que o personagem Shikamaru admirava e queria ser?",
    a:"uma nuvem",
    b:"o Hokage",
    c:"um renegado",
    d:"um sábio",
    answer:'a',
    nivel:"fácil",
    background:"url('https://i.quotev.com/myug2ojom3ra.jpg')", 
}; 
const q2 = {
    question:"Qual o verdaddeiro nome de Son Goku?",
    a:"Vegeta",
    b:"Gogeta",
    c:"Kakarotto",
    d:"Goku",
    answer:'c',
    nivel:"fácil",
    background:"url('https://observatoriodocinema.uol.com.br/wp-content/uploads/2018/08/Goku.jpg')",
};
const q3 = {
    question:"O autor de One Piece disse que Luffy pertencia a qual nacionalidade no nosso mundo?",
    a:"Japão",
    b:"Brasil",
    c:"Coreia",
    d:"Alemanha",
    answer:'b',
    nivel:"fácil",
    background:"url('https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc-f:fbcover/wp-content/uploads/2021/11/legiao_kBMPr2iKEs5O.jpg.webp')",
};
const q4 = {
    question:"Qual a data de lançamento de Hunter x Hunter",
    a:"02/10/2011",
    b:"22/11/2011",
    c:"12/10/2011",
    d:"26/10/2011",
    answer:'a',
    nivel:"médio",
    background:"url('https://www.sofilmesgratis.com/wp-content/uploads/2022/01/Hunter-X-Hunter.webp')",
}; 

 const Q = [q1,q2,q3,q4];

function test(option) {
    if (option == Q[n].answer) { 
    //if (option == q.answer) { 
     n++;
     newq();
    };
};

function newq () {
    document.getElementById("mainbody").style.backgroundImage = Q[n].background;
    document.getElementById("question").innerHTML = Q[n].question ;
    document.getElementById("a").innerHTML = Q[n].a ;
    document.getElementById("b").innerHTML = Q[n].b ;
    document.getElementById("c").innerHTML = Q[n].c ;
    document.getElementById("d").innerHTML = Q[n].d ;
    document.getElementById("nivel").innerHTML = Q[n].nivel ;
    if (Q[n].nivel == "fácil") {
        document.getElementById("nivel").style.color = "green" ;
    } else if (Q[n].nivel == "médio") {
        document.getElementById("nivel").style.color = "yellow" ;
    } else {
        document.getElementById("nivel").style.color = "red" ;
    };
}; 
*/

var n = 1;

var score = 0;

var acertos = 0;

var erros = 0;

getq(n)

function getq(n) {
    const question = fetch(`/question/${n}`).then(res=>res.json().then(newq));
}

function newq(Q) {
    //document.querySelector('#mainbox').animate('intro');
    //document.getElementById('mainbox').classList.add('intro');
    //document.querySelector('.outro')?.classList.remove('outro');
    document.querySelector('.correct')?.classList.remove('correct');
    document.querySelector('.wrong')?.classList.remove('wrong');
    document.getElementById("mainbody").style.backgroundImage = Q.backgrond;
    document.getElementById("question").innerHTML = Q.question ;
    document.getElementById("ansA").innerHTML = Q.a ;
    document.getElementById("ansB").innerHTML = Q.b ;
    document.getElementById("ansC").innerHTML = Q.c ;
    document.getElementById("ansD").innerHTML = Q.d ;
    document.getElementById("nivel").innerHTML = Q.nivel ;
    if (Q.nivel == "fácil") {
        document.getElementById("nivel").style.color = "green" ;
    } else if (Q.nivel == "médio") {
        document.getElementById("nivel").style.color = "yellow" ;
    } else if (Q.nivel == "difícil") {
        document.getElementById("nivel").style.color = "red" ;
    } else {
        document.getElementById("nivel").style.color = "white" ;
    };
};

async function test(option) {
    const temp = await fetch(`/question/${n}`);
    const quest = await temp.json();

    if (option == quest.answer) { 
        document.getElementById(quest.answer).classList.add('correct');
        score++;
        acertos++;
        document.getElementById("score").innerHTML = score;
        document.getElementById("acertos").innerHTML = acertos ;
    } else {
        document.getElementById(option).classList.add('wrong');
        document.getElementById(quest.answer).classList.add('correct');
        erros++;
        score--;
        document.getElementById("score").innerHTML = score;
        document.getElementById("erros").innerHTML = erros ;
    }
    await wait(750);
    document.getElementById('mainbox').style.animation = "outro 1s normal forwards";
    document.querySelector('body').style.animation = "intout 1s normal forwards";
    await wait(750);
    n++;
    console.log(n);
    if (n >= 12) {
        location.replace("/home");
    } else {
    getq(n);
    await wait(750);
    document.querySelector('body').style.animation = "introb 1s normal forwards";
    document.getElementById('mainbox').style.animation = "intro 1s normal forwards";
    };
    
};

function wait(t = 1000){
    return new Promise(r=>setTimeout(r, t))
}