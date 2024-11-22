import React from "react";
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    const data = [
        { id: '1', link: './banco/Banco', titulo: 'Banco' },
        { id: '2', link: '/calculadora/Calculadora', titulo: 'Calculadora APP' },
        { id: '3', link: '/lista-tarefa/Lista', titulo: 'ListaTarefas' },
        { id: '4', link: '/login/Login', titulo: 'Login' },
        { id: '5', link: '/picker/Pokemon', titulo: 'Pokemón' },
        { id: '6', link: '/splash-screen/SplashScreen', titulo: 'Splash Screen' },
        { id: '7', link: '/sobre-mim', titulo: 'Sobre mim' },
        { id: '8', link: '/memoria', titulo: 'Memória' },
        { id: '9', link: '/scanQR', titulo: 'Scan QR' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Image
                    style={styles.logo}
                    source={require('./a.png')}
                />
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Link style={styles.link} href={item.link}>
                            <Text style={styles.linkText}>{item.titulo}</Text>
                        </Link>
                    )}
                />
          
                    </ScrollView>
               
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8bcff6'
    },

    scrollView: {
        alignItems: 'center'
    },

    logo: {
        width: 400,
        height: 400,
        marginBottom: 20
    },

    link: {
        margin: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#4CAF50', 
        backgroundColor: '#4CAF50', 
        borderRadius: 8
    },

    linkText: {
        color: '#FFFFFF', 
        fontSize: 20,
        textAlign: "center"
    },
    ScrollView: {
        color: '#8bcff6'
    },
});
