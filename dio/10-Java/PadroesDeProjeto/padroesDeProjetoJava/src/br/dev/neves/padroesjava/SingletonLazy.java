package br.dev.neves.padroesjava;

/**
 * Singleton preguiçoso
 * @author brenogbn
 *
 */
public class SingletonLazy {
	/* ele tem uma instancia dele mesmo */
	private static SingletonLazy instancia;
	private SingletonLazy() {
		super();
		/* nem precisa o super... */
	}
	
	public static SingletonLazy getInstancia() {
		if (instancia == null) {
			instancia = new SingletonLazy();
		}
		return instancia;
	}
	
}
