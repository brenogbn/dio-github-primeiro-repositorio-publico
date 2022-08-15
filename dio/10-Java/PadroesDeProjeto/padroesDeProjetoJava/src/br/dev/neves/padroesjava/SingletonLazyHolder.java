package br.dev.neves.padroesjava;

public class SingletonLazyHolder {

	private class Holder{
		public static SingletonLazyHolder instancia = new SingletonLazyHolder();
	}
	
	private SingletonLazyHolder() {
		super();
	}
	
	public static SingletonLazyHolder getInstancia() {
		return Holder.instancia;
	}
	
}
