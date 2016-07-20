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

function savaUsr() {
    let nombre = Document.getElementById("nombre");
    let cedula = Document.getElementById("cedula");
    let celular = Document.getElementById("celular");    
    let usr = { 
        nombre:nombre.value,
        cedula:cedula.value,
        celular:celular.value
    }
    data.push(usr);
}