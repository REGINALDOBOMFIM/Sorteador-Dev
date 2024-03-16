function generateNumber(){

    const min = Math.ceil (document.querySelector(".number1").value)
    const max = Math.floor (document.querySelector(".number2").value)
    const numeroSorteado = document.querySelector("h1")


    
    if (min >= max){
        alert("O valor minimo tem que ser MENOR que o valor máximo")
    }

    else{
        const result =  Math.floor(Math.random() * (max - min + 1)) + min;
         
    
       alert(result) 
    }


    
}