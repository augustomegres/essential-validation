module.exports = {
  /**
   * A validação retornara um objeto json contendo "success" ou "error".
   */
  cpfWithPunctuation(cpf) {
    if (!cpf) {
      return {
        error: "O cpf não foi informado!",
        provided: cpf || undefined,
        required: "###.###.###-##"
      };
    }

    if (cpf.length !== 14) {
      return {
        error: "O cpf informado está com o formato incorreto!",
        provided: cpf,
        required: "###.###.###-##"
      };
    }

    if (cpf[3] !== "." || cpf[7] !== "." || cpf[11] !== "-") {
      return {
        error: "O cpf informado está com o formato incorreto!",
        provided: cpf,
        required: "###.###.###-##"
      };
    }

    let numbersCpf = cpf.match(/([0-9])/g);

    if (numbersCpf.length !== 11) {
      return {
        error: "O cpf informado está com o formato incorreto!",
        provided: cpf,
        required: "###.###.###-##"
      };
    }

    let validacao = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    var calc = 0;
    for (i = 0; i < 9; i++) {
      calc += validacao[i] * Number(numbersCpf[i]);
    }

    let res = calc % 11;

    if (res < 2) {
      if (Number(cpf[12]) !== 0) {
        return {
          error:
            "O cpf informado está com o formato correto, porém é inválido!",
          provided: cpf,
          required: "###.###.###-##"
        };
      }
    } else {
      if (Number(cpf[12]) !== 11 - res) {
        return {
          error:
            "O cpf informado está com o formato correto, porém é inválido!",
          provided: cpf,
          required: "###.###.###-##"
        };
      }
    }

    calc = 0;
    validacao = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    for (i = 0; i < 10; i++) {
      calc += validacao[i] * Number(numbersCpf[i]);
    }

    res = calc % 11;

    if (res < 2) {
      if (Number(cpf[13]) !== 0) {
        return {
          error:
            "O cpf informado está com o formato correto, porém é inválido!",
          provided: cpf,
          required: "###.###.###-##"
        };
      }
    } else {
      if (Number(cpf[13]) !== 11 - res) {
        return {
          error:
            "O cpf informado está com o formato correto, porém é inválido!",
          provided: cpf,
          required: "###.###.###-##"
        };
      }
    }

    return {
      success: "O cpf informado é válido!",
      provided: cpf,
      required: "###.###.###-##"
    };
  },

  /**
   * A validação retornara um objeto json contendo "success" ou "error".
   */
  cpfWithoutPunctuation(cpf) {
    if (!cpf) {
      return {
        error: "O cpf não foi informado!",
        provided: cpf || undefined,
        required: "###########"
      };
    }

    if (cpf.length !== 11) {
      return {
        error: "O cpf informado está com o formato incorreto!",
        provided: cpf,
        required: "###########"
      };
    }

    let numbersCpf = cpf.match(/([0-9])/g);

    if (numbersCpf.length !== 11) {
      return {
        error: "O cpf informado está com o formato incorreto!",
        provided: cpf,
        required: "###########"
      };
    }

    let validacao = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    var calc = 0;
    for (i = 0; i < 9; i++) {
      calc += validacao[i] * Number(numbersCpf[i]);
    }

    let res = calc % 11;

    if (res < 2) {
      if (Number(cpf[9]) !== 0) {
        return {
          error:
            "O cpf informado está com o formato correto, porém é inválido!",
          provided: cpf,
          required: "###########"
        };
      }
    } else {
      if (Number(cpf[9]) !== 11 - res) {
        return {
          error:
            "O cpf informado está com o formato correto, porém é inválido!",
          provided: cpf,
          required: "###########"
        };
      }
    }

    calc = 0;
    validacao = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    for (i = 0; i < 10; i++) {
      calc += validacao[i] * Number(numbersCpf[i]);
    }

    res = calc % 11;

    if (res < 2) {
      if (Number(cpf[10]) !== 0) {
        return {
          error:
            "O cpf informado está com o formato correto, porém é inválido!",
          provided: cpf,
          required: "###########"
        };
      }
    } else {
      if (Number(cpf[10]) !== 11 - res) {
        return {
          error:
            "O cpf informado está com o formato correto, porém é inválido!",
          provided: cpf,
          required: "###########"
        };
      }
    }

    return {
      success: "O cpf informado é válido!",
      provided: cpf,
      required: "###########"
    };
  }
};
