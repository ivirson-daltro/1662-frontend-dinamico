---
marp: true
math: mathjax
---

# FE-JS-004 - Frontend Dinâmico (JS DOM)

## Manipulação de DOM e Interatividade

---

# Estrutura do Módulo

Este módulo introduz os conceitos fundamentais para transformar páginas
HTML estáticas em **interfaces dinâmicas e interativas** utilizando
JavaScript.

Ao final das aulas, o aluno será capaz de:

- Manipular elementos do DOM
- Responder a eventos do usuário
- Alterar conteúdo dinamicamente
- Criar pequenas aplicações no navegador

---

# Aula 1 - Introdução ao DOM

## 1. O papel do JavaScript no Frontend

Na web moderna, usamos três tecnologias principais:

| Tecnologia | Função              |
| ---------- | ------------------- |
| HTML       | estrutura da página |
| CSS        | aparência           |
| JavaScript | comportamento       |

---

## 2. O que acontece quando uma página carrega

Quando o navegador abre uma página:

```
lê o HTML -> constrói a árvore do documento -> aplica CSS -> executa JavaScript
```

Fluxo simplificado:

```
HTML
 ↓
Parser do navegador
 ↓
DOM
 ↓
JavaScript pode manipular
```

---

## 3. O que é o DOM?

DOM significa **Document Object Model**.

É a representação do documento HTML em forma de **árvore de objetos**
que o JavaScript consegue manipular.

---

### Estrutura visual do DOM

HTML:

```html
<body>
  <h1>Olá</h1>
  <button>Clique</button>
</body>
```

Representação:

    Document
     └── body
          ├── h1
          └── button

Cada elemento vira um objeto manipulável em JavaScript.

---

## 4. Por que o DOM é importante

Sem o DOM, JavaScript não conseguiria:

- alterar textos
- reagir a cliques
- criar elementos
- atualizar interfaces

Por exemplo:

```js
document.querySelector("h1").innerText = "Novo título";
```

Isso altera o conteúdo da página em tempo real.

---

## 5. Inserindo JavaScript na página

Existem duas formas principais.

### Script interno

```js
<script>console.log("Olá")</script>
```

### Script externo (mais usado)

```js
<script src="script.js"></script>
```

Arquivo:

```js
console.log("Olá mundo");
```

---

## 6. Onde colocar o script

Problema comum:

```js
<script src="script.js"></script>

<button id="btn">Clique</button>
```

O JavaScript executa antes do botão existir.

---

Solução:

```js
<button id="btn">Clique</button>

<script src="script.js"></script>
```

Ou usar:

```js
document.addEventListener("DOMContentLoaded", () => {});
```

---

## 7. Selecionando elementos da página

Para manipular elementos, primeiro precisamos selecioná-los.

JavaScript usa o objeto global:

```js
document;
```

Ele representa todo o documento HTML.

---

### Seletores Específicos

Esses métodos são os "veteranos". Eles são extremamente rápidos porque o navegador sabe exatamente onde procurar, mas são menos flexíveis.

- `getElementById('id')`: Retorna um único elemento. Como IDs devem ser únicos no HTML, ele é a forma mais direta de acessar algo.
- `getElementsByClassName('classe')`: Retorna uma HTMLCollection (uma lista "viva" de elementos). Se você adicionar um elemento com essa classe via JS depois, a lista se atualiza sozinha.
- `getElementsByTagName('tag')`: Retorna todos os elementos de um tipo (ex: todos os `<li>` ou `<div>`).

---

### Seletores Modernos (Padrão CSS)

Com o surgimento do `querySelector`, a forma como selecionamos elementos mudou. Ele utiliza a mesma sintaxe que usamos no CSS, o que torna o código muito mais intuitivo.

- `querySelector('.seletor')`: Retorna o **primeiro** elemento que coincidir com o seletor. Se houver dez botões com a mesma classe, ele pegará apenas o primeiro.

> **Dica de ouro:** Use `#` para IDs, `.` para classes e o nome puro para tags. Ex:

