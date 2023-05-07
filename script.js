function gamotvla() {
    var x = document.getElementById ("inp1").value;
    var y = document.getElementById ("inp2").value;
    var mimateba = document.getElementById ("mimateba");
    var gamokleba = document.getElementById ("gamokleba");
    var gamravleba = document.getElementById ("gamravleba");
    var gayopa = document.getElementById ("gayopa");

    if (mimateba.checked) {
        document.getElementById ("pasuxi").innerHTML = Number(x) + Number(y);
    }else if (gamokleba.checked) {
        document.getElementById ("pasuxi").innerHTML = Number(x) - Number(y);
    }else if (gamravleba.checked) {
        document.getElementById ("pasuxi").innerHTML = Number(x) * Number(y);
    }else if (gayopa.checked) {
        document.getElementById ("pasuxi").innerHTML = Number(x) / Number(y);
    }
    document.getElementById ("myform").reset();
    document.getElementById ("myform1").reset();
}