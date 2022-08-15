package br.dev.neves.padroesjava;

public class Teste {
	
	public static void main (String[] args) {
		SingletonLazy lazy = SingletonLazy.getInstancia();
		System.out.println(lazy);
	
	
	
	/* o mesmo funciona para as 3 classes, sempre vem a mesma instancia, única. */
	
	/* deixei tudo no mesmo pacote para facilitar */
	
		class Robo{
			private Strategy a;
			Robo(){
				
			}
			public void setStrategy(Strategy a) {
				this.a = a;
			}
			public void mover() {
				if (this.a != null) {
					this.a.mover(0);
				}
				else {
					System.out.println("Não foi possível mover, estratégia não foi definida.");
				}
			}
		}
		final Robo robo = new Robo();
		robo.mover();
		robo.setStrategy(new SMovAgressivo());
		robo.mover();
		robo.mover();
		robo.setStrategy(new SMovDefensivo());
		robo.mover();
		robo.mover();
		
		
		Facade f = new Facade();
		f.migrarCliente("teste", 99999555);
		f.migrarCliente("teste222", 99999555);
		f.migrarCliente("teste333", 99999555);
	}
	
}
