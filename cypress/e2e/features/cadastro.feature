# language: pt
Funcionalidade: Cadastro de Paciente
  Como um novo usuário
  Quero me cadastrar na Lacrei Saúde
  Para acessar os serviços da plataforma

  @cadastro_sucesso
  Cenário: Cadastro realizado com sucesso
    Dado que estou na página inicial
    Quando clico em "Criar conta"
    E preencho todos os campos obrigatórios com dados válidos
    E aceito os termos de uso e declaro ter 18 anos ou mais
    E clico no botão "Cadastrar"
    Então devo ver mensagem de confirmação de cadastro