# node-cpfcnpj-validator
Funções para auxiliar na utilização de CPF ou CNPJ em typescript.

## Sobre
Os métodos aqui desenvolvidos tem como objetivo auxiliar na validação de números de documentos, seja CPF ou CNPJ, e também efetuar a geração de documentos válidos.

## Pre-requisitos
Importe o novo arquivo criado (.ts) com o código e certifique-se de importar as funções que deseja utilizar.
````
import { isCPFCNPJValid, generateCPFCNPJ } from './cpfcnpj.ts';
````
### Utilização -> isCPFCNPJValid
Método com 1 parâmetro obrigatório, o número do documento, podendo ser formatado ou não!
````
isCPFCNPJValid = function(iDoc:string):boolean{
  ...
}

let retDocOk : boolean = isCPFCNPJValid("548.156.113-67"); //doc demonstrativo
````
### Ouput:
````
retDocOk = true; //somente demonstrativo
````

#### Utilização -> generateCPFCNPJ
Neste método se faz necessário informar um parâmetro de entrada indicando se deve ser gerado um documento CPF ou CNPJ.
Também é possível informar se o retorno deve ser formatado com o padrão CPF ou CNPJ.
````
generateCPFCNPJ = function(iTpDoc:string, iMask:boolean=false):string{
   ...
}
generateCPFCNPJ = function(iTpDoc:string, iMask:boolean=false):string{
let retDocGen : string = generateCPFCNPJ("548.156.113-67"); //doc demonstrativo
````
#### Ouput:
````
retDocOk = true; //somente demonstrativo
````
