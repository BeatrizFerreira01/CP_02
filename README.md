# 🌱 Projeto - EcoClima

**Aplicativo de Conscientização Ambiental com Clima Atual, Dicas Sustentáveis e Informações Climáticas.**  
Projeto desenvolvido para a disciplina de **Mobile Application Development**.

---

## 🚀 Tecnologias Usadas
- JavaScript (React Native)
- Expo (EAS Build para geração de APK)
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
git clone https://github.com/BeatrizFerreira01/EcoClima.git
```

### 3. Instalar as dependências
```bash
npm install
```

### 4. Executar o projeto
```bash
npm start
```

Abra com o app **Expo Go** ou utilize um emulador Android.

---

## 📱 Telas

| Tela         | Descrição |
|--------------|-----------|
| Home         | Mensagem de boas-vindas e alerta climático |
| Clima        | Consulta de temperatura e umidade via API |
| News         | Notícias sobre mudanças climáticas |
| Dicas        | Sugestões sustentáveis em cards |
| Sobre        | Informações sobre as desenvolvedoras |
| Ajuda        | Tela acessada via Stack Navigation |

---

## 🔌 Integração com API

### Exemplo de chamada:
```http
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

- Splash screen personalizada com imagem temática 🌍
- Ícone do app customizado para Android e web
- Interface com cores ecológicas
- Layout responsivo e intuitivo

---

## 🧠 Funcionalidades Atendidas

- 5+ telas implementadas com navegação entre elas
- Navegação combinada com **Tab Navigation** e **Stack Navigation**
- Imagens temáticas por tela
- Formulário para consultar clima por cidade
- Componentização: `TipCard`, `WeatherCard`
- Uso de `Linking` para acesso a sites externos como Greenpeace
- Geração de APK utilizando EAS Build

---

## 🗃️ Estrutura do Projeto

```bash
📁 src
 ┣ 📁 components       → TipCard, WeatherCard
 ┣ 📁 navigation       → StackNavigator, TabNavigator
 ┣ 📁 screens          → HomeScreen, WeatherScreen, NewsScreen, TipsScreen, AboutScreen, AjudaScreen
 ┗ 📁 services         → weatherApi.js
📁 assets
 ┣ 📄 iconn.jpg        → Ícone do app
 ┣ 📄 splash.webp      → Imagem da splash screen
 ┗ 📄 demais imagens   → Usadas nas telas
```

---

## 👩‍💻 Desenvolvedoras
- Beatriz Ferreira Cruz  
- Gabrielly Campos Macedo

---

## 📝 Observações

Este projeto foi desenvolvido como parte da disciplina **Mobile Application Development**, com foco em:

- Criação de aplicativo mobile com React Native  
- Integração com API externa (OpenWeatherMap)  
- Exibição de dados climáticos em tempo real  
- Customização visual com splash screen e ícone personalizado  
- Organização de código com boas práticas e navegação estruturada  
- Uso de navegação Stack e Tabs combinadas  
- Geração e publicação do APK usando EAS Build
