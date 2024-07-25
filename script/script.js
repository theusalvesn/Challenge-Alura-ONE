let texto;

function verificarTexto(texto) {
    const regex = /^[a-z\s]+$/;

    function estaVazia(texto) {
        return !texto.trim();
    }

    function caracteresInvalidos(texto) {
        return !regex.test(texto);
    }

    if (estaVazia(texto)) {
        mostrarPadrao('Nenhuma mensagem encontrada','Digite um texto que você deseja criptografar ou descriptografar' )
        return false;
    } else if (caracteresInvalidos(texto)) {
        mostrarPadrao('Texto com caracteres inválidos.','Lembre-se, use apenas letras minúsculas e sem acento.')
        return false;
    } else {
        return true;
    }
}

function criptografar() {
    
    texto = document.getElementById('inputText').value;

    if (verificarTexto(texto)) {
        texto = texto.replace(/e/g, 'enter')
                    .replace(/i/g, 'imes')
                    .replace(/a/g, 'ai')
                    .replace(/o/g, 'ober')
                    .replace(/u/g, 'ufat');
        mostrarTexto(texto);
        textoGerado = texto;
    }
}

function descriptografar() {
    texto = document.getElementById('inputText').value;

    if (verificarTexto(texto)) {
        texto = texto.replace(/enter/g, 'e')
                    .replace(/imes/g, 'i')
                    .replace(/ai/g, 'a')
                    .replace(/ober/g, 'o')
                    .replace(/ufat/g, 'u');
        mostrarTexto(texto);
    }
}

function mostrarTexto(texto) {
    const outputText = document.getElementById('outputText');
    outputText.innerHTML =`
    <p class="output_text">${texto}</p>
    <img src="">
        <div class="output_box_text">
                <h2 class="output_title"></h2>
                <p class="output_text_alert"></p>
            </div>
            <div class="output_after">
                <p class="output_text"></p>
                <button onClick = "copiarTexto()">Copiar</button>
            </div>`;
}

function mostrarPadrao(titulo, paragrafo) {
    const outputText = document.getElementById('outputText');
    outputText.innerHTML = `
        
        <img src="assets/image_text_not_found_green.png" id="outputImage">
        <div class="output_box_text">
            <h2 class="output_title">${titulo}</h2>
            <p class="output_text_alert">${paragrafo}</p>
        </div>
    `;
}

function copiarTexto(){
    let textoGerado = document.querySelector('.output_text').innerText;
    navigator.clipboard.writeText(textoGerado);
}

