



public class BancoCLI {
    public static Banco banco = new Banco();
    public static void main(String[] args) {
        System.out.println("Lista de Contas");
        banco.adicionarConta(new ContaCorrente(0, 1, 1234567891234L, "Joao", 1000));
        banco.adicionarConta(new ContaPoupanca(0, 2, 1234567891234L, "Maria", 1000));
        banco.depositar(0, 1, 500);
        banco.listaContas();
        banco.extrato(0, 1);
        banco.sacar(0, 1, 600);
        banco.extrato(0, 1);
    }

}