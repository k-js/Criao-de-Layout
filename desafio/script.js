function calcula_media(i){
    var n1 = document.getElementsByName("n1")[i].value;
    var n2 = document.getElementsByName("n2")[i].value;
    var media = document.getElementsByName("media");
    var resultado = document.getElementsByName("resultado");

    var calculo = (parseFloat(n1) + parseFloat(n2)) / 2;

    if(calculo >= 7)
    {
        media[i].innerHTML = "<div class='text-success'>" + calculo + "</div>";
        resultado[i].innerHTML = "<div class='text-success'>Aprovado</div>";
    }
    else
    {
        media[i].innerHTML = "<div class='text-danger'>" + calculo + "</div>";
        resultado[i].innerHTML = "<div class='text-danger'>Reprovado</div>";
    }
}