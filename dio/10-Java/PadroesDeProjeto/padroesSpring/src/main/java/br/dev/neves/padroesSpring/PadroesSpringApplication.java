package br.dev.neves.padroesSpring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class PadroesSpringApplication {

	public static void main(String[] args) {
		System.out.println("chegou aqui");
		SpringApplication.run(PadroesSpringApplication.class, args);
	}

}
