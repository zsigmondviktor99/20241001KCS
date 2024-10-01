//Komment
document.getElementById("felvitel").addEventListener("click", function(){
    var auto = {
        rendszam: document.getElementById("rendszam").value,
        gyarto: document.getElementById("gyarto").value,
        tipus: document.getElementById("tipus").value,
        forgalombahelyezes: document.getElementById("forgalombahelyezes").value
    };

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.appendChild(document.createTextNode(auto.rendszam));
    td2.appendChild(document.createTextNode(auto.gyarto));
    td3.appendChild(document.createTextNode(auto.tipus));
    td4.appendChild(document.createTextNode(auto.forgalombahelyezes));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById("torzs").appendChild(tr);
});