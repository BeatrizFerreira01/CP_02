# 🌱 EcoClima - Conscientização Ambiental

Aplicativo mobile desenvolvido em **React Native** com foco em **educação ambiental**, trazendo informações sobre o clima, dicas ecológicas e ações sustentáveis para o dia a dia.

Projeto desenvolvido como parte da disciplina de **Mobile Application Development**.

---

## 🎯 Objetivos

- Promover a conscientização sobre mudanças climáticas 🌍  
- Ajudar o usuário a adotar atitudes sustentáveis no dia a dia 💧♻️  
- Integrar tecnologias mobile para impactar positivamente a sociedade

---

## 📱 Telas

- **Home:** Apresentação do projeto e links para as funções principais  
- **Clima:** Consulta de clima com integração a uma API externa  
- **News:** Notícias sobre mudanças climáticas  
- **Dicas:** Sugestões sustentáveis para aplicar no cotidiano  
- **Sobre:** Informações sobre os desenvolvedores  
- **Ajuda:** Tela extra fora das abas, acessível via Stack Navigation  

---

## 🧭 Navegação

O app utiliza **duas estratégias de navegação**:

- **Tab Navigation:** Para acessar as principais funcionalidades do app  
- **Stack Navigation:** Para acessar telas específicas como a de Ajuda

---

## 🧩 Funcionalidades

- ✅ Múltiplas telas com imagens e conteúdos informativos  
- ✅ Navegação combinada: Stack + Tabs  
- ✅ Formulário com campo e integração à API OpenWeather  
- ✅ Componente `Linking` para abrir links externos  
- ✅ Componentização e organização de código  
- ✅ **Customização da tela Splash** com imagem personalizada  
- ✅ **Ícone customizado** para o app no Android e Web  
- ✅ **Geração do APK com EAS Build**

---

## 🖼️ Design

- Interface agradável, acessível e coerente com o tema  
- Cores escolhidas com base em tons ecológicos e fundo escuro `#000000`  
- No mínimo **duas imagens por tela**, contextualizadas ao conteúdo  
- Splash screen personalizada com imagem realista e limpa  
- Ícone exclusivo representando o planeta Terra 🌎

---

## 🔗 Tecnologias Utilizadas

- React Native com Expo  
- React Navigation  
- Expo EAS Build  
- API OpenWeather  
- `Linking` para navegação web  
- Ícones com `@expo/vector-icons`

---

## 👩‍💻 Desenvolvedoras

- Beatriz Ferreira Cruz  
- Gabrielly Campos Macedo

---

## 🗂️ Organização do Projeto

```
📁 src
 ┣ 📁 screens       → Telas principais do app
 ┣ 📁 components    → Componentes reutilizáveis
 ┣ 📁 navigation    → Configurações de navegação
 ┣ 📁 services      → Conexão com API externa
 ┗ 📁 assets        → Ícones, splash e imagens utilizadas
```

---

## 🚀 Como Executar

```bash
npm install
npm start
```

- Requer **Expo Go** no celular  
- Para gerar o `.apk`:  
```bash
eas build -p android --profile preview
```

---

## 🌐 Exemplo de API - OpenWeather

```http
https://api.openweathermap.org/data/2.5/weather?q=São Paulo&appid=SUA_CHAVE&units=metric&lang=pt_br
```

**Retorno esperado:**
```json
{
  "weather": [
    { "description": "céu limpo", "icon": "01d" }
  ],
  "main": { "temp": 28.4, "humidity": 65 },
  "name": "São Paulo"
}
```

---

## ✅ Requisitos Atendidos

- [x] 5+ telas funcionais  
- [x] Interface agradável  
- [x] Duas estratégias de navegação  
- [x] Duas imagens por tela  
- [x] 1 formulário com API externa  
- [x] Linking externo  
- [x] Código organizado com componentização  
- [x] Splash personalizada  
- [x] Ícone personalizado  
- [x] Geração de `.apk` (com EAS)

---

## 📝 Considerações Finais

Este app aborda uma **questão social urgente: o meio ambiente**. Desenvolvido com tecnologias modernas, ele une **educação, design e integração real com APIs**, entregando uma solução mobile com propósito e valor.

---
