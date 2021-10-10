const botao = document.getElementById("btnClique")
const valor = document.querySelector("#value")

botao.addEventListener("click", powSelf)


function powSelf(){
    let list = [];   
    let sum = BigInt(0);
    for (let index = 1; index <= valor.value; index++){
        sum += BigInt(index**index)
        list.push(index**index);               
    }
    
    alert("A soma dos "+ valor.value+" primeiros números elevados a si é: "+ sum)
    alert("A lista dos "+valor.value +" primeiros números elevados a si é: "+"["+list+"]")
    return

}

