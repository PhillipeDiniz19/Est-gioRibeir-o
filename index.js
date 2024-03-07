/*let indice =13

soma= 0
k= 0

while(k < indice){
    k = k + 1
    soma = soma + k
}

console.log(soma) // == 91

// Questão 02 =>

const inputNumber = 4; 

function isFibonacci(number) {
    let a = 0;
    let b = 1;
    
    while (a <= number) {
        if (a === number) {
            return true;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }

}

if (isFibonacci(inputNumber)) {
    console.log(`${inputNumber} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${inputNumber} não pertence à sequência de Fibonacci.`);
}



// Questão 03 =>

a) 1, 3, 5, 7, 9 Sequência de números ímpares.

b) 2, 4, 8, 16, 32, 64, 128 Sequência de potências de 2.

c) 0, 1, 4, 9, 16, 25, 36, 49 Sequência de quadrados perfeitos.

d) 4, 16, 36, 64, 100 Sequência de quadrados de números pares.

e) 1, 1, 2, 3, 5, 8, 13 Sequência de Fibonacci.

f) 2,10, 12, 16, 17, 18, 19, 20 subtrair cada número do próximo


Questâo 04 =>

Primeiro, acendo apenas dois interruptores e vou para a sala. Se a lâmpada estiver acesa, elimino imediatamente um interruptor, 
caso contrário, já sei qual dos interruptores controla a luz.

Entre esses dois interruptores, deixo um ligado por cerca de 10 minutos e, em seguida, volto para a sala. 
Se a lâmpada estiver quente, saberei qual interruptor é o correto se não estiver, saberei que é o outro interruptor.

// Questão 05 =>

function converterTextoAoContrario(texto) {
    let textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto[i];
    }

    return textoInvertido;
  }
  let fraseOriginal = "Olá, mundo!";
  let fraseInvertida = converterTextoAoContrario(fraseOriginal);
  
  console.log("Texto invertido:", fraseInvertida);
  
  */