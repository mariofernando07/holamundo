
/*
var -> variables globales
let -> variables locales
 var a = [];
 a.push(valor); agregar elemento
 a.pull(); eliminina el ultimo elemento
 a.(indice, #elemento, [objeto]);
 a[*] = valor, remplazar;
 a.sort(); ordena el array
 )

*/
var data = [];

function loadList(e) {
    //alert(e.key + ":" + e.keyCode);
    if (e.keyCode == 13) {
        let lista = document.getElementById("lista");
        let campo = document.getElementById("campo");
        let array = campo.value.split(",");
        if (array.length >= 2) {
            /*
            for(a in array) {
                addLi(lista, array[a]);
            }
            */
            data = data.concat(array);
        } else {
            data.push(campo.value);
        }
        campo.value = "";
        data.sort();
        lista.innerHTML = "";
/*        data.forEach(function (item) {
            addLi(lista, item);
        });
*/
        data.forEach((item)=>addLi(lista,item));            
    }
    
}

function addLi(list, value) {
        list.innerHTML += "<li onclick=clicItem(\"" + value + "\")>" + value + "</li>";
}

function clicItem(txt) {
    alert(txt);

}

/*

OBJETOS JS
var obj = {};
obj.nombre = "mario"; atributos
delete usr = {nombre:"Mario", edad:26, comprar:function(){}}

ESTRUCTURA JSON
[
    {
        "nombre" : "valor",
        "carros" : [...]
    },
    {
        ....
    }
]
*/