# Essential Validation

O pacote contém funções simples para ajudar e agilizar o desenvolvimento de seus projetos.

## Funções

1. Validação de CPF
   1.1 Validar CPF sem pontuação

   ```js
   //Nesta função, o cpf deve conter 11 dígitos, apenas numeros e estar de acordo com o algorítimo padrão do CPF.
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

   1.2 Validar CPF com pontuação

   ```js
   //Nesta função, o cpf deve conter 11 dígitos, apenas numeros e estar de acordo com o algorítimo padrão do CPF.
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
