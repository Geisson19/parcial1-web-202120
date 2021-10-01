const { response, request } = require("express");
const axios = require("axios");
const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí

  const { input } = req.query;

  let res = await axios.get(
    "https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players"
  );
  let data = res.data;

  let valores = data.values;

  let inputInt = parseInt(input);

  let respuestaCliente = [];

  for (let i = 0; i < valores.length; i++) {
    for (let j = i + 1; j < valores.length; j++) {
      valor = valores[i];
      valor2 = valores[j];
      if (parseInt(valor.h_in) + parseInt(valor2.h_in) === inputInt) {
        respuestaCliente.push([valor, valor2]);
      }
    }
  }

  // Aproximacion ineficiente
  // valores.forEach((valor) => {
  //   valores.forEach((valor2) => {
  //     if (parseInt(valor.h_in) + parseInt(valor2.h_in) === 139) {
  //       if (!respuestaCliente.includes([valor, valor2])) {
  //         respuestaCliente = respuestaCliente.concat([valor, valor2]);
  //       }
  //     }
  //   });
  // });

  if (!respuestaCliente) {
    res.send("No matches found");
  } else {
    console.log(respuestaCliente);
    res.send(respuestaCliente);
  }
};

module.exports = { getPairsOfPlayers };
