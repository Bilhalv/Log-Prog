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
          label2: 'Qual seu ano de nascimento?',
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
          label2: 'Qual o preço?',
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
    case "peso":
      const datapeso = [
        {
          title: 'Peso ideal',
          label1: 'Qual seu nome?',
          label2: 'Qual seu gênero biologico?(M/F)',
          label3: 'Qual sua altura em metros?',
          inputType1: 'string',
          inputType2: 'string',
          inputType3: 'number',
          buttonLabel: 'Calcular',
          functionCall: 'peso()'
        }
      ]

      const inputs5 = datapeso.map((item) => {
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
            ${inputs5}
          </div>
          <div id="oo"></div>
      `;
      break;
    case "raiz":
      const dataraiz = [
        {
          title: 'Verificação de raiz',
          label1: 'Qual o número?',
          inputType1: 'number',
          buttonLabel: 'Calcular',
          functionCall: 'raiz()'
        }
      ]

      const inputs6 = dataraiz.map((item) => {
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
            ${inputs6}
          </div>
          <div id="oo"></div>
      `;
    break;
    case "tri":
      const datatri = [
        {
          title: 'Verificação de triângulo',
          label1: 'Lado A:',
          label2: 'Lado B:',
          label3: 'Lado C:',
          inputType1: 'number',
          inputType2: 'number',
          inputType3: 'number',
          buttonLabel: 'Calcular',
          functionCall: 'tri()'
        }
      ]

      const inputs7 = datatri.map((item) => {
        return `
        <h1>${item.title}</h1>
        <form>
        <label for="input">${item.label1}</label>
          <input type="${item.inputType1}" id="input1" name="input1" required>
          <br>
        <label for="input">${item.label2}</label>
          <input type="${item.inputType2}" id="input2" name="input2" required>
          <br>
        <label for="input">${item.label3}</label>
          <input type="${item.inputType3}" id="input3" name="input3" required>
          <br>
          <button type="button" onclick="${item.functionCall}">${item.buttonLabel}</button>
        </form>
          `;
      }).join('');

      content = `
          <div id='output'>
            ${inputs7}
          </div>
          <div id="oo"></div>
      `;
    break;
    case "fuso":
      const datafuso = [
        {
          title: 'Calculo de fuso horario',
          label1: 'Horario no Brasil:',
          inputType1: 'number',
          buttonLabel: 'Calcular',
          functionCall: 'fuso()'
        }
      ]

      const inputs8 = datafuso.map((item) => {
        return `
        <h1>${item.title}</h1>
        <form>
        <label for="input">${item.label1}</label>
          <input type="${item.inputType1}" id="input1" name="input1" required>
          <br>
          <select id="input2">
            <option value=""> Local </option>
            <option value="cad">Canadá</option>
            <option value="fra">França</option>
          </select>
          <br>
          <button type="button" onclick="${item.functionCall}">${item.buttonLabel}</button>
        </form>
          `;
      }).join('');

      content = `
          <div id='output'>
            ${inputs8}
          </div>
          <div id="oo"></div>
      `;
    break;
    case "saque":
      const datasaque = [
        {
          title: 'Calculo de quantidade em saque',
          label1: 'Valor do saque:R$',
          inputType1: 'number',
          buttonLabel: 'Calcular',
          functionCall: 'saque()'
        }
      ]

      const inputs9 = datasaque.map((item) => {
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
            ${inputs9}
          </div>
          <div id="oo"></div>
      `;
    break;
    case "par":
      const datapar = [
        {
          title: 'Calculo de numero par mais próximo',
          label1: 'Numero:',
          inputType1: 'number',
          buttonLabel: 'Calcular',
          functionCall: 'par()'
        }
      ]

      const inputs10 = datapar.map((item) => {
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
            ${inputs10}
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
function peso() {
    const nom = document.getElementById("input1").value
    const gen = document.getElementById("input2").value
    const alt = Number(document.getElementById("input3").value)
    let pes

    switch (gen) {
      case "F":
      case "f":
        pes = Math.round((62.1*alt)-44.7)
      break
      case "M":
      case "m":
        pes = Math.round((72.7*alt)-58)
      break
    }
    const hdr = '<h2>Calculo do peso ideal</h2>'
    const result = '<div id="output">'+ hdr +'<p>' + nom + ', seu peso ideal é '+ pes +'</p></div>'

    document.getElementById("oo").innerHTML = result;
}
function raiz() {
  const num = Number(document.getElementById("input1").value)
  const sqrt = Math.sqrt(num)
  let res = " "

  if ((Math.round(sqrt)) != (sqrt)) {
    res = num + " não possui raiz exata";
  } else {
    res = num + " possui raiz exata";
  }
  const hdr = '<h2>Resultado da verificação</h2>'
  const result = '<div id="output">'+ hdr +'<p>' + res + '</p></div>'

  document.getElementById("oo").innerHTML = result;
}
function tri() {
  const ld1 = Number(document.getElementById("input1").value)
  const ld2 = Number(document.getElementById("input2").value)
  const ld3 = Number(document.getElementById("input3").value)
  let res = " "
  let tip

  if ((ld1+ld2) >= ld3 && (ld2+ld3) >= ld1 && (ld1+ld3) >= ld2) {
      res = "Os lados podem formar um triângulo."
      if (ld1 == ld2 && ld2 == ld3){
        tip = "<br>Seu tipo é equilátero"
      }
      else if (ld1 == ld2 || ld1 == ld3 || ld2 == ld3){
        tip = "<br>Seu tipo é isóceles"
      }
      else{
        tip = "<br>Seu tipo é escalen."
      }
      res = res+tip
  } else {
    res = "Os lados não podem formar um triângulo";
  }
  
  const hdr = '<h2>Resultado da verificação</h2>'
  const result = '<div id="output">'+ hdr +'<p>' + res + '.</p></div>'

  document.getElementById("oo").innerHTML = result;
}
function fuso() {
  let hrtd = Number(document.getElementById("input1").value)
  let lgr = document.getElementById("input2").value
  
  if (lgr === "cad"){
    hrtd = hrtd-1
    lgr = "no Canadá"
  } else if (lgr === "fra"){
    hrtd = hrtd+5
    lgr = "na França"
  }

  //Arrumando pro formato de 24h
  if (hrtd > 24) {
    hrtd = hrtd-24
  }

  //Separação de tarde, manha e noite
  let cat
  
  if (hrtd > 12 && hrtd < 18) {
    cat = "h da tarde"
  } else if (hrtd < 12){
    cat = "h da manhã"
  } else {
    cat = "h da noite"
  }

  hrtd = hrtd + cat

  const hdr = '<h2>Resultado do fuso horário</h2>'
  const result = '<div id="output">'+ hdr +'<p>Atualmente '+ lgr + ' é ' + hrtd + '.</p></div>'

  document.getElementById("oo").innerHTML = result;
}
function saque() {
  let saq = Number(document.getElementById("input1").value)
  let fim

  if ( saq > 10 && saq%5 == 0){
    fim = `Serão necessárias ${Math.floor(saq / 10)} notas de 10 reais`
    if (saq%10 == 5){
      fim = fim + ` e uma nota de 5 reais`
    }
    fim = fim + ` para sacar o valor de R$${saq}`
  }
  else if ( saq == 10){
    fim = `Será necessário uma nota de 10 reais para sacar 10 reais`
  }
  else{
    fim = `Não é possivel sacar R$${saq} com as notas disponiveis`
  }

  const hdr = '<h2>Quantidade de notas</h2>'
  const result = '<div id="output">'+ hdr +'<p>'+ fim + '.</p></div>'

  document.getElementById("oo").innerHTML = result;
}
function par() {
  let num = Number(document.getElementById("input1").value)
  let num2

  if (num%2 != 0){
    if ((Math.ceil(num))%2 == 0){
      num2 = Math.ceil(num)
    } else {
      num2 = num+1
    }
  } else{
    num2 = num
  }

  const hdr = '<h2>Quantidade de notas</h2>'
  const result = '<div id="output">'+ hdr +'<p>O próximo numero par é '+ num2 + '.</p></div>'

  document.getElementById("oo").innerHTML = result;
}
