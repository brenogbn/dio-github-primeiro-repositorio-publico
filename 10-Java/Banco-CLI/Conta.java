import java.util.ArrayList;

public abstract class Conta implements IConta{
    protected long cpfcnpj;
    /* Explicação simpes sobre a escolha deste tipo:
     * No contexto de um banco, é mais seguro armazenar o saldo em centavos,
     * pois os tipos int e long são exatos enquanto os tipos double e float
     * utilizam arredondamentos e possuem uma precisão que não garante que
     * os valores depositados ou transferidos se mantenham integros.
     */
    protected long saldo;
    protected int agencia;
    protected int numero;
    protected String nome;
    protected ArrayList<String> extrato = new ArrayList<String>();
    public void addExtrato(String extrato){
        this.extrato.add(extrato);
    }
    public void sacar(int valor){
        if (valor > this.saldo){
            System.out.println("Saldo insuficiente");
            this.addExtrato("Saldo insuficiente");
        }else{
            this.saldo -= valor;
            this.addExtrato("Saque: " + valor + " - Saldo: " + this.saldo);
        }
    }
    public void depositar(long valor){
        this.saldo += valor;
        this.addExtrato("Deposito: " + valor + " - Saldo: " + this.saldo);
    }
    public void transferir(long valor, Conta conta){
        this.sacar(valor);
        conta.depositar(valor);
        this.addExtrato("Transferência: " + valor + " - Saldo: " + this.saldo + "Origem: " + this.agencia + "-" + this.numero + " - Destino: " + conta.agencia + "-" + conta.numero);
    }
    public long getSaldo(){
        return this.saldo;
    }
    public void mostraExtrato(){
        System.out.println("Extrato da Conta:\n - Agencia: " + this.agencia + "\n - Conta: " + this.numero + "\n - Nome: " + this.nome + "\n - Saldo: " + this.saldo);
        for (String extrato : this.extrato){
            System.out.println(extrato);
        }
    }
    public String info(){
        String sld = String.format("%.2f", (double)this.saldo/100.0);
        return "Conta: " + this.agencia + "-" + this.numero + " - " + this.nome + " - R$ " + sld;
    }
}