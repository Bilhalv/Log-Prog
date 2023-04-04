function processInput() {
    const input = document.getElementById("consoleInput").value;
    let content = "";
    switch (input) {
      case "hello":
        content = "<div id='output'><h1> Hello, World!</h1></div>"
        break;
      case "time":
        content = "<div id='output'><h1>Dia, ano, horário e fuso horário atual</h1><p>" + new Date() + "</p></div>";
        break;
        content = `
        <div id='output'>
          <h1>Calculo do tempo de filme</h1>
          <form>
            <label for="filme">Qual o nome do filme? </label>
            <input type="string" id="filme" name="filme" required>
            <br>
            <label for="min">Quanto tempo tem o filme em minutos? </label>
            <input type="number" id="min" name="min" required>
            <br>
            <button type="button" onclick="filmes()">Calcular</button>
          </form>  
        </div>
        <div id="oo"></div>
        `
        break;
      case "nasc":
        content = `
        <div id='output'>
          <h1>Ficha de aluno</h1>
          <form>
            <label for="nome">Qual o nome do aluno? </label>
            <input type="string" id="nome" name="nome" required>
            <br>
            <label for="ano">Qual seu nome de nascimento? </label>
            <input type="number" id="ano" name="ano" required>
            <br>
            <button type="button" onclick="ficha()">Calcular</button>
          </form>  
        </div>
        <div id="oo"></div>
        `
        break;
      case "produt":
        content = `
        <div id='output'>
          <h1>Ficha de produto</h1>
          <form>
            <label for="prod">Qual o nome do produto? </label>
            <input type="string" id="prod" name="prod" required>
            <br>
            <label for="prc">Qual seu preço? </label>
            <input type="number" id="prc" name="prc" required>
            <br>
            <button type="button" onclick="produto()">Calcular</button>
          </form>  
        </div>
        <div id="oo"></div>
        `
        break;
      case "num":
        content = `
        <div id='output'>
          <h1>Par ou ímpar?</h1>
          <form>
            <label for="nmbr">Número? </label>
            <input type="number" id="nmbr" name="nmbr" required>
            <br>
            <button type="button" onclick="iop()">Calcular</button>
          </form>  
        </div>
        <div id="oo"></div>
        `
        break;
      case "carro":
        content = `
        <div id='output'>
          <h1>Ficha de veículo</h1>
          <form>
            <label for="mod">Qual o modelo? </label>
            <input type="string" id="mod" name="mod" required>
            <br>
            <label for="mrc">Qual sua marca? </label>
            <input type="string" id="mrc" name="mrc" required>
            <br>
            <label for="prc">Qual seu preço? </label>
            <input type="number" id="prc" name="prc" required>
            <br>
            <button type="button" onclick="fiat()">Calcular</button>
          </form>  
        </div>
        <div id="oo"></div>
        `
        break;
      default:
        content = "<h1>Comando desconhecido</h1>";
    }
    document.getElementById("app").innerHTML = content;
}
function promocao() {
    const prod = document.getElementById("prod").value;
    const prç = Number(document.getElementById("prç").value);
    const pop = '<div id="output"><h2>Promoção de '+ prod +'</h2><p>Na compra de 2 unidades de '+ prod +', o total fica R$'+ Math.floor(prç)*2 + ',00.</p></div>';

    document.getElementById("oo").innerHTML = pop;
}
function filmes() {
    const film = document.getElementById("filme").value;
    const min = Number(document.getElementById("min").value);
    const pop = '<div id="output"><h2>Duração do filme</h2><p>O filme '+ film +' tem '+ Math.floor(min/60) + ' horas e ' + min%60 + ' minutos </p></div>';
    
    document.getElementById("oo").innerHTML = pop;
}
function ficha() {
    const nome = document.getElementById("nome").value;

    const ano = Number(document.getElementById("ano").value);

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
    const prod = document.getElementById("prod").value
    const prc = Number(document.getElementById("prc").value)

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
    const nmbr = Number(document.getElementById("nmbr").value)

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
    const mod = document.getElementById("mod").value
    const mrc = document.getElementById("mrc").value
    const prc = Number(document.getElementById("prc").value)

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
