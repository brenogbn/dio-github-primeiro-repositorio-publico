
public class ContaPoupanca extends Conta{
    private int juros;
    ContaPoupanca(int ag, int cta, long cpfcnpj, String nome, int juros){
        this.juros = juros;
        super.agencia = ag;
        super.numero = cta;
        super.cpfcnpj = cpfcnpj;
        super.nome = nome;
    }
    public void sacar(long valor){
        if (valor > this.saldo){
            System.out.println("Saldo insuficiente");
            this.addExtrato("Saldo insuficiente");
        }else{
            this.saldo -= valor;
            this.addExtrato("Saque: " + valor + " - Saldo: " + this.saldo);
        }
    }
}
