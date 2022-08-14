import java.util.ArrayList;

public class Banco {
    public ArrayList<Conta> contas = new ArrayList<Conta>();
    public void adicionarConta(Conta conta){
        contas.add(conta);
    }
    public void listaContas(){
        for (Conta conta : contas){
            System.out.println(conta.info());
        }
    }
    public void getConta(int agencia, int numero){
        for (Conta conta : contas){
            if (conta.agencia == agencia && conta.numero == numero){
                System.out.println(conta.info());
            }
        }
    }
    public void sacar(int agencia, int numero, double valor){
        for (Conta conta : contas){
            if (conta.agencia == agencia && conta.numero == numero){
                conta.sacar(valor);
            }
        }
    }
    public void depositar(int agencia, int numero, double valor){
        for (Conta conta : contas){
            if (conta.agencia == agencia && conta.numero == numero){
                conta.depositar(valor);
            }
        }
    }
    public Boolean contaExiste(int agencia, int numero){
        for (Conta conta : contas){
            if (conta.agencia == agencia && conta.numero == numero){
                return true;
            }
        }
        return false;
    }
    public void extrato(int agencia, int numero){
        for (Conta conta : contas){
            if (conta.agencia == agencia && conta.numero == numero){
                conta.mostraExtrato();
            }
        }
    }
}



/*
 * Um banco oferece aos seus clientes dois tipos de contas:
 * - Conta Corrente
 * - Conta Poupança
 * - pode receber depósito, saque e transferência.
 */