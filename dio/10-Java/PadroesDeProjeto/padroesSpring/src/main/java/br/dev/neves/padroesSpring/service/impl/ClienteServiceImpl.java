package br.dev.neves.padroesSpring.service.impl;

import java.util.Iterator;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.dev.neves.padroesSpring.model.ClienteRepository;
import br.dev.neves.padroesSpring.model.Conta;
import br.dev.neves.padroesSpring.model.ContaRepository;
import br.dev.neves.padroesSpring.model.Endereco;
import br.dev.neves.padroesSpring.model.EnderecoRepository;
import br.dev.neves.padroesSpring.model.Movimento;
import br.dev.neves.padroesSpring.model.MovimentoRepository;
import br.dev.neves.padroesSpring.model.Cliente;
import br.dev.neves.padroesSpring.service.ClienteService;
import br.dev.neves.padroesSpring.service.ViaCepService;

/**
 * Padrão Strategy.
 */
@Service
public class ClienteServiceImpl implements ClienteService {

	// Singleton: Injetar os componentes do Spring com @Autowired.
	@Autowired
	private ClienteRepository clienteRepository;
	@Autowired
	private EnderecoRepository enderecoRepository;
	@Autowired
	private ViaCepService viaCepService;
	@Autowired
	private ContaRepository contaRepository;
	@Autowired
	private MovimentoRepository movimentoRepository;
	
	@Override
	public Conta buscarConta(int id) {
		// Buscar Cliente por ID.
		Optional<Conta> conta = contaRepository.findById((long)id);
		return conta.get();
	}
	
	@Override
	public String extrato(Conta conta) {
		Iterable<Movimento> local = movimentoRepository.findAll();
		String ret = "";
		Iterator<Movimento> itr = local.iterator();
		ret = "------- Extrato da Conta --------\n";
		while (itr.hasNext()) {
			Movimento i = itr.next();
			ret += ""+i.getValor() + " -> "+i.getDescricao()+ "\n";
		};
		return ret;
	}
	
	// Strategy: Implementar os métodos definidos na interface.
	// Facade: Abstrair integrações com subsistemas, provendo uma interface simples.

	@Override
	public Iterable<Cliente> buscarTodos() {
		// Buscar todos os Clientes.
		return clienteRepository.findAll();
	}

	@Override
	public Cliente buscarPorId(Long id) {
		// Buscar Cliente por ID.
		Optional<Cliente> cliente = clienteRepository.findById(id);
		return cliente.get();
	}

	@Override
	public void inserir(Cliente cliente) {
		salvarClienteComCep(cliente);
	}

	@Override
	public void atualizar(Long id, Cliente cliente) {
		// Buscar Cliente por ID, caso exista:
		Optional<Cliente> clienteBd = clienteRepository.findById(id);
		if (clienteBd.isPresent()) {
			salvarClienteComCep(cliente);
		}
	}

	@Override
	public void deletar(Long id) {
		// Deletar Cliente por ID.
		clienteRepository.deleteById(id);
	}

	private void salvarClienteComCep(Cliente cliente) {
		// Verificar se o Endereco do Cliente já existe (pelo CEP).
		String cep = cliente.getEndereco().getCep();
		Endereco endereco = enderecoRepository.findById(cep).orElseGet(() -> {
			// Caso não exista, integrar com o ViaCEP e persistir o retorno.
			Endereco novoEndereco = viaCepService.consultarCep(cep);
			enderecoRepository.save(novoEndereco);
			return novoEndereco;
		});
		cliente.setEndereco(endereco);
		// Inserir Cliente, vinculando o Endereco (novo ou existente).
		clienteRepository.save(cliente);
	}

}
