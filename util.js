function montarMensagem(cep, logradouro, localidade, valor) {
  return (
    "CEP: " +
    cep +
    "\n" +
    "Logradouro: " +
    logradouro +
    "\n" +
    "Cidade: " +
    localidade +
    "\n" +
    "O preço do frete para este endereço é: " +
    valor
  );
}

export { montarMensagem };

