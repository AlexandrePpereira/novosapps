import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, Image } from 'react-native';
import axios from 'axios';
import Modal from "react-native-modal";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modal, setModal] = useState('');

    async function registerUser() {
        if (!email || !password || !name) {
            return;
        }

        try {
            const response = await axios.post(
                `https://taskhub-s37f.onrender.com/auth/signup`,
                { "name": name, "email": email, "password": password },
            );
            if (response.status === 200) {
                setModal('Usuário criado com sucesso');
                setIsModalOpen(true);
            } else {
                setModal('Criação de usuário falhou');
                setIsModalOpen(true);
            }
        } catch (e) {
            setModal('Criação de usuário falhou');
            setIsModalOpen(true);
        }
    }

    return (
        <SafeAreaView style={styles.main}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalOpen}
                onRequestClose={() => {
                    setIsModalOpen(!isModalOpen);
                }}>

                <View style={styles.modal}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setIsModalOpen(!isModalOpen)}><Text>X</Text></Pressable>
                    <Text style={styles.modalText}>{modal}</Text>
                    <Pressable
                        onPress={() => setIsModalOpen(() => !isModalOpen)}
                    ><Text style={styles.confirm}>OK</Text></Pressable>
                </View>
            </Modal>
            <Image
                style={styles.containerImg}
                source={require('./img/login.png')}
            />
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTxt}>Nome</Text>
                        <TextInput style={styles.input} onChangeText={(text) => setName(text)}></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTxt}>Email</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='email-address'
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTxt}>Senha</Text>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                    <Pressable onPress={registerUser}><Text style={styles.botao}>Fazer Login</Text></Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    modal: {
        margin: 20,
        backgroundColor: '#FFFFE0',
        borderRadius: 20,
        padding: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 6,
        },
        shadowOpacity: 0.60,
        shadowRadius: 4,
        elevation: 5,
    },

    modalText: {
        color: '#000',
        fontSize: 16,
        marginVertical: 10,
    },

    buttonClose: {
        alignSelf: 'flex-end',
        fontSize: 10,
        marginBottom: 20,
        marginRight: 10
    },

    confirm: {
        backgroundColor: 'red', 
        marginTop: 25,
        marginBottom: 10,
        marginHorizontal: 10,
        width: 50,
        borderRadius: 2,
        color: '#FFF',
        textAlign: 'center',
        padding: 5
    },

    container: {
        flexDirection: "column",
        alignItems: "center"
    },
    
    containerImg: {
        width: 150,
        height: 150,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 50,
    },

    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 5,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 350,
        borderRadius: 10,
    },

    inputContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline"
    },

    botao: {
        backgroundColor: 'red',
        borderRadius: 3,
        textAlign: 'center',
        padding: 5,
        color: '#FFF',
        width: 150,
        margin: 10
    },

    inputTxt: {
        marginLeft: 12,
    }
});
