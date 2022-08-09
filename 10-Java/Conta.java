public abstract class Conta implements IConta{
    protected long cpfcnpj;
    protected long saldo;
    protected short agencia;
    protected int numero;
    public void sacar(double valor){
        this.saldo -= valor;
    }
    public void depositar(double valor){
        this.saldo += valor;
    }
    public void transferir(double valor, Conta conta){
        this.sacar(valor);
        conta.depositar(valor);
    }
    public long getSaldo(){
        return this.saldo;
    }
}