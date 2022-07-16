
// Código JS

document.getElementById("keyDownTest").addEventListener("keydown", function(e) {
    e.preventDefault();
    console.log(`${e.type} ha sido disparado`);
})

document.getElementById("keyUpTest").addEventListener("keyup",function(e) {
    e.preventDefault();
    console.log(`${e.type} ha sido disparado`);
})
