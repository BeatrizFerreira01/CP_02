import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function AjudaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Precisa de Ajuda? 🤝</Text>

      <Text style={styles.text}>
        Este app ajuda você a acompanhar o clima, aprender sobre sustentabilidade e agir pelo planeta.
      </Text>

      <Text style={styles.subtitle}>Links Úteis:</Text>

      <TouchableOpacity onPress={() => Linking.openURL('https://brasil.un.org/pt-br/240474-o-que-você-precisa-saber-sobre-mudança-climática')}>
        <Text style={styles.link}>🌍 ONU - Mudança Climática</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://www.ibama.gov.br')}>
        <Text style={styles.link}>🌿 IBAMA - Meio Ambiente no Brasil</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Dúvidas? Envie um e-mail para suporte@ecoapp.com
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#166534',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#166534',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 15,
  },
  link: {
    fontSize: 16,
    color: '#166534',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  footer: {
    fontSize: 14,
    marginTop: 20,
    color: '#555',
    textAlign: 'center',
  },
});
