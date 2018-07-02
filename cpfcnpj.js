"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCPFCNPJValid = function (iDoc) {
    let ret = false;
    let nDoc = "";
    let nDocAux = "";
    let nDigToCmp = "";
    let somatorio;
    let peso;
    let resto;
    let nDig1;
    let nDig2;
    nDoc = onlyNumber(iDoc);
    try {
        if (!isDocValidToCompare(nDoc)) {
            return false;
        }
        //
        if (nDoc.length == 11) {
            //11 = cpf
            nDocAux = nDoc.substr(0, 9);
            nDigToCmp = nDoc.substr(-2);
            //////////////////////////
            //calcula o primeiro digito
            //////////////////////////
            somatorio = 0;
            peso = nDocAux.length + 1;
            for (const chCpf of nDocAux) {
                if (peso < 2)
                    break;
                somatorio += (Number(chCpf) * peso);
                peso--;
            }
            resto = somatorio % 11;
            nDig1 = 11 - resto;
            if (nDig1 < 0) {
                nDig1 = 0;
            }
            //////////////////////////
            //calcula o segundo digito
            //////////////////////////
            nDocAux = nDocAux + String(nDig1);
            somatorio = 0;
            peso = nDocAux.length + 1;
            for (const chCpf of nDoc) {
                if (peso < 2)
                    break;
                somatorio += (Number(chCpf) * peso);
                peso--;
            }
            resto = somatorio % 11;
            nDig2 = 11 - resto;
            if (nDig2 < 0) {
                nDig2 = 0;
            }
            if (nDigToCmp == String(nDig1) + String(nDig2)) {
                return true;
            }
            else
                return false;
        }
        else if (nDoc.length == 14) {
            //14 = cnpj
            nDocAux = nDoc.substr(0, 12);
            nDigToCmp = nDoc.substr(-2);
            //////////////////////////
            //calcula o primeiro digito
            //////////////////////////
            somatorio = 0;
            peso = 2;
            //console.log("doc aux "+nDocAux.length);
            for (let i = nDocAux.length - 1; i >= 0; i--) {
                somatorio += (Number(nDocAux.charAt(i)) * peso);
                peso++;
                if (peso > 9) {
                    peso = 2;
                }
            }
            resto = somatorio % 11;
            nDig1 = 11 - resto;
            if (nDig1 < 0) {
                nDig1 = 0;
            }
            //////////////////////////
            //calcula o segundo digito
            //////////////////////////
            nDocAux = nDocAux + String(nDig1);
            somatorio = 0;
            peso = 2;
            //console.log("doc aux "+nDocAux.length);
            for (let i = nDocAux.length - 1; i >= 0; i--) {
                somatorio += (Number(nDocAux.charAt(i)) * peso);
                peso++;
                if (peso > 9) {
                    peso = 2;
                }
            }
            resto = somatorio % 11;
            nDig2 = 11 - resto;
            if (nDig2 < 0) {
                nDig2 = 0;
            }
            if (nDigToCmp == String(nDig1) + String(nDig2)) {
                ret = true;
            }
        }
    }
    catch (error) {
        ret = false;
    }
    return ret;
};
exports.generateCPFCNPJ = function (iTpDoc, iMask = false) {
    let ret = "";
    let nDoc;
    let nDocAux;
    let somatorio;
    let peso;
    let resto;
    let nDig1;
    let nDig2;
    if (iTpDoc == "CPF") {
        nDocAux = randomNumber(100, 999).toString();
        nDoc = nDocAux;
        ret += nDocAux + String((iMask) ? (".") : (""));
        nDocAux = randomNumber(100, 999).toString();
        nDoc += nDocAux;
        ret += nDocAux + String((iMask) ? (".") : (""));
        nDocAux = randomNumber(100, 999).toString();
        nDoc += nDocAux;
        ret += nDocAux;
        somatorio = 0;
        peso = nDoc.length + 1;
        for (const chCpf of nDoc) {
            if (peso < 2)
                break;
            somatorio += (Number(chCpf) * peso);
            peso--;
        }
        resto = somatorio % 11;
        nDig1 = 11 - resto;
        if (nDig1 < 0) {
            nDig1 = 0;
        }
        //////////////////////////
        //calcula o segundo digito
        //////////////////////////
        nDoc += String(nDig1);
        somatorio = 0;
        peso = nDoc.length + 1;
        for (const chCpf of nDoc) {
            if (peso < 2)
                break;
            somatorio += (Number(chCpf) * peso);
            peso--;
        }
        resto = somatorio % 11;
        nDig2 = 11 - resto;
        if (nDig2 < 0) {
            nDig2 = 0;
        }
        ret += String((iMask) ? ("-") : ("")) + String(nDig1) + String(nDig2);
    }
    else if (iTpDoc == "CNPJ") {
        nDocAux = randomNumber(10, 99).toString();
        nDoc = nDocAux;
        ret += nDocAux + String((iMask) ? (".") : (""));
        nDocAux = randomNumber(100, 999).toString();
        nDoc += nDocAux;
        ret += nDocAux + String((iMask) ? (".") : (""));
        nDocAux = randomNumber(100, 999).toString();
        nDoc += nDocAux;
        ret += nDocAux + String((iMask) ? ("/") : (""));
        nDocAux = "0001";
        nDoc += nDocAux;
        ret += nDocAux;
        somatorio = 0;
        peso = 2;
        //console.log("doc aux "+nDocAux.length);
        for (let i = nDoc.length - 1; i >= 0; i--) {
            somatorio += (Number(nDoc.charAt(i)) * peso);
            peso++;
            if (peso > 9) {
                peso = 2;
            }
        }
        resto = somatorio % 11;
        nDig1 = 11 - resto;
        if (nDig1 < 0) {
            nDig1 = 0;
        }
        //////////////////////////
        //calcula o segundo digito
        //////////////////////////
        nDoc += String(nDig1);
        somatorio = 0;
        peso = 2;
        //console.log("doc aux "+nDocAux.length);
        for (let i = nDoc.length - 1; i >= 0; i--) {
            somatorio += (Number(nDoc.charAt(i)) * peso);
            peso++;
            if (peso > 9) {
                peso = 2;
            }
        }
        resto = somatorio % 11;
        nDig2 = 11 - resto;
        if (nDig2 < 0) {
            nDig2 = 0;
        }
        ret += String((iMask) ? ("-") : ("")) + String(nDig1) + String(nDig2);
    }
    return ret;
};
function randomNumber(min, max) {
    //console.log(Math.random() * 100 + 100);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function onlyNumber(tp) {
    let ret = "";
    ret = tp.replace(/\D+/g, "");
    return ret;
}
function isDocValidToCompare(tp) {
    let numbers = "123456789";
    for (const num of numbers) {
        if (tp.replace(new RegExp(num, "g"), "") == "") {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=cpfcnpj.js.map