import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function AboutScreen() {
  const abrirSite = () => {
    Linking.openURL('https://www.greenpeace.org/brasil/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Desenvolvedores</Text>

      <Text style={styles.nome}>Beatriz Ferreira Cruz</Text>
      <Text style={styles.nome}>Gabrielly Campos Macedo</Text>


      <TouchableOpacity style={styles.botao} onPress={abrirSite}>
        <Text style={styles.textoBotao}>Visite o Greenpeace 🌱</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eafaf1',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#14532d',
    marginBottom: 20,
  },
  nome: {
    fontSize: 18,
    color: '#1f2937',
    marginTop: 10,
  },
  imagem: {
    width: 250,
    height: 180,
    borderRadius: 10,
    marginVertical: 15,
  },
  botao: {
    backgroundColor: '#166534',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
