import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Dicas Ambientais 🌱</Text>

      <Image source={require("/assets/images/bike.png")} style={styles.imagem} />
      <Image source={require("/assets/images/planting.png")} style={styles.imagem} />

      {dicas.map((dica, index) => (
        <TipCard key={index} titulo={dica.titulo} descricao={dica.descricao} />
      ))}
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
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
});
