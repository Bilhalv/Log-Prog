function processInput() {
  const input = document.getElementById("consoleInput").value;
  let content = "";
  switch (input) {
    case "hello":
      content = "<div id='output'><h1> Hello, World!</h1></div>";
      break;
    case "time":
      content = "<div id='output'><h1>Dia, ano, horário e fuso horário atual</h1><p>" + new Date() + "</p></div>";
      break;
    case "nasc":
      const dataNasc = [
        {
          title: 'Ficha de aluno',
          label1: 'Qual o nome do aluno?',
          label2: 'Qual seu nome de nascimento?',
          inputType1: 'string',
          inputType2: 'number',
          buttonLabel: 'Calcular',
          functionCall: 'ficha()'
        }
      ];

      const inputs1 = dataNasc.map((item) => {
        return `
        <h1>${item.title}</h1>
        <form>
        <label for="input">${item.label1}</label>
          <input type="${item.inputType1}" id="input1" name="input1" required>
          <br>
          <label for="input2">${item.label2}</label>
          <input type="${item.inputType2}" id="input2" name="input2" required>
          <br>
          <button type="button" onclick="${item.functionCall}">${item.buttonLabel}</button>
        </form>
          `;
      }).join('');

      content = `
          <div id='output'>
            ${inputs1}
          </div>
          <div id="oo"></div>
      `;
      break;
    case "produt": 
      const dataProdut = [
        {
          title: 'Ficha de produto',
          label1: 'Qual o nome do produto?',
          label2: 'Qual seu preço?',
          inputType1: 'string',
          inputType2: 'number',
          buttonLabel: 'Calcular',
          functionCall: 'produto()'
        }
      ]

      const inputs2 = dataProdut.map((item) => {
        return `
        <h1>${item.title}</h1>
        <form>
        <label for="input">${item.label1}</label>
          <input type="${item.inputType1}" id="input1" name="input1" required>
          <br>
          <label for="input2">${item.label2}</label>
          <input type="${item.inputType2}" id="input2" name="input2" required>
          <br>
          <button type="button" onclick="${item.functionCall}">${item.buttonLabel}</button>
        </form>
          `;
      }).join('');

      content = `
          <div id='output'>
            ${inputs2}
          </div>
          <div id="oo"></div>
      `;
    break;
    case "num":
      const dataNum = [
        {
          title: 'Par ou ímpar?',
          label1: 'Número?',
          inputType1: 'number',
          buttonLabel: 'Calcular',
          functionCall: 'iop()'
        },
      ]

      const inputs3 = dataNum.map((item) => {
        return `
        <h1>${item.title}</h1>
        <form>
        <label for="input">${item.label1}</label>
          <input type="${item.inputType1}" id="input1" name="input1" required>
          <br>
          <button type="button" onclick="${item.functionCall}">${item.buttonLabel}</button>
        </form>
          `;
      }).join('');

      content = `
          <div id='output'>
            ${inputs3}
          </div>
          <div id="oo"></div>
      `;
    break;
    case "carro":
      const dataCarro = [
        {
          title: 'Ficha de veículo',
          label1: 'Qual o modelo?',
          label2: 'Qual sua marca?',
          label3: 'Qual seu preço?',
          inputType1: 'string',
          inputType2: 'string',
          inputType3: 'number',
          buttonLabel: 'Calcular',
          functionCall: 'fiat()'
        }
      ]

      const inputs4 = dataCarro.map((item) => {
        return `
        <h1>${item.title}</h1>
        <form>
        <label for="input">${item.label1}</label>
          <input type="${item.inputType1}" id="input1" name="input1" required>
          <br>
          <label for="input2">${item.label2}</label>
          <input type="${item.inputType2}" id="input2" name="input2" required>
          <br>
          <label for="input3">${item.label3}</label>
          <input type="${item.inputType3}" id="input3" name="input3" required>
          <br>
          <button type="button" onclick="${item.functionCall}">${item.buttonLabel}</button>
        </form>
          `;
      }).join('');

      content = `
          <div id='output'>
            ${inputs4}
          </div>
          <div id="oo"></div>
      `;
    break;
    default:
      content = "<h1>Comando desconhecido</h1>";
    }
    document.getElementById("app").innerHTML = content;
}
function ficha() {
    const nome = document.getElementById("input1").value;

    const ano = Number(document.getElementById("input2").value);

    if ((2023-ano) >= 18) {
      const hdr = '<h2>Ficha do aluno</h2>'
      const ficha1 = '<p>Nome do Aluno: ' + nome + '</p><p>Ano de nascimento: ' + ano + '</p><p>Idade: ' + (2023-ano) + '</p>'
      const ficha2 = '<p>' + nome + ', você é maior de idade'
      const fim = '<div id="output">' + hdr + ficha1 + ficha2 + '</div>'

      document.getElementById("oo").innerHTML = fim;
    } else{
      const hdr = '<h2>Ficha do aluno</h2>'
      const ficha1 = '<p>Nome do Aluno: ' + nome + '</p><p>Ano de nascimento: ' + ano + '</p><p>Idade: ' + (2023-ano) + '</p>'
      const ficha2 = '<p>' + nome + ', você é menor de idade'
      const fim = '<div id="output">' + hdr + ficha1 + ficha2 + '</div>'

      document.getElementById("oo").innerHTML = fim;
    }
}
function produto() {
    const prod = document.getElementById("input1").value
    const prc = Number(document.getElementById("input2").value)

    if (prc < 100) {
      const hdr = '<h2>Preço</h2>'
      const prod1 = '<div id="output">'+ hdr +'<p>Produto: ' + prod + '</p><p>Preço: R$' + prc + '</p></div>'

      document.getElementById("oo").innerHTML = prod1;
    } else {
      const hdr = '<h2>Promoção!!</h2>'
      const prod1 = '<div id="output">'+ hdr +'<p>Produto: ' + prod + '</p><p>Preço: R$' + prc + '</p><p>Pode pagar em 3x de R$' + (Math.round(prc/3)) + '</p></div>'

      document.getElementById("oo").innerHTML = prod1;
    }
}
function iop() {
    const nmbr = Number(document.getElementById("input1").value)

    if ((nmbr%2) === 0) {
      const hdr = '<h2>Resultado!!</h2>'
      const prod1 = '<div id="output">'+ hdr +'<p>O número ' + nmbr + ' é par!</p></div>'

      document.getElementById("oo").innerHTML = prod1;
    } else {
      const hdr = '<h2>Resultado!!</h2>'
      const prod1 = '<div id="output">'+ hdr +'<p>O número ' + nmbr + ' é ímpar!</p></div>'

      document.getElementById("oo").innerHTML = prod1;
    }
}
function fiat() {
    const mod = document.getElementById("input1").value
    const mrc = document.getElementById("input2").value
    const prc = Number(document.getElementById("input3").value)

    if (mrc === "fiat"||mrc === "Fiat") {
      const hdr = '<h2>Promoção especial!!</h2>'
      const prod1 = '<div id="output">'+ hdr +'<p>Modelo: ' + mod + '</p><p>Marca: '+ mrc +'</p><p>Preço: R$' + prc + '</p><p>Desconto: R$'+ Math.floor((prc*0.1)) +'</p><p>Preço à vista: R$'+ Math.floor((prc-(prc*0.1))) +'</p></div>'

      document.getElementById("oo").innerHTML = prod1;
    } else {
      const hdr = '<h2>Promoção!!</h2>'
      const prod1 = '<div id="output">'+ hdr +'<p>Modelo: ' + mod + '</p><p>Marca: '+ mrc +'</p><p>Preço: R$' + prc + '</p><p>Desconto: R$'+ Math.floor((prc*0.2)) +'</p><p>Preço à vista: R$'+ Math.floor((prc-(prc*0.2))) +'</p></div>'

      document.getElementById("oo").innerHTML = prod1;
    }
}