```js
document.querySelector("main h1.titulo");
```

---

- `querySelectorAll(".seletor")`: Retorna uma **NodeList** com **todos** os elementos encontrados.
  - **Diferença crucial:** Ao contrário da HTMLCollection, a NodeList é "estática" (não muda se o DOM mudar depois) e aceita o método `.forEach()` nativamente, facilitando muito a criação de loops.

---

### Tabela Comparativa

| Método                   | Retorno        | Flexibilidade         | Sintaxe Exemplo     |
| ------------------------ | -------------- | --------------------- | ------------------- |
| `getElementById`         | 1 Elemento     | Baixa (apenas ID)     | `('header')`        |
| `getElementsByClassName` | HTMLCollection | Média (apenas Classe) | `('btn-blue')`      |
| `querySelector`          | 1 Elemento     | Alta (Seletores CSS)  | `('div > p.intro')` |
| `querySelectorAll`       | NodeList       | Alta (Seletores CSS)  | `('ul li.item')`    |

---

## 8. Acessando propriedades do elemento

```js
const titulo = document.querySelector("h1");

console.log(titulo);
```

No DevTools veremos:

```html
<h1>Olá</h1>
```

---

Podemos acessar informações:

```js
titulo.innerText;
```

ou

```js
titulo.innerHTML;
```

Exemplo:

```js
console.log(titulo.innerText);
```

Saída:

```
Olá
```

---

## Exercício

### O Gerenciador de Mercado

**O Cenário:** Você recebeu um HTML de um aplicativo de compras e precisa usar JavaScript para manipular os itens.

1. O Código Base (HTML)

---

HTML

```html
<div id="container">
  <h1 id="titulo">Lista de Compras</h1>

  <ul id="lista">
    <li class="item urgente">Leite</li>
    <li class="item">Pão</li>
    <li class="item urgente">Café</li>
    <li class="item">Manteiga</li>
  </ul>

  <button class="btn-main" id="add-btn">Adicionar Item</button>
</div>
```

---

2. As Missões

- **A Identificação:** Selecione o título da página usando `getElementById` e mude o texto para "Minha Lista VIP".
- **O Alerta:** Selecione todos os elementos que possuem a classe `urgente` usando `getElementsByClassName` e mude a cor do texto deles para vermelho.
- **A Precisão:** Use o `querySelector` para selecionar apenas o primeiro item da lista (`li`) e coloque-o em negrito.
- **A Varredura:** Use o `querySelectorAll` para selecionar todos os itens da lista. Use um `.forEach` para adicionar um emoji de 🛒 ao final do texto de cada um.
- **O Estilo:** Selecione o botão usando um seletor de ID dentro do `querySelector` (ex: `#add-btn`) e mude a cor de fundo dele.

---

# Aula 2 - Eventos, Formulários e Manipulação Dinâmica

## Revisão da Aula 1

### O que é o DOM?

**DOM** = Document Object Model. É a representação do HTML em forma de objetos que JavaScript pode manipular.

### Seleção de elementos

Antes de eventos, você precisa dominar **seleção de elementos**.

---

### Formas de Selecionar Elementos

```js
// Seletores específicos (rápidos, menos flexíveis)
document.getElementById("id"); // 1 elemento
document.getElementsByClassName("classe"); // Lista viva
document.getElementsByTagName("nome-da-tag"); // Lista viva

// Seletores modernos (flexíveis, padrão CSS)
document.querySelector(".seletor"); // Primeiro elemento
document.querySelectorAll(".seletor"); // Todos os elementos
```

### Acessando Conteúdo

```js
const elemento = document.querySelector("h1");

elemento.innerText; // Apenas texto
elemento.innerHTML; // HTML completo
elemento.value; // Para inputs
```

---

## 1. Entendendo Eventos

Um **evento** é algo que acontece na página:

- Usuário clica em um botão
- Usuário digita em um campo
- Página termina de carregar
- Mouse passa por um elemento

JavaScript permite **responder** a esses eventos.

