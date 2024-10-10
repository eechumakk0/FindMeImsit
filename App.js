import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';

// Компонент для экранa аутентификации
const AuthScreen = ({ onNavigateToWelcome }) => {
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
      <Button title="Перейти к приветствию" onPress={onNavigateToWelcome} />
    </View>
  );
};

// Компонент для приветственного сообщения
const WelcomeScreen = () => {
  const [username, setUsername] = useState('');

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
};

// Основной компонент приложения
const App = () => {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);

  return (
    <View style={styles.appContainer}>
      {showWelcomeScreen ? (
        <WelcomeScreen />
      ) : (
        <AuthScreen onNavigateToWelcome={() => setShowWelcomeScreen(true)} />
      )}
    </View>
  );
};

// Стили для компонентов
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
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

export default App;
});


// HomeScreen.js
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const jobListings = [/* массив вакансий */];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Поиск по критериям" onPress={() => navigation.navigate('Search')} />

      <FlatList
        data={jobListings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.company}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

// SearchScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, Switch } from 'react-native';

const SearchScreen = ({ navigation }) => {
  const [age, setAge] = useState('');
  const [fullTime, setFullTime] = useState(false);

  const handleSearch = () => {
    // Здесь логика поиска вакансий
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Возраст:</Text>
      <TextInput
        placeholder="Введите возраст"
        value={age}
        onChangeText={setAge}
      />

      <Text>Полный рабочий день:</Text>
      <Switch
        value={fullTime}
        onValueChange={(value) => setFullTime(value)}
      />

      <Button title="Поиск" onPress={handleSearch} />
    </View>
  );
};

export default SearchScreen;





