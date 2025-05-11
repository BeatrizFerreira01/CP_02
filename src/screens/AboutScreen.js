import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AboutScreen() {
  const abrirSite = () => {
    Linking.openURL('https://www.greenpeace.org/brasil/');
  };

  const abrirGithubBeatriz = () => {
    Linking.openURL('https://github.com/BeatrizFerreira01');
  };

  const abrirGithubGabrielly = () => {
    Linking.openURL('https://github.com/gabimaced0');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Desenvolvedores</Text>

      {/* Beatriz */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://github.com/BeatrizFerreira01.png' }}
          style={styles.imagemPerfil}
        />
        <Text style={styles.nome}>Beatriz Ferreira Cruz</Text>
        <TouchableOpacity onPress={abrirGithubBeatriz}>
          <FontAwesome name="github" size={30} color="#1f2937" />
        </TouchableOpacity>
      </View>

      {/* Gabrielly */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://github.com/gabimaced0.png' }}
          style={styles.imagemPerfil}
        />
        <Text style={styles.nome}>Gabrielly Campos Macedo</Text>
        <TouchableOpacity onPress={abrirGithubGabrielly}>
          <FontAwesome name="github" size={30} color="#1f2937" />
        </TouchableOpacity>
      </View>

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
    marginBottom: 30,
  },
  card: {
    alignItems: 'center',
    marginBottom: 30,
  },
  imagemPerfil: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    color: '#1f2937',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#166534',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
