# Essential Validation

O pacote contém funções simples para ajudar e agilizar o desenvolvimento de seus projetos.

1. Validação de CPF
2. Validação de CNPJ

## Validação de CPF

- Validar CPF sem pontuação

```js
/**
 * Nesta função, o cpf deve conter 11 dígitos, apenas numeros
 * Além de estar de acordo com o algorítimo padrão do CPF.
 */
var { cpf } = require("essential-validation");

cpf.cpfWithoutPunctuation("12345678900");
/**
 * Caso obtenha sucesso na validação retornará
    {
        success: "O cpf informado é válido!",
        provided: "12345678900",
        required: "###########"
    }
 * Caso haja um erro retornará
    {
        error: "O cpf informado está com o formato correto, porém é inválido!",
        provided: "12345678900",
        required: "###########"
    }
*/
```

- Validar CPF com pontuação

```js
/**
 * Nesta função, o cpf deve conter 14 dígitos, contando os numeros e a pontuação
 * Além de estar de acordo com o algorítimo padrão do CPF.
 */
var { cpf } = require("essential-validation");

cpf.cpfWithPunctuation("123.456.789-00");
/**
 * Caso obtenha sucesso na validação retornará
    {
        success: "O cpf informado é válido!",
        provided: "123.456.789-00",
        required: "###.###.###-##"
    }
 * Caso haja um erro retornará
    {
        error: "O cpf informado está com o formato correto, porém é inválido!",
        provided: "123.456.789-00",
        required: "###.###.###-##"
    }
*/
```

## Validação de CNPJ

- Validar CNPJ sem pontuação

```js
/**
 * Nesta função, o cnpj deve conter 14 dígitos, apenas numeros
 * Além de estar de acordo com o algorítimo padrão do cnpj.
 */
var { cnpj } = require("essential-validation");

cnpj.cnpjWithoutPunctuation("12345678000199");
/**
 * Caso obtenha sucesso na validação retornará
    {
        success: "O cnpj informado é válido!",
        provided: "12345678000199",
        required: "###########"
    }
 * Caso haja um erro retornará
    {
        error: "O cnpj informado está com o formato correto, porém é inválido!",
        provided: "12345678000199",
        required: "###########"
    }
*/
```

- Validar CNPJ com pontuação

```js
/**
 * Nesta função, o CNPJ deve conter 18 dígitos, contando os números e a pontuação
 * Além de estar de acordo com o algorítimo padrão do CNPJ.
 */

var { cnpj } = require("essential-validation");

cnpj.cnpjWithPunctuation("12.345.678/0001-99");
/**
 * Caso obtenha sucesso na validação retornará
    {
        success: "O cnpj informado é válido!",
        provided: 12.345.678/0001-99,
        required: "##.###.###/####-##"
    }
 * Caso haja um erro retornará
    {
        error: "O cnpj informado está com o formato correto, porém é inválido!",
        provided: 12.345.678/0001-99,
        required: "##.###.###/####-##"
    }
*/
```
