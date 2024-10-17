import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, Image, Modal, Alert } from 'react-native';

const App = () => {
    const [number, setNumber] = useState(7320.92);
    const [valor, setValor] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [operationType, setOperationType] = useState('');

    const operacao = (type) => {
        const multaOuBonus = type === 'sacar' ? 1.025 : 1.01;
        const valorComMulta = Number(valor) * multaOuBonus;
        const novoSaldo = type === 'sacar' ? Number(number) - valorComMulta : Number(number) + valorComMulta;

        setNumber(novoSaldo);
        setIsModalOpen(false); 
    };

    const openModal = (type) => {
        setOperationType(type);
        setIsModalOpen(true);
    };

    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('./img/itau.png')}
            />
            <Text style={styles.saldo}>Saldo: R${number.toFixed(2)}</Text>
            <View style={styles.alinha}>
                <Image 
                    style={styles.money}
                    source={require('./img/dinheiro.png')}
                />
                <TextInput
                    id='value' 
                    value={valor}
                    keyboardType='numeric'
                    style={styles.input}
                    placeholder='Digite o Valor'
                    onChangeText={setValor}
                />
            </View>
            <View style={styles.options}>
                <Pressable onPress={() => openModal('sacar')}><Text style={styles.botao}>Sacar</Text></Pressable>
                <Pressable onPress={() => openModal('depositar')}><Text style={styles.botao}>Depositar</Text></Pressable>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalOpen}
              onRequestClose={() => {
                Alert.alert('A modal foi fechada');
                setIsModalOpen(!isModalOpen);
              }}>
              <View style={styles.centraliza}>
                <View style={styles.modal}>
                  <Pressable 
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setIsModalOpen(!isModalOpen)}><Text>X</Text></Pressable>
                  <Text>Valor Atual: R${number.toFixed(2)}</Text>
                  <Text>Valor Final: R${(operationType === 'sacar' ? number - (Number(valor) * 1.025) : number + (Number(valor) * 1.01)).toFixed(2)}</Text>
                  <Text>Tem certeza que deseja {operationType === 'sacar' ? 'sacar' : 'depositar'}?</Text>
                  <View style={styles.alinha}> 
                  <Pressable 
                    onPress={() => operacao(operationType)}><Text style={styles.confirm}>Sim</Text></Pressable>
                  <Pressable 
                    onPress={() => setIsModalOpen(false)}><Text style={styles.confirm}>Não</Text></Pressable>
                  </View>
                </View>
              </View>
          </Modal>
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

    logo: {
        width: 180,
        height: 180,
        marginBottom: 20
    },

    saldo: {
        marginVertical: 30,
        fontSize: 18,
        fontWeight: 'bold'
    },

    alinha: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 25,
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },

    input: {
        width: 250,
        marginLeft: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5
    },

    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },

    money: {
        width: 25,
        height: 25
    },

    botao: {
        backgroundColor: '#FF5733',
        borderRadius: 8,
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: '#FFF', 
        width: 160,
        marginHorizontal: 10 
    },

    centraliza: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },

    modal: {
        margin: 30,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 40,
        alignItems: 'center',
        shadowColor: '#333',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 8,
    },

    buttonClose: {
        alignSelf: 'flex-end',
        fontSize: 12,
        padding: 5,
        color: '#FF5733',
    },

    confirm: {
        backgroundColor: '#28A745',
        marginTop: 30,
        marginHorizontal: 15,
        width: 60,
        borderRadius: 5,
        color: '#FFF', 
        textAlign: 'center',
        paddingVertical: 10
    }
});

export default App;
