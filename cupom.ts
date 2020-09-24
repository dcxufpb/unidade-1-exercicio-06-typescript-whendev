let dados = {
  nome_loja: "Arcos Dourados Com. de Alimentos LTDA",
  logradouro: "Av. Projetada Leste",
  numero: 500,
  complemento: "EUC F32/33/34",
  bairro: "Br. Sta Genebra",
  municipio: "Campinas",
  estado: "SP",
  cep: "13080-395",
  telefone: "(19) 3756-7408",
  observacao: "Loja 1317 (PDP)",
  cnpj: "42.591.651/0797-34",
  inscricao_estadual: "244.898.500.113"
};

function isNullOrEmpty(s: String) {
  return s == null || s.length == 0;
}

function dados_loja() {
  // Implemente aqui
  if (dados.nome_loja == "") {
    throw new Error(`O campo nome da loja é obrigatório`);
  }

  if (dados.logradouro == "") {
    throw new Error(`O campo logradouro do endereço é obrigatório`);
  }

  if (dados.municipio == "") {
    throw new Error(`O campo município do endereço é obrigatório`);
  }

  if (dados.estado == "") {
    throw new Error(`O campo estado do endereço é obrigatório`);
  }

  if (dados.cnpj == "") {
    throw new Error(`O campo CNPJ da loja é obrigatório`);
  }

  if (dados.inscricao_estadual == "") {
    throw new Error(`O campo inscrição estadual da loja é obrigatório`);
  }


  let _COMPLEMENTO = "";
		if (dados.complemento != ""){
			_COMPLEMENTO = " " + dados.complemento;
		}

		let _BAIRRO = "";
		if (dados.bairro != "") {
			_BAIRRO = dados.bairro + " - ";
		}

		let _CEP = "";
		let _TELEFONE = "";

		if (!isNullOrEmpty(dados.cep)) {
			_CEP = "CEP:" + dados.cep;
			if (dados.telefone != ""){
				_TELEFONE = " Tel " + dados.telefone;
			}
		} else {
			_CEP = "";
			if (dados.telefone != ""){
				_TELEFONE = "Tel " + dados.telefone;
			}
    }
    
    let _OBSERVACAO = "";
    if(dados.observacao != ""){
      _OBSERVACAO = dados.observacao;
    }

    let _NUMERO;
    if (dados.numero != 0){
      _NUMERO = dados.numero;
    }

    if (dados.numero == 0){
      _NUMERO = "s/n";
    }

  let show = `${dados.nome_loja}
${dados.logradouro}, ${_NUMERO}${_COMPLEMENTO}
${_BAIRRO}${dados.municipio} - ${dados.estado}
${_CEP}${_TELEFONE}
${dados.observacao}
CNPJ: ${dados.cnpj}
IE: ${dados.inscricao_estadual}
`;
  return show
  
}

module.exports = {
  dados: dados,
  dados_loja:  dados_loja
};
