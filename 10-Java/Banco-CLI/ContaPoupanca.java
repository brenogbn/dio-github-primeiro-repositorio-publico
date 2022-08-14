
public class ContaPoupanca extends Conta{
    private int juros;
    ContaPoupanca(int ag, int cta, long cpfcnpj, String nome, int juros){
        this.juros = juros;
        super.agencia = ag;
        super.numero = cta;
        super.cpfcnpj = cpfcnpj;
        super.nome = nome;
    }
}
