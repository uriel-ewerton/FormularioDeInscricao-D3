# Trilhas Inova - Formulário de Inscrição

![Logo Trilhas Inova](public/img/logo-trilhas-inova.png)

Este projeto é um site de inscrição para o programa **Trilhas Inova 2026**, desenvolvido como parte do Desafio 3. <br>
[**Acesse a versão em produção aqui**](https://trilhas-inova-d3.netlify.app/).

## 1. O que é o projeto?

O projeto consiste em um sistema web para inscrição e interação com o programa Trilhas Inova, contendo:
- **Página Inicial**: Boas-vindas e orientações.
- **Formulário de Inscrição**: Coleta de dados pessoais, endereço e escolha de trilhas de aprendizagem.
- **Feedback**: Integração com formulário externo (Google Forms) para avaliação do usuário.
- **Funcionalidades Adicionais**: Modo noturno, login/logout simulado e validação de dados.

## 2. Como rodar localmente?

### Pré-requisitos:
- Navegador moderno (Chrome, Firefox, Edge).
- Conexão com internet (para carregar recursos externos como Bootstrap).

### Passos:
1. **Clone o repositório**:
  ```bash
     git clone [URL_DO_REPOSITÓRIO]
  ```
2. **Acesse a pasta do projeto**:
  ```bash
    cd FormularioDeInscricao-D3-main
  ```
3. **Execute o projeto**:

- Abra os arquivos home.html, inscricao.html ou feedback.html diretamente no navegador.

- Recomendado: Utilize uma extensão como Live Server (VS Code) para simular um servidor local e garantir funcionalidades completas (ex: localStorage).

## 3. **Tecnologias utilizadas**
| Tecnologia | Descrição  |
|------------|---|
| HTML/CSS   | Estrutura e estilização das páginas.   |
| JavaScript | Validação de formulários, interações dinâmicas e manipulação do localStorage.  |
| Bootstrap  | Framework para design responsivo e componentes UI (via CDN).  |
| Google Forms  | Formulário de feedback incorporado via iframe.  |
| Netlify  | Plataforma de deploy estático para hospedagem.   |

## 4. **Principais funcionalidades**
✨ **Formulário de Inscrição**
- Validação em tempo real de CPF, telefone, CEP e campos obrigatórios.

- Upload de documentos (identidade e comprovante de residência).

- Seleção de trilhas de aprendizagem com ícones ilustrativos.

🌓 **Modo Noturno**
- Alternância entre temas claro/escuro com persistência via localStorage.

🔑 **Login/Logout Simulado**
- Autenticação simulada usando dados salvos no localStorage.

📱 **Responsividade**
- Layout adaptável para dispositivos móveis e desktops.

📤 **Integração com Google Forms**
- Página de feedback incorporada diretamente do Google Forms.

💾 **Persistência de Dados**
- Dados do formulário salvos localmente (localStorage) após submissão.


Desenvolvido por: <img src="https://img.shields.io/badge/GitHub-Hévila_Freitas-181717?style=flat&logo=github" height="20"> <img src="https://img.shields.io/badge/GitHub-Uriel_Ewerton-181717?style=flat&logo=github" height="20">

🚀 Deploy realizado via Netlify: [**Acessar Site**](https://trilhas-inova-d3.netlify.app/)
