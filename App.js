import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Обработка логики входа (например, API вызов)
    console.log('Logging in with:', email, password);
  };

  const handleRegister = () => {
    // Обработка логики регистрации (например, API вызов)
    console.log('Registering with:', email, password);
  };

  const handlePasswordRecovery = () => {
    // Обработка логики восстановления пароля
    console.log('Recovering password for:', email);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вход / Регистрация</Text>
      <TextInput
        style={styles.input}
        placeholder="Электронная почта"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Войти" onPress={handleLogin} />
      <Button title="Зарегистрироваться" onPress={handleRegister} />
      <TouchableOpacity onPress={handlePasswordRecovery}>
        <Text style={styles.link}>Забыли пароль?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  link: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default AuthScreen;




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
