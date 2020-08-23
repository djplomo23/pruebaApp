const btn = document.querySelector('.btn');
let btnBg = document.querySelector('#btn-bg-color');
let fondoColor = document.querySelector('#fondo-color');
let sombraBtnInferior = document.querySelector('#sombra-btn-inferior');
let colorIcon = document.querySelector('#color-icon');
let root = document.documentElement;

    

btn.addEventListener('.btn', function () {
    
    root.style.setProperty('--btn-bg-color', btnBg)

});

btnBg.addEventListener('input', function () {
    console.log("hola");
    cambiarColorBtn ();
});

colorIcon.addEventListener('input', function () {
    console.log("hola");
    cambiarColorIcon ();
});

sombraBtnInferior.addEventListener('input', function () {
    console.log("hola");
    cambiarSombraBtnInferior ();
});

fondoColor.addEventListener('input', function () {
    console.log("hola");
    cambiarFondo ();
});



function cambiarSombraBtnInferior () {
    let color = document.getElementById('sombra-btn-inferior').value;
    root.style.setProperty('--sombra-btn-inferior', color)
};

function cambiarColorBtn () {
    let color = document.getElementById('btn-bg-color').value;
    root.style.setProperty('--btn-bg-color', color)
};

function cambiarColorIcon () {
    let color = document.getElementById('color-icon').value;
    root.style.setProperty('--color-icon', color)
};

function cambiarFondo () {
    let color = document.getElementById('fondo-color').value;
    root.style.setProperty('--fondo-color', color)
};