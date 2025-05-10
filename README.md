# 🌱 Projeto - EcoClima

**Aplicativo de Conscientização Ambiental com Clima Atual, Dicas Sustentáveis e Informações Climáticas.**  
Projeto desenvolvido para a disciplina de **Mobile Application Development**.

---

## 🚀 Tecnologias Usadas
- JavaScript (React Native)
- Expo (geração de APK)
- React Navigation (Stack + Tabs)
- OpenWeatherMap API (dados climáticos)
- Linking API (abertura de links externos)

---

## 🛠️ Como Rodar o Projeto

### 1. Pré-requisitos
- Node.js e npm instalados
- Expo CLI (`npm install -g expo-cli`)
- Emulador Android ou app Expo Go

### 2. Clonar o repositório
```bash
git clone https://github.com/BeatrizFerreira01/CP_02.git
```

### 3. Instalar as dependências
```bash
npm install
```

### 4. Executar o projeto
```bash
npm start
```
Use o app **Expo Go** no celular ou Android Studio para rodar.

---

## 📱 Telas

| Tela         | Descrição |
|--------------|-----------|
| Home         | Mensagem de boas-vindas e alerta climático |
| Clima        | Consulta de temperatura e umidade via API |
| News         | Lista de notícias sobre o clima |
| Dicas        | Sugestões sustentáveis em cards |
| Sobre        | Informações das desenvolvedoras |
| Ajuda        | Tela acessada via Stack Navigation |

---

## 🔌 Integração com API

### Exemplo de chamada:
```url
https://api.openweathermap.org/data/2.5/weather?q=São Paulo&appid=SUA_CHAVE&units=metric&lang=pt_br
```

### Exemplo de retorno:
```json
{
  "weather": [{ "description": "céu limpo" }],
  "main": { "temp": 28.4, "humidity": 65 },
  "name": "São Paulo"
}
```

---

## 🎨 Design

- Splash Screen personalizada ✅
- Ícone de aplicativo customizado ✅
- Cores coerentes com o tema ambiental
- Tipografia simples e interface acessível

---

## 🧠 Funcionalidades Atendidas

- 5+ telas implementadas com navegação
- Navegação Tab + Stack
- Imagens contextualizadas por tela
- Formulário para consultar clima por cidade
- Componentização: TipCard, WeatherCard
- Linking: acesso ao site do Greenpeace
- Geração de APK (`eas build -p android`)

---

## 🗃️ Estrutura do Projeto

```bash
📁 src
 ┣ 📁 components       → TipCard, WeatherCard
 ┣ 📁 navigation       → StackNavigator, TabNavigator
 ┣ 📁 screens          → HomeScreen, WeatherScreen, NewsScreen, TipsScreen, AboutScreen, AjudaScreen
 ┗ 📁 services         → weatherApi.js
📁 assets
 ┣ 📄 iconn.jpg         → Ícone do app
 ┣ 📄 splash.webp       → Imagem da splash screen
 ┗ 📄 demais imagens   → Usadas nas telas
```

---

## 👩‍💻 Desenvolvedoras
- Beatriz Ferreira Cruz
- Gabrielly Campos Macedo

---

## 📝 Observações

Este projeto tem como foco a conscientização ambiental, utilizando tecnologias modernas e seguindo boas práticas de desenvolvimento mobile.

Ele atende **todos os critérios solicitados pela disciplina**, incluindo o **desafio da integração com API**, além da **customização visual completa com ícone e splash**, e **publicação em APK**.
