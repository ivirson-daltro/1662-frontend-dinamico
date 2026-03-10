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
