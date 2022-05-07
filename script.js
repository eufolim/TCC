const q1 = {
    question:"No anime Naruto, o que o personagem Shikamaru admirava e queria ser?",
    a:"uma nuvem",
    b:"o Hokage",
    c:"um renegado",
    d:"um sábio",
    answer:'a',
    nivel:"fácil",
};
const q2 = {
    question:"Qual o verdaddeiro nome de Son Goku?",
    a:"Vegeta",
    b:"Gogeta",
    c:"Kakarotto",
    d:"Goku",
    answer:'c',
    nivel:"fácil",
};
const q3 = {
    question:"O autor de One Piece disse que Luffy pertencia a qual nacionalidade no nosso mundo?",
    a:"Japão",
    b:"Brasil",
    c:"Coreia",
    d:"Alemanha",
    answer:'b',
    nivel:"fácil",
};
const q4 = {
    question:"Qual a data de lançamento de Hunter x Hunter",
    a:"02/10/2011",
    b:"22/11/2011",
    c:"12/10/2011",
    d:"26/10/2011",
    answer:'a',
    nivel:"médio",
};
var n = 0
const Q = [q1,q2,q3,q4];
function test(option) {
    if (option == Q[n].answer) { 
     n++;
    newq();
    };
};
function newq () {
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
