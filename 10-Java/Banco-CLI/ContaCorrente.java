public class ContaCorrente extends Conta{
    private int limite;
    ContaCorrente(int ag, int cta, long cpfcnpj, String nome, int limite){
        this.limite = limite;
        super.agencia = ag;
        super.numero = cta;
        super.cpfcnpj = cpfcnpj;
        super.nome = nome;
    }
    public void sacar(long valor){
        if (valor > this.saldo+this.limite){
            System.out.println("Saldo insuficiente");
            this.addExtrato("Saldo insuficiente");
        }else{
            this.saldo -= valor;
            this.addExtrato("Saque: " + valor + " - Saldo: " + this.saldo);
        }
    }
}