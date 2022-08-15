package br.dev.neves.padroesjava;

/**
 * Singleton "apressado"
 * 
 * no lugar de verificar, 
 * já cria a classe e cria a instância automaticamente.
 * 
 * @author brenogbn
 */
public class SingletonEager {
	
	private static SingletonEager instancia = new SingletonEager();
	
	private SingletonEager() {
		super();
	}
	
	public static SingletonEager getInstancia () {
		return instancia;
	}
	
}
