import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import axios from 'axios';

export default function WeatherScreen() {
  const [cidade, setCidade] = useState('');
  const [clima, setClima] = useState(null);

  const buscarClima = async () => {
    if (!cidade) {
      Alert.alert('Atenção', 'Informe o nome da cidade!');
      return;
    }

    try {
      const apiKey = 'a39bf42f530592e8ea221692d4f03f5f';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`;

      const response = await axios.get(url);
      setClima(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível encontrar o clima dessa cidade.');
      setClima(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consultar Clima</Text>


      <TextInput
        style={styles.input}
        placeholder="Digite o nome da cidade"
        value={cidade}
        onChangeText={setCidade}
      />

      <TouchableOpacity style={styles.botao} onPress={buscarClima}>
        <Text style={styles.textoBotao}>Buscar </Text>
      </TouchableOpacity>



      {clima && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoTexto}>Cidade: {clima.name}</Text>
          <Text style={styles.resultadoTexto}>Temperatura: {clima.main.temp}°C</Text>
          <Text style={styles.resultadoTexto}>Clima: {clima.weather[0].description}</Text>
          <Text style={styles.resultadoTexto}>Umidade: {clima.main.humidity}%</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0fdf4',
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#14532d',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#166534',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imagem: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 15,
  },
  resultado: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#d1fae5',
    borderRadius: 10,
  },
  resultadoTexto: {
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 5,
  },
});