---

## 2.Formas tradicionais (`onclick`, `onblur`, etc.)

Antes do `addEventListener`, era comum usar eventos de duas formas:

1. **No HTML (inline):**

```html
<button onclick="alert('clicou')">Clique</button>
<input onblur="console.log('perdeu foco')" />
```

2. **Via propriedade do elemento:**

```js
const botao = document.querySelector("#btn");
const campo = document.querySelector("#nome");

botao.onclick = () => console.log("clicou");
campo.onblur = () => console.log("perdeu foco");
```

---

**Vantagens (quando usar):**

- Sintaxe simples para exemplos rápidos
- Fácil de entender para iniciantes no primeiro contato

**Desvantagens (produção):**

- Mistura HTML com comportamento (inline), piorando manutenção
- Com `onclick`/`onblur` por propriedade, só existe **um** handler por vez
- Menos flexível do que `addEventListener` (opções como `once`, `passive`, `capture`)
- Escala pior em projetos maiores

**Resumo:** para aprendizado é útil conhecer `onclick`/`onblur`, mas em projetos reais prefira `addEventListener`.

---

## 3. Escutando Eventos com addEventListener

A forma moderna e recomendada de escutar eventos:

```js
elemento.addEventListener("evento", funcao);
```

Exemplo:

```js
const botao = document.querySelector("#btn");

botao.addEventListener("click", () => {
  console.log("Botão foi clicado!");
});
```

---

### Eventos Comuns

| Evento    | Quando ocorre        |
| --------- | -------------------- |
| `click`   | Clique do mouse      |
| `change`  | Valor de input muda  |
| `submit`  | Formulário é enviado |
| `keydown` | Tecla é pressionada  |
| `keyup`   | Tecla é liberada     |

---

| Evento      | Quando ocorre                |
| ----------- | ---------------------------- |
| `mouseover` | Mouse passa sobre elemento   |
| `mouseout`  | Mouse sai do elemento        |
| `input`     | Enquanto digita (tempo real) |
| `focus`     | Campo recebe foco            |
| `blur`      | Campo perde foco             |

---

## 4. O Objeto Evento

Quando um evento ocorre, o navegador cria um **objeto evento** com informações:

```js
elemento.addEventListener("click", (event) => {
  console.log(event);
});
```

Propriedades úteis:

```js
event.target; // Elemento que disparou o evento
event.key; // Qual tecla foi pressionada (em keydown)
event.preventDefault(); // Impede ação padrão (ex: submit)
event.type; // Tipo de evento ("click", "change", etc)
```

---

### Exemplo Prático

```js
const input = document.querySelector("input");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Usuário pressionou Enter!");
  }
});
```

---

## 5. Manipulação de Formulários

Trabalhar com formulários é muito comum em JS.

HTML:

```html
<form id="meu-form">
  <input type="text" id="nome" placeholder="Digite seu nome" />
  <input type="email" id="email" placeholder="Email" />
  <button type="submit">Enviar</button>
</form>
```

### Capturando Valores

```js
const nomeInput = document.querySelector("#nome");
console.log(nomeInput.value); // Pega o valor digitado
```

---

### Validando Formulário

```js
const form = document.querySelector("#meu-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Para envio padrão

  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;

  if (nome === "" || email === "") {
    console.log("Campos obrigatórios!");
    return;
  }

  console.log("Formulário válido:", { nome, email });
});
```

---

## 6. Manipulação de Estilos (style)

De forma direta, podemos alterar estilos de um elemento:

```js
const elemento = document.querySelector("h1");

// Alterar cor
elemento.style.color = "red";

// Alterar tamanho
elemento.style.fontSize = "32px";

// Alterar fundo
elemento.style.backgroundColor = "yellow";

// Propriedades CSS com hífen viram camelCase
// background-color vira backgroundColor
// text-align vira textAlign
```

---

**Cuidado:** Alterar estilos diretamente mistura CSS com JS. Funciona bem em casos rápidos!

---

## 7. Manipulação de Classes com classList

