//UNIT tesztek asfasfs
function teszt1(){
    var tesztNev = "Elso DIV container class";

    try{
        var div = document.querySelector("div");

        if(div.classList.contains("container")){
            return [tesztNev, "Sikeres"]
        }
        else{
            return [tesztNev, "Sikertelen"]
        }
    }
    catch{
        return [tesztNev, "HIBA"]
    }
}

function teszt2(){
    var tesztNev = "Elso H1 margo";

    try{
        var h1 = document.querySelector("h1");
        if(h1.classList.contains("my-2")){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function teszt3(){
    var tesztNev = "Elso input text";

    try{
        if(document.querySelector("input").type == "text"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function teszt4(){
    var tesztNev = "Masodik input ID email";

    try{
        if(document.querySelectorAll("input")[1].id == "email"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function teszt5(){
    var tesztNev = "Elso input form-control";

    try{
        if(document.querySelector("input").classList.contains("form-control")){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function teszt6(){
    var tesztNev = "Gomb tipus button";

    try{
        if(document.querySelector("button").type == "button"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function teszt7(){
    var tesztNev = "Option 3db";

    try{
        if(document.querySelectorAll("option").length == 3){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function teszt8(){
    var tesztNev = "Elso label 'Teljes nev'";

    try{
        if(document.querySelector("label").innerHTML == "Teljes nev"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function teszt9(){
    var tesztNev = "Masodik div row";

    try{
        if(document.querySelectorAll("div")[1].classList.contains("row")){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function teszt10(){
    var tesztNev = "Elso H1 text-center";

    try{
        if(document.querySelector("h1").classList.contains("text-center")){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function teszt11(){
    var tesztNev = "Label 3db";

    try{
        if(document.querySelectorAll("label").length == 3){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function teszt12(){
    var tesztNev = "Legordulo munkakor ID";

    try{
        if(document.querySelector("select").id == "munkakor"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function teszt13(){
    var tesztNev = "Masodik option value";

    try{
        if(document.querySelectorAll("option")[1].value == "be"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

//=======================================================
function trKeszito(tomb){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.appendChild(document.createTextNode(tomb[0]));
    td2.appendChild(document.createTextNode(tomb[1]));

    tr.appendChild(td1);
    tr.appendChild(td2);

    document.getElementById("torzs").appendChild(tr);
}

//=========================================================
trKeszito(teszt1());
trKeszito(teszt2());
trKeszito(teszt3());
trKeszito(teszt4());
trKeszito(teszt5());
trKeszito(teszt6());
trKeszito(teszt7());
trKeszito(teszt8());
trKeszito(teszt9());
trKeszito(teszt10());
trKeszito(teszt11());
trKeszito(teszt12());
trKeszito(teszt13());