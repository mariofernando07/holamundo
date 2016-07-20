var data = [];

function testObj() {
    let test = document.getElementById("test");
    var obj = {};
    obj.nombre = "Mario";
    obj.cedula = 1085;
    obj.pastuso = true;
    obj.fechaNacimiento = new Date();
    obj.carros = [
        {
            placa:"auo010", marca:"mazda"            
        },
        {
            placa:"avg734", marca:"ford"
        }
    ]
    delete obj.cedula;
    test.innerHTML = JSON.stringify(obj);
}

function saveUsr() {
    var nombre = document.getElementById("nombre");
    var cedula = document.getElementById("cedula");
    var celular = document.getElementById("celular");    
    var usr = { 
        nombre:nombre.value,
        cedula:cedula.value,
        celular:celular.value
    };
    data.push(usr);
    data.sort(function(a,b) {
        return a.cedula - b.cedula;
    });
    nombre.value = "";
    cedula.value = "";
    celular.value = "";   
    loadList();
}

function loadList() {
    var list = document.getElementById("lista");
    list.innerHTML = "";
    for(i = 0; i < data.length; i++) {
        let usr = data[i];
        list.innerHTML += "<h1>" + usr.nombre + "</h1>"
            + "<p><b>Cedula: </b>" + usr.cedula + "</p>"
            + "<p><b>Celular: </b>" + usr.celular + "</p>"
            + "<button onclick=\"deleteusr(" + i + ")\">Borrar</button>"
            + "<hr>";
    }
}

function deleteusr(pos) {
    data.splice(pos, 1);
    loadList();
}