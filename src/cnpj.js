module.exports = {
  /**
   * A validação retornara um objeto json contendo "success" ou "error".
   */
  cnpjWithPunctuation(cnpj) {
    if (!cnpj) {
      return {
        error: "O cnpj não foi informado!",
        provided: cnpj || undefined,
        required: "##.###.###/####-##"
      };
    }

    if (cnpj.length !== 18) {
      return {
        error: "O cnpj informado está com o formato incorreto!",
        provided: cnpj,
        required: "##.###.###/####-##"
      };
    }

    if (
      cnpj[2] !== "." ||
      cnpj[6] !== "." ||
      cnpj[10] !== "/" ||
      cnpj[15] !== "-"
    ) {
      return {
        error: "O cnpj informado está com o formato incorreto!",
        provided: cnpj,
        required: "##.###.###/####-##"
      };
    }

    let numberscnpj = cnpj.match(/([0-9])/g);

    if (numberscnpj.length !== 14) {
      return {
        error: "O cnpj informado está com o formato incorreto!",
        provided: cnpj,
        required: "##.###.###/####-##"
      };
    }

    let validacao = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    var calc = 0;
    for (i = 0; i < 12; i++) {
      calc += validacao[i] * Number(numberscnpj[i]);
    }

    let res = calc % 11;

    if (res < 2) {
      if (Number(cnpj[16]) !== 0) {
        return {
          error:
            "O cnpj informado está com o formato correto, porém é inválido!",
          provided: cnpj,
          required: "##.###.###/####-##"
        };
      }
    } else {
      if (Number(cnpj[16]) !== 11 - res) {
        return {
          error:
            "O cnpj informado está com o formato correto, porém é inválido!",
          provided: cnpj,
          required: "##.###.###/####-##"
        };
      }
    }

    calc = 0;
    validacao = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    for (i = 0; i < 13; i++) {
      calc += validacao[i] * Number(numberscnpj[i]);
    }

    res = calc % 11;

    if (res < 2) {
      if (Number(cnpj[17]) !== 0) {
        return {
          error:
            "O cnpj informado está com o formato correto, porém é inválido!",
          provided: cnpj,
          required: "##.###.###/####-##"
        };
      }
    } else {
      if (Number(cnpj[17]) !== 11 - res) {
        return {
          error:
            "O cnpj informado está com o formato correto, porém é inválido!",
          provided: cnpj,
          required: "##.###.###/####-##"
        };
      }
    }

    return {
      success: "O cnpj informado é válido!",
      provided: cnpj,
      required: "##.###.###/####-##"
    };
  },

  /**
   * A validação retornara um objeto json contendo "success" ou "error".
   */
  cnpjWithoutPunctuation(cnpj) {
    if (!cnpj) {
      return {
        error: "O cnpj não foi informado!",
        provided: cnpj || undefined,
        required: "##############"
      };
    }

    if (cnpj.length !== 14) {
      return {
        error: "O cnpj informado está com o formato incorreto!",
        provided: cnpj,
        required: "##############"
      };
    }

    let numberscnpj = cnpj.match(/([0-9])/g);

    if (numberscnpj.length !== 14) {
      return {
        error: "O cnpj informado está com o formato incorreto!",
        provided: cnpj,
        required: "##############"
      };
    }

    let validacao = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    var calc = 0;
    for (i = 0; i < 12; i++) {
      calc += validacao[i] * Number(numberscnpj[i]);
    }

    let res = calc % 11;

    if (res < 2) {
      if (Number(cnpj[12]) !== 0) {
        return {
          error:
            "O cnpj informado está com o formato correto, porém é inválido!",
          provided: cnpj,
          required: "##############"
        };
      }
    } else {
      if (Number(cnpj[12]) !== 11 - res) {
        return {
          error:
            "O cnpj informado está com o formato correto, porém é inválido!",
          provided: cnpj,
          required: "##############"
        };
      }
    }

    calc = 0;
    validacao = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    for (i = 0; i < 13; i++) {
      calc += validacao[i] * Number(numberscnpj[i]);
    }

    res = calc % 11;

    if (res < 2) {
      if (Number(cnpj[13]) !== 0) {
        return {
          error:
            "O cnpj informado está com o formato correto, porém é inválido!",
          provided: cnpj,
          required: "##############"
        };
      }
    } else {
      if (Number(cnpj[13]) !== 11 - res) {
        return {
          error:
            "O cnpj informado está com o formato correto, porém é inválido!",
          provided: cnpj,
          required: "##############"
        };
      }
    }

    return {
      success: "O cnpj informado é válido!",
      provided: cnpj,
      required: "##############"
    };
  }
};
