var stars = document.querySelectorAll(".star")
var emjs = document.querySelectorAll(".emj")


stars[0].addEventListener('click',clicked0);
stars[0].addEventListener('click',remove1);
stars[0].addEventListener('click',remov1);

stars[1].addEventListener('click',clicked1);
stars[1].addEventListener('click',remove2);
stars[1].addEventListener('click',remov2);

stars[2].addEventListener('click',clicked2);
stars[2].addEventListener('click',remove3);
stars[2].addEventListener('click',remov3);

stars[3].addEventListener('click',clicked3);
stars[3].addEventListener('click',remove4);
stars[3].addEventListener('click',remov4);

stars[4].addEventListener('click',clicked4);

function clicked0(){
    stars[0].classList.add("activated")
}

function clicked1(){
    stars[1].classList.add("activated")
    clicked0();
    emjs[1].classList.add("trs1")
    
}

function clicked2(){
    stars[2].classList.add("activated");
    clicked1();clicked0()
    emjs[2].classList.add("trs2")
}

function clicked3(){
    stars[3].classList.add("activated");
    clicked2();clicked1();clicked0();
    emjs[3].classList.add("trs3")
}

function clicked4(){
    stars[4].classList.add("activated")
    clicked3(); clicked2();clicked1();clicked0()
    emjs[4].classList.add("trs4")
}

function remove0(){
    stars[0].classList.remove("activated");remove1();remove2();remove3();remove4()
}
function remove1(){
    stars[1].classList.remove("activated");remove2(); remove3();remove4()
}
function remove2(){
    stars[2].classList.remove("activated"),remove3();remove4()
}
function remove3(){
    stars[3].classList.remove("activated");remove4()
}
function remove4(){
    stars[4].classList.remove("activated")
}

function remov0(){
    emjs[0].classList.add("trs10"); 
    remov4();remov3();remov2();remov1()
}
function remov1(){
    emjs[1].classList.add("trs9");
    remov4();remov3();remov2()
}
function remov2(){
    emjs[2].classList.add("trs8")
    remov4();remov3()
}
function remov3(){
    emjs[3].classList.add("trs7")
    remov4()
}
function remov4(){
    emjs[4].classList.add("trs6")
}