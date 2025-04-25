# 🌱 EcoClima - Conscientização Ambiental

Aplicativo mobile desenvolvido em **React Native** com foco em **educação ambiental**, trazendo informações sobre o clima, dicas ecológicas e ações sustentáveis para o dia a dia.

Projeto desenvolvido como parte da disciplina de **Mobile Application Development.**.

---

## 🎯 Objetivos

- Promover a conscientização sobre mudanças climáticas 🌍
- Ajudar o usuário a adotar atitudes sustentáveis no dia a dia 💧♻️
- Integrar tecnologias mobile para impactar positivamente a sociedade

---

## 📱 Telas

- **Home:** Apresentação do projeto e links para as funções principais  
- **Clima:** Consulta de clima com integração a uma API externa  
- **Dicas:** Sugestões sustentáveis para aplicar no cotidiano  
- **Cadastro:** Formulário com CEP para localização via API  
- **Sobre:** Informações sobre os desenvolvedores  
- **Ajuda:** Tela extra fora das abas, acessível via Stack Navigation

---

## 🧭 Navegação

O app utiliza **duas estratégias de navegação**:

- **Tab Navigation:** Para acessar as principais funcionalidades do app  
- **Stack Navigation:** Para acessar telas específicas como a de Ajuda

---

## 🖼️ Design

- Interface agradável e responsiva  
- No mínimo **duas imagens por tela**, contextualizadas ao conteúdo  
- Cores suaves (#f0fdf4, #166534, etc) e fontes acessíveis

---

## 🧩 Funcionalidades

- ✅ Múltiplas telas com imagens e conteúdos informativos  
- ✅ Navegação combinada: Stack + Tabs  
- ✅ Formulário com campo de CEP e integração à API [ViaCEP](https://viacep.com.br/)  
- ✅ Componente `Linking` para abrir links externos  
- ✅ Componentização e organização de código

---

## 🔗 Tecnologias Utilizadas

- React Native com Expo
- React Navigation (`@react-navigation/native`, `@react-navigation/bottom-tabs`, `@react-navigation/native-stack`)
- Ionicons (ícones)
- API pública ViaCEP para busca de endereço
- API de clima (ex: OpenWeather, ClimaTempo)
- Componente `Linking` para abrir URLs

---

## 👨‍💻 Desenvolvedores

- Beatriz Ferreira Cruz
- Gabrielly Campos Macedo

---

## 🗂️ Organização do Projeto

```
📁 src
 ┣ 📁 screens       → Telas principais do app
 ┣ 📁 components    → Componentes reutilizáveis
 ┣ 📁 navigation    → Configurações de navegação
 ┗ 📁 assets/images → Imagens utilizadas nas telas
```

---

## 🚀 Como Executar

```bash
npm install
npm start
```

É necessário ter o **Expo CLI** instalado e o app **Expo Go** no celular para testar.

---

## 🌐 Exemplos de Integração com APIs

### 🔍 Buscar Endereço por CEP (ViaCEP)
**URL:** `https://viacep.com.br/ws/01001000/json/`  
**Retorno esperado:**
```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP"
}
```

Essa API é utilizada no formulário da tela de Cadastro para preencher automaticamente os dados da cidade e estado com base no CEP informado.

---

### 🌤️ Buscar Clima Atual (OpenWeather)
**URL (exemplo):** `https://api.openweathermap.org/data/2.5/weather?q=São Paulo&appid=SUA_CHAVE&units=metric&lang=pt_br`  
**Retorno esperado (parcial):**
```json
{
  "weather": [
    {
      "description": "céu limpo",
      "icon": "01d"
    }
  ],
  "main": {
    "temp": 28.4,
    "humidity": 65
  },
  "name": "São Paulo"
}
```

Essa API é usada na tela de Clima para exibir a temperatura, condição atual e um ícone representativo da cidade escolhida.

---
