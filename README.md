# Biblioteca
Task de front end realizado como atividade na pos de JAVA da UTFPR-cornelio.

Esse projeto tem como objetivo implmentar progressivamente uma aplicação web de forma didática desenvolvido com a instituição UTFPR-cornelio.
## Protótipo
https://www.figma.com/file/Nsfieq4f2CHIbqirwX6LX6/biblioteca?node-id=0%3A1

## Check List

- [X] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [ ] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro).
- [ ] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [X] Construir páginas web com o conceito de componentes. 
- [X] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [X] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [ ] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [X] Mapear componentes à rotas no módulo de rotas.
- [X] Criar navegação entre páginas por meio de rotas.
- [ ] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas. 
- [X] Validar campos do formulário com REGEX e apresentar os erros.
- [ ] Desabilitar o botão de submit enquanto o formulário está inválido.
- [X] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [ ] Cadastrar uma entidade usando uma API (JSON Server).
- [ ] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [X] Usar a diretiva ngIf
- [ ] Formatar a apresentação de dados com Pipes.
- [X] Build e deploy da aplicação.

## Como foi feito o Build e Deploy

- Executei o comando ng build --prod;
- Gerou o bundle da aplicação;
- Hospedei a aplicação na plataforma https://www.umbler.com/br; 
- Dentro do site selecionei o servidor apache PHP;
- A plataforma preparou automaticamente o site;
- Depois baixei o aplicativo FileZilla informou o diretório da aplicação no computador;
- Informei o Host, login e senha no programa FileZilla e subi no Umbler via FTPS;
- Ai o site ficou disponivel, todavia tinha um problema da plataforma com angular,
ao dar F5 ele dava um erro 404. Ai tive que fazer um macete;
- Acessei o site da Angular em Deployin appliocations na seção Routed apps must fallback to index.html,
cópei o código de configuração para servidor Apache e crei um arquivo .htaccess na aplicação e coloquei o código e resolveu o problema.



