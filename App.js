import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [username, setUsername] = useState(''); // Храним имя пользователя в состоянии

  const showAlert = () => {
    if (!username) {
      Alert.alert("Ошибка!", "Пожалуйста, введите имя пользователя."); // Проверка на пустое имя
      return;
    }
    Alert.alert("Привет!", `Добро пожаловать, ${username}!`); // Показываем приветственное сообщение
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать в наше приложение для знакомств!</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Введите ваше имя" // Плейсхолдер
        value={username} // Значение из состояния
        onChangeText={setUsername} // Обновляем состояние при вводе текста
      />
      <Button title="Показать приветствие" onPress={showAlert} />
    </View>
  );
}

// Стили для компонентов
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Добавлено отступа внутри контейнера
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center', // Выравнивание текста по центру
  },
  input: {
    height: 40, // Высота поля ввода
    borderColor: 'gray', // Цвет рамки
    borderWidth: 1, // Ширина рамки
    marginBottom: 20, // Отступ снизу
    width: '100%', // Ширина поля ввода
    paddingHorizontal: 10, // Отступы внутри по горизонтали
  },
});
