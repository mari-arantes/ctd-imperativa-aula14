function DadosDaConta (nome, sobrenome, numeroDaAgencia, numeroDaConta, saldoAtual){
    
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.numeroDaAgencia = numeroDaAgencia;
    this.numeroDaConta = numeroDaConta;
    this.saldoAtual = saldoAtual;
    
    
    this.depositar = function(valorDoDeposito) {
        // Somando o valor do Saldo Atual com o valor de Depósitado.
        this.saldoAtual += valorDoDeposito;
        // Após a somatória apresentando o valor atualizado do Saldo Atual.
        return `Agora seu Saldo Atual é de R$ ${this.saldoAtual}.`;  
    }

    this.sacar = function(valorDoSaque) {
        var temSaldoParaOSaque = this.saldoAtual >= valorDoSaque;
        // Valida se tem Saldo suficiente para o Saque.
        if(temSaldoParaOSaque) {
            // Caso tenha, subtrai o valor do Saldo Atual.
            this.saldoAtual -= valorDoSaque;
            // Retorna o Saldo Atual após o Saque.
            return `Você realizou um saque de R$ ${valorDoSaque}. Agora seu Saldo Atual é de R$ ${this.saldoAtual}.`;
        }
        else {
            // Caso não tenha saldo retorna a mensagem de Erro e o Saldo Atual.
            return `Saldo insuficiente! Seu Saldo Atual é de R$ ${this.saldoAtual}.`;
        }
    }
}

// Exportou!
module.exports = DadosDaConta;