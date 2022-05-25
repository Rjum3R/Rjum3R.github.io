function namech()
{
    if (confirm('Ну да, надо сменить')){
        var namecity = prompt('Введите новое:','');
    }
    alert("Меняем...")

    document.getElementById("name").innerHTML = namecity;
}
function blin()
{
    
    alert("Обманул(")
    
    document.getElementById("color2").style.background ="purple";
    
}
function rate()
{
    
    alert("Ну если можно, то 35 хватит")
}
function cool()
{
    var ava = document.getElementById('photo');
    ava.setAttribute('src','you.jpg');
}