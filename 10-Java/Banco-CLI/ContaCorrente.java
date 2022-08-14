public class ContaCorrente extends Conta{
    private int limite;
    ContaCorrente(int ag, int cta, long cpfcnpj, String nome, int limite){
        this.limite = limite;
        super.agencia = ag;
        super.numero = cta;
        super.cpfcnpj = cpfcnpj;
        super.nome = nome;
    }
}