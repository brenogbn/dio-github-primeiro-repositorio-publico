package br.dev.neves.padroesSpring.service;

import br.dev.neves.padroesSpring.model.Cliente;
import br.dev.neves.padroesSpring.model.Conta;
import br.dev.neves.padroesSpring.model.Movimento;

/**
 * Padrão strategy.
 */
public interface ClienteService {

	Iterable<Cliente> buscarTodos();
	Cliente buscarPorId(Long id);
	void inserir(Cliente cliente);
	void atualizar(Long id, Cliente cliente);
	void deletar(Long id);
	String extrato (Conta conta);
	Conta buscarConta(int id);
}
