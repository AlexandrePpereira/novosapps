import { useEffect, useState } from "react";
import { View, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, ScrollView } from "react-native";
import Bar from "../../../components/Bar";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";

const NewMemory = () => {
    const [formData, setFormData] = useState({
        Titulo: '',
        Ano: '',
        Localizacao: '',
        Descricao: '',
        Img: ''
    });
    const [image, setImage] = useState('');
    const router = useRouter();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            handleChangeInput('Img', result.assets[0].uri);
        }
    };

    const handleChangeInput = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const storeData = async (novaMemoria) => {
        if (novaMemoria.Ano === '' || novaMemoria.Titulo === '' || novaMemoria.Img === '' || novaMemoria.Descricao === '' || novaMemoria.Localizacao === '') {
            alert('Preencha todos os campos');
        } else {
            try {
                const memoriaArmazenada = await AsyncStorage.getItem('memoria');
                const array = memoriaArmazenada ? JSON.parse(memoriaArmazenada) : [];
                array.push(novaMemoria);
                const jsonArray = JSON.stringify(array);
                await AsyncStorage.setItem('memoria', jsonArray);
                router.push('/memoria');
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <>
            <Bar
                Titulo={'Adicionar Memória'}
                href={'/memoria'}
                icon={<Entypo name="chevron-left" size={24} color="white" />}
                cor={'#28A745'}
            />
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.form}>
                        <TextInput
                            placeholder="Título"
                            value={formData.Titulo}
                            onChangeText={(value) => handleChangeInput('Titulo', value)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Ano"
                            value={formData.Ano}
                            onChangeText={(value) => handleChangeInput('Ano', value)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Localização"
                            value={formData.Localizacao}
                            onChangeText={(value) => handleChangeInput('Localizacao', value)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Descrição"
                            value={formData.Descricao}
                            onChangeText={(value) => handleChangeInput('Descricao', value)}
                            style={styles.input}
                        />
                        <View style={styles.btnsImgRow}>
                            <Pressable
                                style={styles.btnimg}
                                onPress={pickImage}
                            >
                                <FontAwesome name="photo" size={24} color="#28A745" />
                                <Text style={styles.pimg}>Adicionar foto</Text>
                            </Pressable>
                        </View>
                        {image && <Image style={styles.foto} source={{ uri: image }} />}
                    </View>
                </ScrollView>
                <Pressable style={styles.btn} onPress={() => storeData(formData)}>
                    <Text style={styles.p}>Adicionar</Text>
                </Pressable>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 30,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    form: {
        width: 340,
        minHeight: '50vh',
    },
    input: {
        height: 50,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#e8e8e8',
        fontSize: 18
    },
    btnimg: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#28A745',
        borderRadius: 5
    },
    foto: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginTop: 20,
    },
    btnsImgRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: '#28A745',
        width: 340,
        padding: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    p: {
        color: 'white',
        fontSize: 20,
    },
    pimg: {
        color: '#28A745',
        marginLeft: 6,
        fontSize: 18,
    }
})

export default NewMemory;
