package br.dev.neves.padroesSpring.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import br.dev.neves.padroesSpring.model.Endereco;

/**
 * conforme o exemplo visto.
 */
@FeignClient(name="viacep", url="https://viacep.com.br/ws")
public interface ViaCepService {
	/* mapeia os parâmetros para a API externa. */
	@GetMapping("/{cep}/json/")
	Endereco consultarCep(@PathVariable("cep") String cep);
}
