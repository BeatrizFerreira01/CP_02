import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function AjudaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Ajuda</Text>
      
      <Text style={styles.text}>
        Aqui você pode encontrar respostas para dúvidas frequentes sobre o uso do app.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 10,
  },
  text: {
    fontSize: 16, textAlign: 'center',
  },
});
