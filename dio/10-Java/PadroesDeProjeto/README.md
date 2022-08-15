# Padrões de Projeto

## Classificação
- Criacionais 
  - Abstract Factory
  - Builder
  - Factory Method
  - Prototype
  - **Singleton** -> Sempre uma instância única de uma determinada classe/abstração
- Comportamentais 
  - Chain of Responsability
  - Iterator
  - Observer
  - **Strategy** -> Uma interface que define um contrato a ser seguido por múltiplas implementações que utilizam a mesma interface. Usa notações UML.
  - Template Method
- Estruturais
  - Adapter
  - Bridge
  - Composite
  - Decorator
  - **Facade** -> Abstrai a complexidade de integrações com múltiplos subsistemas ou sistemas internos que requerem uma integração mais complexa. Simplifica e abstrai as integrações.
  - Flyweight
  - Proxy
* Spring abstrai os diversos padrões.

## Spring
- Singleton
  - @Bean e @Autowired
- Strategy
  - @Service e @Repository
- Facade - faremos uma API Rest com JPA e Via Cep Feign

