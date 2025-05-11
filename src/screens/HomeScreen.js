import React from 'react';
import { View, Text, StyleSheet,  TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'expo-image';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

    <Image
      source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/17260371-mao-apontando-o-dedo-para-voce-vetor.jpg' }}
      style={{ width: 380, height: 300 }}
      contentFit="cover"
    />
      
      <Text style={styles.titulo}>O planeta precisa de você 🌍</Text>

    
      <Text style={styles.texto}>
        Mudanças climáticas são uma realidade. Temperaturas extremas, secas, enchentes e desastres
        naturais estão cada vez mais frequentes.
      </Text>

      <Text style={styles.texto}>
        Faça parte da solução. Nosso aplicativo ajuda você a acompanhar o clima da sua cidade,
        adotar atitudes sustentáveis e ficar por dentro das ações ambientais.
      </Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Clima')}>
        <Text style={styles.textoBotao}>Ver clima agora </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Dicas')}>
        <Text style={styles.textoBotao}>Ver dicas ambientais </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Ajuda')}>
        <Text style={styles.textoBotao}>Precisa de ajuda? </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0fdf4',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#14532d',
    textAlign: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginVertical: 15,
  },
  texto: {
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 10,
    textAlign: 'justify',
  },
  botao: {
    backgroundColor: '#166534',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
