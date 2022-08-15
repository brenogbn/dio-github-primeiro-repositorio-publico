package br.dev.neves.padroesSpring.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Conta {
	/* locais, setters, getters... */
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int numero;
	private String cpf;
	private String nome;
	private int saldo;

	
	/*
	 * 
	 * falta implementar a parte de getters, setters,
	 * transferência, criação dos movimentos.
	 * 
	 * em breve.
	 * */
}