A forma **recomendada** de alterar aparência é usar **classes CSS**.

HTML + CSS:

```html
<div id="caixa" class="caixa"></div>

<style>
  .caixa {
    width: 100px;
    background: blue;
  }
  .ativo {
    background: green;
  }
  .erro {
    background: red;
  }
</style>
```

---

### Métodos de classList

```js
const caixa = document.querySelector("#caixa");

// Adicionar classe
caixa.classList.add("ativo");

// Remover classe
caixa.classList.remove("ativo");

// Alternar classe (toggle)
caixa.classList.toggle("ativo"); // Se tem, remove. Se não tem, adiciona

// Verificar se tem classe
if (caixa.classList.contains("ativo")) {
  console.log("Tem classe ativo");
}
```

**Nota:** Prefira `.classList` quando possível. Deixa CSS no CSS e JS no JS!

---

## 8. Criando Elementos Dinamicamente

Há duas formas principais de criar elementos:

### Forma 1: innerHTML (mais simples, menos segura)

```js
const container = document.querySelector("#container");

container.innerHTML += "<p>Novo parágrafo</p>";
```

**Problema:** Pode ser lento com muitos elementos e tem risco de segurança.

---

### Forma 2: createElement (recomendada)

```js
const container = document.querySelector("#container");

// Criar elemento
const novoParagrafo = document.createElement("p");

// Adicionar conteúdo
novoParagrafo.innerText = "Novo parágrafo";

// Adicionar à página
container.appendChild(novoParagrafo);
```

---

### Comparação

| Aspecto               | innerHTML                  | createElement        |
| --------------------- | -------------------------- | -------------------- |
| **Facilidade**        | Muito fácil                | Um pouco mais código |
| **Performance**       | Mais lenta (grande volume) | Mais rápida          |
| **Segurança**         | Risco (injeção de código)  | Segura               |
| **Conteúdo Complexo** | Prática                    | Trabalhoso           |
| **Uso Recomendado**   | Prototipagem               | Produção             |

---

### Exemplo Completo com createElement

```js
const lista = document.querySelector("ul");

// Criar item
const novoItem = document.createElement("li");
novoItem.innerText = "Novo item";
novoItem.classList.add("item");

// Adicionar à lista
lista.appendChild(novoItem);
```

---

## Exercicio 1: Contador Interativo

**O Cenário:** Criar um contador que aumenta/diminui com botões.

HTML:

```html
<div id="contador-app">
  <h2 id="contador">0</h2>
  <button id="btn-mais">+</button>
  <button id="btn-menos">-</button>
  <button id="btn-reset">Reset</button>
</div>
```

---

**Missões:**

1. Criar uma variável `contador` com valor 0
2. Quando clica em "+", aumenta contador e atualiza o texto do `<h2>`
3. Quando clica em "-", diminui contador e atualiza o texto
4. Quando clica em "Reset", volta para 0
5. **Bônus:** Se contador negativo, a cor fica vermelha. Se positivo, verde. Se zero, preto.

---

## Exercício 2: Validação de Formulário

**O Cenário:** Validar um formulário de cadastro.

HTML:

```html
<form id="cadastro">
  <input type="text" id="usuario" placeholder="Usuário" required />
  <input type="password" id="senha" placeholder="Senha" required />
  <input type="email" id="email" placeholder="Email" required />
  <button type="submit">Cadastrar</button>
</form>

<div id="mensagem"></div>
```

---

**Missões:**

1. Quando tenta enviar, validar se os campos estão preenchidos
2. Verificar se email contém `@`
3. Verificar se senha tem no mínimo 6 caracteres
4. Se válido, mostrar "Cadastro realizado!" em verde
5. Se inválido, mostrar a razão do erro em vermelho
6. **Bônus:** Limpar campos após cadastro bem-sucedido

---

## Exercício 3: Lista Dinâmica

**O Cenário:** Criar uma lista de tarefas onde o usuário adiciona/remove itens.

HTML:

