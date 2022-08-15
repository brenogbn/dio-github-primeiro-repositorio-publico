package br.dev.neves.padroesjava;

public class Facade {
	/* consolida uma interface simples, de um problema complexo. */
	
	
	class CRM {
		private CRM() {}
		public static void gravarDados(String nome, int cep, String cidade) {
			System.out.println("Gravado "+nome+" CEP "+cep + " Cidade "+cidade);
		}
	}
	class CEP {
		private static int cid = 0;
		private CEP () {}
		public static String getCidade(int cod) {
			cid += 1;
			return "Cidade "+cid;
		}
	}
	
	
	
	
	
	
	
	
	public void migrarCliente(String nome, int cep) {
		/* aqui poderia puxar informações de outro sistema
		 * e consolidar nesta classe
		 * poderia por exemplo conectar a um outro sistema
		 * que fornece uma API de CEP e uma base de clientes
		 * e conectar a outro sistema que precisa receber 
		 * uma carga de informações
		 *
		 * poderia colocar fora mas vou colocar aqui para exemplificar.
		 *
		 */ 
		CRM.gravarDados(nome, cep, CEP.getCidade(cep));
	}
}
