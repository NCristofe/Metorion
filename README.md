# Metorion

Aplicação web de previsão do tempo que exibe as condições climáticas em tempo real de qualquer cidade do mundo, com design escuro e atmosférico.

🔗 **[Acesse o Metorion](https://690ad50fa2135fb41ecb6e94--glistening-sawine-8ea770.netlify.app)**

---

## Funcionalidades

- Busca por qualquer cidade do mundo
- Temperatura atual em °C
- Umidade relativa do ar
- Velocidade do vento
- Condição do tempo com ícone
- Suporte à tecla Enter na busca
- Mensagens de erro amigáveis (cidade inválida, falha de conexão)
- Layout responsivo (mobile, tablet e desktop)

---

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Marcação | HTML5 |
| Estilo | CSS3 (variáveis, flexbox, media queries) |
| Lógica | JavaScript ES6+ (async/await, Fetch API) |
| Dados | [OpenWeatherMap API](https://openweathermap.org/) |
| Fundo | [LoremFlickr](https://loremflickr.com/) |
| Fonte | [Montserrat](https://fonts.google.com/specimen/Montserrat) |

---

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/NCristofe/Metorion.git
   cd Metorion
   ```

2. Obtenha uma chave de API gratuita em [openweathermap.org/api](https://openweathermap.org/api)

3. Abra `scripts.js` e substitua o valor de `API_KEY`:
   ```js
   const API_KEY = "sua_chave_aqui";
   ```

4. Abra `index.html` no navegador — nenhum servidor necessário.

---

## Paleta de cores

| Variável | Hex | Uso |
|---|---|---|
| `--color-bg-dark` | `#1C0F12` | Fundo do card |
| `--color-surface` | `#2E1B20` | Input e botão |
| `--text-primary` | `#E0B0B5` | Texto principal |
| `--text-placeholder` | `#A37C7F` | Placeholder e detalhes |

---

## Estrutura

```
Metorion/
├── index.html
├── scripts.js
├── style.css
└── img/
    ├── metorion.png
    ├── weather.png
    ├── icon-climate.png
    └── git-hub-icon.png
```

---

Desenvolvido por [Natanael Cristofe](https://github.com/natanael731)
