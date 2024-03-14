let mensagem = "Parabéns! Você passou para a próxima fase. Para continuar, acesse: ";

// Link embaralhado
let linkEmbaralhado = "donptc.oaqmus/tqeefuisnnao";

// Função para decifrar o link
function decifrarLink(link) {
    let linkDecifrado = "";
    for (let i = 0; i < link.length; i++) {
        switch(link[i]) {
            case 'a':
                linkDecifrado += 'c';
                break;
            case 'b':
                linkDecifrado += 'o';
                break;
            case 'c':
                linkDecifrado += 'm';
                break;
            case 'd':
                linkDecifrado += 'd';
                break;
            case 'e':
                linkDecifrado += 'n';
                break;
            case 'f':
                linkDecifrado += 'p';
                break;
            case 'g':
                linkDecifrado += '.';
                break;
            case 'h':
                linkDecifrado += '/';
                break;
            case 'i':
                linkDecifrado += 'q';
                break;
            case 'j':
                linkDecifrado += 's';
                break;
            case 'k':
                linkDecifrado += 'u';
                break;
            case 'l':
                linkDecifrado += 't';
                break;
            case 'm':
                linkDecifrado += 'a';
                break;
            case 'n':
                linkDecifrado += 'e';
                break;
            case 'o':
                linkDecifrado += 'i';
                break;
            case 'p':
                linkDecifrado += 'r';
                break;
            case 'q':
                linkDecifrado += 'f';
                break;
            case 'r':
                linkDecifrado += 'l';
                break;
            case 's':
                linkDecifrado += 'v';
                break;
            case 't':
                linkDecifrado += 'o';
                break;
            case 'u':
                linkDecifrado += '.';
                break;
            default:
                linkDecifrado += link[i];
        }
    }
    return linkDecifrado;
}

// Decifrando o link
let linkDecifrado = decifrarLink(linkEmbaralhado);

// Exibindo a mensagem e o link decifrado
console.log(mensagem + linkDecifrado);
