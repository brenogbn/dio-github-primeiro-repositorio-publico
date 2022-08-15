package br.dev.neves.padroesjava;

public class SMovAgressivo implements Strategy{

	
	public void mover(int direcao) {
		System.out.println("Movendo agressivamente..."+direcao);
	}
	SMovAgressivo(){}
}
