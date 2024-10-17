import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [number, onChangeText] = useState('');
  const [number2, onChangeText2] = useState('');
  const [resultado, setResultado] = useState('');

  const soma = () => {
    setResultado(Number(number) + Number(number2));
  };

  const subtrai = () => {
    setResultado(Number(number) - Number(number2));
  };

  const multiplica = () => {
    setResultado(Number(number) * Number(number2));
  };

  const divide = () => {
    setResultado(Number(number) / Number(number2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULADORA</Text>

      <TextInput
        onChangeText={onChangeText}
        value={number}
        placeholder="Insira o número aqui"
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        onChangeText={onChangeText2}
        value={number2}
        placeholder="Insira o número aqui"
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={soma}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={subtrai}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={multiplica}>
          <Text style={styles.buttonText}>X</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={divide}>
          <Text style={styles.buttonText}>÷</Text>
        </Pressable>
      </View>

      {resultado !== '' && (
        <Pressable style={styles.resultButton}>
          <Text style={styles.resultText}>O valor é {resultado}</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
    backgroundColor: '#E3F2FD', 
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 18,
  },

  buttonContainer: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#FF5733', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  resultButton: {
    backgroundColor: '#28A745', 
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },

  resultText: {
    color: '#FFF', 
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default App;
