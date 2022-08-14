public interface IConta{
    public void sacar(long valor);
    public void depositar(long valor);
    public void transferir(long valor, Conta conta);
    public long getSaldo();
    public void addExtrato(String extrato);
}