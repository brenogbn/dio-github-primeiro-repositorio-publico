package br.dev.neves.padroesjava;

public class SMovDefensivo implements Strategy{
	public void mover(int direcao) {
		System.out.println("Movendo defensivamente..."+direcao);
		
	}
	SMovDefensivo(){}
}
