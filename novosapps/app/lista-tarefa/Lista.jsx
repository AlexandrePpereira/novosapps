import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, Pressable } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        padding: 16
    },

    quadro: {
        backgroundColor: '#ADD8E6',
        width: '100%',
        maxWidth: 500,
        borderRadius: 12,
        padding: 16,
        alignItems: 'center'
    },

    logo: {
        width: 180,
        height: 200,
        marginBottom: 16
    },

    lista: {
        width: '100%',
    },

    item_concluido: {
        color: "#B2FF59",
        marginVertical: 8,
        textDecorationLine: '#B2FF59',
        fontSize: 16
    },

    item_a_fazer: {
        color: "#FFFFFF",
        marginVertical: 8,
        fontSize: 16
    },

    check: {
        width: 24,
        height: 24,
        marginLeft: 10
    },

    item_botao: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8
    }
});

const ListaTarefa = () => {
    const [data, setData] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            titulo: 'Fazer Trabalhos Escolares',
            feito: false
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            titulo: 'Arrumar a casa',
            feito: false
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            titulo: 'Ir para a Academia',
            feito: false
        },
    ]);

    const trocaStatus = (itemId) => {
        const newData = data.map(item => 
            item.id === itemId ? { ...item, feito: !item.feito } : item
        );
        setData(newData);
    };

    return (
        <View style={styles.container}>
            <View style={styles.quadro}>
                <Image 
                    style={styles.logo}
                    source={require('./img/logo.png')}
                />
                <FlatList
                    style={styles.lista}
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item_botao}>
                            <Text style={item.feito ? styles.item_concluido : styles.item_a_fazer}>
                                {item.titulo}
                            </Text>
                            <Pressable
                                onPress={() => trocaStatus(item.id)}
                            >
                                <Image
                                    style={styles.check}
                                    source={require('./img/check.png')}
                                />
                            </Pressable>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default ListaTarefa;
