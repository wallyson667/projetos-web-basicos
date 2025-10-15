let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

// Linha feito para verficar quando os procedinentos da pagina estão seguindo o seu proposito
function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor invalido ou já encontrado na lista");
  }
  //Para não precisar apagar ao digitar um numero
  num.value = "";
  num.focus();
}

// Linha feita para acrescenter coisas ao meu finalziar no HTML
function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione um valor");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }
    media = soma / tot;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados</p>`;
    res.innerHTML += `<p>O menor valor encontrado foi o ${menor} </p>`;
    res.innerHTML += `<p>O maior valor encontrado foi ${maior} </p>`;
    res.innerHTML += `<p>Somando todos os valores temos ${soma} </p>`;
    res.innerHTML += `<p>A media dos valores ditados é ${media} </p>`;
  }
}