```html
<div id="app-tarefas">
  <input type="text" id="nova-tarefa" placeholder="Nova tarefa" />
  <button id="btn-adicionar">Adicionar</button>
  <ul id="lista-tarefas"></ul>
</div>

<style>
  .tarefa {
    padding: 10px;
    background: #eee;
    margin: 5px 0;
  }
  .concluida {
    text-decoration: line-through;
    color: #999;
  }
</style>
```

---

**Missões:**

1. Quando clica "Adicionar", criar novo `<li>` with a tarefa
2. Usar `createElement` (não innerHTML)
3. Cada tarefa tem um botão "Remover"
4. Ao clicar na tarefa, marcar como concluída (classe `concluida`)
5. **Bônus:** Salvar tarefas em formato "✓ Tarefa" e "○ Tarefa"

---

## Exercício 4: Galeria com Filtro

**O Cenário:** Criar galeria de imagens com filtro por categoria.

HTML:

```html
<div id="galeria">
  <div>
    <button class="filtro" data-categoria="todos">Todos</button>
    <button class="filtro" data-categoria="gatos">Gatos</button>
    <button class="filtro" data-categoria="cachorro">Cachorros</button>
  </div>

  <div id="imagens"></div>
</div>
```

---

**Dados Mock:**

```js
const fotos = [
  { id: 1, categoria: "gatos", nome: "Miau" },
  { id: 2, categoria: "cachorro", nome: "Rex" },
  { id: 3, categoria: "gatos", nome: "Feliz" },
  { id: 4, categoria: "cachorro", nome: "Dino" },
];
```

---

**Missões:**

1. Criar função que renderiza fotos dinamicamente
2. Ao clicar em filtro, mostrar apenas fotos daquela categoria
3. Ao clicar "Todos", mostrar todas as fotos
4. Usar `data-categoria` para identificar qual filtro foi clicado
5. **Bônus:** Adicionar classe "ativo" no botão do filtro atual

---

## Desafio Final: App de Gerenciamento de Produtos

**O Cenário:** Você é contratado para criar um painel de produtos onde o gerente pode adicionar, remover e marcar como "destaque".

---

**Requisitos:**

1. **Formulário de Adicionar:**
   - Nome do produto
   - Preço
   - Categoria (select com opções: Eletrônicos, Alimentos, Roupas)

2. **Lista de Produtos:**
   - Exibir todos os produtos adicionados
   - Mostrar nome, preço e categoria
   - Cada produto tem botões: "Destaque", "Remover"

---

3. **Filtro por Categoria:**
   - Botões para filtrar por categoria
   - Mostrar contagem de itens por categoria

4. **Manipulação Dinâmica:**
   - Produtos destacados aparecem com fundo amarelo
   - Remover produto remove da lista
   - Validar campos antes de adicionar

5. **Desafio Extra:**
   - Calcular e exibir preço total
   - Salvar lista no localStorage (se souber)
   - Categorias aparecem automaticamente (sem hardcode)

---

**Estrutura sugerida:**

```html
<div id="app">
  <h1>Gerenciador de Produtos</h1>

  <form id="form-produto">
    <input type="text" id="nome" placeholder="Nome do produto" />
    <input type="number" id="preco" placeholder="Preço" />
    <select id="categoria">
      <option value="">Escolha categoria</option>
      <option value="Eletrônicos">Eletrônicos</option>
      <option value="Alimentos">Alimentos</option>
      <option value="Roupas">Roupas</option>
    </select>
    <button type="submit">Adicionar Produto</button>
  </form>

  <div id="filtros"></div>

  <ul id="lista-produtos"></ul>

  <div id="total">Total: R$ 0</div>
</div>
```

---

**Objetivos de Aprendizado:**

✓ Manipular múltiplos eventos
✓ Trabalhar com formulários complexos
✓ Criar e remover elementos dinamicamente
✓ Manipular classes e estilos
✓ Usar `dataset` (data attributes)
✓ Organizar código em funções reutilizáveis
✓ Pensar em fluxo de dados

---
