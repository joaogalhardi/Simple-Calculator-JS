function calcular(){
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let seletor = document.querySelector("select").value;
  let resultado = document.querySelector("h2");

  switch(seletor){
    case '+':
      calculo = n1 + n2;
      resultado.innerHTML = `${n1} + ${n2} é = ${calculo}`;
      break
    case '-':
      calculo = n1 - n2
      resultado.innerHTML = `${n1} - ${n2} é = ${calculo}`;
      break
    case '*':
      calculo = n1 * n2
      resultado.innerHTML = `${n1} * ${n2} é = ${calculo}`;
      break
    case '/':
      calculo = n1 / n2
      resultado.innerHTML = `${n1} / ${n2} é = ${calculo}`;
         
  }
}