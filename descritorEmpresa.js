export default class Descritor {
  descrever(empresa) {
    console.log(`Razão social: ${empresa.razaoSocial}`);
    console.log(`Nome fantasia:${empresa.nomeFantasia}`);
    console.log(`cnpj: ${empresa.cnpj}`);
    console.log(`Endereco`);
    const endereco = empresa.endereco;
    console.log(`Rua: ${endereco.rua} Bairro: ${endereco.bairro} Cidade: ${endereco.cidade} numero: ${endereco.numero}`);
    console.log('');
    console.log(`funcionários:`);
    empresa.funcionarios.forEach(funcionario => {
      console.log(`Nome: ${funcionario.nome}`);
      console.log(`matricula: ${funcionario.matricula}`);
      console.log(`cpf: ${funcionario.cpf}`);
      const endFunc = funcionario.endereco;
      console.log(`Rua: ${endFunc.rua} Bairro: ${endFunc.bairro} Cidade: ${endFunc.cidade} numero: ${endFunc.numero}`);
    });
  }
}