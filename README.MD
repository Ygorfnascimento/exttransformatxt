# 🧩 Extensão Primária - Transformador de Texto

Uma extensão de navegador (Manifest V3) simples e produtiva feita para transformar e formatar textos instantaneamente diretamente pelo painel popup.

---

## 🎯 Objetivo do Projeto

A **Extensão Primária** foi desenvolvida para agilizar o fluxo de trabalho de desenvolvedores, redatores e usuários comuns. Ela elimina a necessidade de acessar sites externos para formatar strings, permitindo converter textos para maiúsculas, minúsculas e aplicar outras funções utilitárias diretamente na barra de ferramentas do seu navegador.

---

## 📂 Estrutura de Arquivos

```bash
Extensao_Primaria-main/
├── 📂 icons/               # Assets visuais da extensão (16x16, 48x48, 128x128 e logo)
├── 📄 index.html           # Interface visual do Popup (campo de texto e botões)
├── 📄 manifest.json        # Configuração nativa e metadados da extensão (V3)
├── 📄 scripts.js           # Funções de transformação de string e manipulação do DOM
└── 📄 style.css            # Layout moderno e responsiva do painel de controle.
```

## 🛠️ Tecnologias

- **Manifest V3** (O padrão mais moderno, seguro e performático de extensões)
- **Web nativa:** HTML5, CSS3 e JavaScript

---

## ⚙️ Instalação Rápida

1. Baixe e extraia o arquivo `Extensao_Primaria-main.zip`.
2. No seu navegador baseado em Chromium (Chrome, Brave, Edge, Opera), acesse `chrome://extensions/`.
3. Ative o **"Modo do desenvolvedor"** no canto superior direito.
4. Clique em **"Carregar sem compactação"** (Load Unpacked) no canto superior esquerdo.
5. Selecione a pasta raiz `Extensao_Primaria-main` (a pasta que contém o arquivo `manifest.json`).
