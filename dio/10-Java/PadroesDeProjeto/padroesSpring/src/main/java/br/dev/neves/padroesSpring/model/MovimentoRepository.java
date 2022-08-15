package br.dev.neves.padroesSpring.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovimentoRepository extends CrudRepository<Movimento,Long> {

}