
        /*
            Atividade I: Converta o documento html para javascript
            Atividade II: Converta objeto literal em função construtora
            Atividade III: Divida o código em módulo
            Atividade IV: Importe o módulo para o documento principal
        */

        /*
            Atividade I: Crie um Objeto Literal
            Vamos simular informações gerais de uma conta bancária. 
            Para isso deve-se basear nos seguintes recursos:
            ( x ) Nome completo do usuário.
            ( x ) Número da Agência.
            ( x ) Número da Conta.
            ( x ) Saldo Atual.
            ( x ) Depósito.
            ( x ) Saque.
        */

        /*
            Atividade II: Adicione funcionalidades ao Objeto Literal.
            ( x ) O usuário deve ser capaz de visualizar seu Saldo Atual.
            ( x ) O usuário deve ser capaz de Depositar. Após o depósito o sistema deve informar o Saldo Atual atualizado.
            ( x ) O usuário deve ser capaz de Sacar. Após o saque o sistema deve informar o Saldo Atual atualizado.
            ( x ) O usuário não pode ser capaz de sacar mais do que possui de Saldo. se não possui saldo o sistema deve responder uma mensagem de erro.

            Sujestões de mensagem:
            - Agora seu Saldo Atual é de R$ X.
            - Você realizou um saque de R$ X. Agora seu Saldo Atual é de R$ X.
            - Saldo insuficiente! Seu Saldo Atual é de R$ ${this.saldoAtual}.
        */

        var DadosDaConta = require ('./dadosdaconta');

        console.log('Saldo Atual:', `R$ ${DadosDaConta.saldoAtual}`);
        console.log('----------------');
        console.log('Depósito:', DadosDaConta.depositar(1000));
        console.log('----------------');
        console.log('Saque:', DadosDaConta.sacar(2000));
        console.log('Saque:', DadosDaConta.sacar(1000));

        /*
            Atividade III: Converta os valores em texto JSON
            ( x ) Converta o resultado o objeto literal em JSON.
        */

        var json = JSON.stringify(DadosDaConta);
        console.log('----------------');
        console.log('Valor convertido em JSON:', json);

