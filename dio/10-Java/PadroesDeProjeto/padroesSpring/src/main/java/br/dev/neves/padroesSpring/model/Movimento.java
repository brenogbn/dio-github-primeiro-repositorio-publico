package br.dev.neves.padroesSpring.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Movimento {

	@Id
	private int movId;
	private int conta;
	private String descricao;
	private int valor;
	private String metadata;
	
	
	
	public int getMovId() {
		return movId;
	}
	public void setMovId(int movId) {
		this.movId = movId;
	}
	public int getConta() {
		return conta;
	}
	public void setConta(int conta) {
		this.conta = conta;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public int getValor() {
		return valor;
	}
	public void setValor(int valor) {
		this.valor = valor;
	}
	public String getMetadata() {
		return metadata;
	}
	public void setMetadata(String metadata) {
		this.metadata = metadata;
	}
	
}