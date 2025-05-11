import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Linking } from 'react-native';

export default function NewsScreen() {
  const news = [
    {
      title: "O que você precisa saber sobre Mudanças Climáticas",
      url: "https://brasil.un.org/pt-br/175180-o-que-s%C3%A3o-mudan%C3%A7as-clim%C3%A1ticas?afd_azwaf_tok=eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJicmFzaWwudW4ub3JnIiwiZXhwIjoxNzQ2OTkzNTMxLCJpYXQiOjE3NDY5OTM1MjEsImlzcyI6InRpZXIxLTdiYzY5ZGY3Ny1teG5obiIsInN1YiI6IjQyODpmMDA3OjgwN2M6YjIwYTo0Mzc0OjdlNDA6ZjBjYTo0MmFkIiwiZGF0YSI6eyJ0eXBlIjoiaXNzdWVkIiwicmVmIjoiMjAyNTA1MTFUMTk1ODQxWi1yMTdiYzY5ZGY3N214bmhuaEMxU0FPcDM2ZzAwMDAwMDAzY2cwMDAwMDAwMGd1dmUiLCJiIjoiRU9YODdPV09Iald5MC1mVkRrYWtVelZPblRjMGRjRUxIX0tuUDFlaXRQayIsImgiOiJ0aFE0VkMzckt6dUpWVENZNTExSzJ4cFM0NjNNeG5SOWw2c2h3cV9ycGVRIn19.a2WugOkAd2jsX8rr-kT7EFpD6Shy9OJsmmH9FfPrescbv-mYQ4ze-EDQM5kBQTLvDyhjIrTyMZVX6wAKAuFc5_584LbzV0E-2-1vEMFnVRvXaC-IdT8xUafkNkLpF0A3eOeVE9Vyt3JXwlBzAWCcJPZo-cDvIEUknrZWSFRwjC5Q7Dyq_xL3f7d1bOxYHcSEYPtvEy4PP-CkyUHAJRF5Yib4uBLNVYQHOhq2NA7EAsxscPjHVrtbKE49G07AkmSiODBZtxt4zrL-gHDpz530MQFuKNlpzzyxQVxc3kXZHgtAXv6TSxM6TGf6A-VrHiX9mGdxObrLCSSwmhwz5N00Zw.WF3obl2IDtqgvMFRqVdYkD5s"
    },
    {
      title: "Como Reduzir sua Pegada Ecológica",
      url: "https://www.wwf.org.br/natureza_brasileira/reducao_de_impactos2/pegada_ecologica/"
    },
    {
      title: "O que é o Aquecimento Global",
      url: "https://www.climatempo.com.br/noticia/2021/06/16/o-que-e-aquecimento-global-5840"
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notícias Ambientais 📰</Text>

      {news.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.newsTitle}>{item.title}</Text>
          <Button
            title="Ler mais"
            onPress={() => Linking.openURL(item.url)}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0f7fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
