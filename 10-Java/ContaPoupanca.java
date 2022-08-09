
public class ContaPoupanca extends Conta{
    private int juros;
    public void aplicarJuros(double juros){
        super.saldo += super.saldo * juros;
    }
}
