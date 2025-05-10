import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import TipCard from '../components/TipCard';

export default function TipsScreen() {
  const dicas = [
    {
      titulo: 'Use transporte sustentável',
      descricao: 'Prefira caminhar, pedalar ou usar transporte público. Ajuda o meio ambiente e sua saúde!',
    },
    {
      titulo: 'Reduza o uso de plástico',
      descricao: 'Evite sacolas plásticas e embalagens descartáveis. Leve sua ecobag!',
    },
    {
      titulo: 'Economize água',
      descricao: 'Feche a torneira ao escovar os dentes e tome banhos mais curtos.',
    },
    {
      titulo: 'Plante árvores',
      descricao: 'Elas ajudam a capturar CO₂, proporcionam sombra e contribuem com a biodiversidade.',
    },
  ];

  const abrirSite = () => {
    Linking.openURL('https://www.greenpeace.org/brasil/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Dicas Ambientais 🌱</Text>

      {dicas.map((dica, index) => (
        <TipCard key={index} titulo={dica.titulo} descricao={dica.descricao} />
      ))}

      <View style={styles.botaoContainer}>
        <TouchableOpacity style={styles.botao} onPress={abrirSite}>
          <Text style={styles.textoBotao}>Visite o Greenpeace 🌱</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0fdf4',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#14532d',
    marginBottom: 20,
    textAlign: 'center',
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#166534',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
