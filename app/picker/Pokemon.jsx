import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
    container1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#E8F9FD'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        gap: 40,
        paddingHorizontal: 20,
    },
    containerT: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 50,
    },
    containerP: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginVertical: 20,
    },
    containerM: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginBottom: 50,
    },
    titulo: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FF6F61',
    },
    pickerI: {
        width: 250,
        height: 60,
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#FFC107',
        borderColor: '#FF5722',
        borderWidth: 2,
    },
    pickerItem: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    txt5: {
        color: '#00796B',
        fontSize: 24,
        fontWeight: 'bold',
    }
});

const typeTranslations = {
    bug: 'Inseto',
    dark: 'Sombrio',
    dragon: 'Dragão',
    electric: 'Elétrico',
    fairy: 'Fada',
    fighting: 'Luta',
    fire: 'Fogo',
    flying: 'Voador',
    ghost: 'Fantasma',
    grass: 'Grama',
    ground: 'Terra',
    ice: 'Gelo',
    normal: 'Normal',
    poison: 'Veneno',
    psychic: 'Psíquico',
    rock: 'Pedra',
    steel: 'Aço',
    water: 'Água'
};

const Pokemon = () => {
    const [pokemon, setPokemon] = useState('');
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(data => {
                const translatedTypes = data.results.map(type => ({
                    ...type,
                    label: typeTranslations[type.name] || type.name
                }));
                setPokemonTypes(translatedTypes);
            })
            .catch(error => console.log('Error fetching Pokémon types:', error));

        fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
            .then(response => response.json())
            .then(data => setFilteredPokemons(data.results))
            .catch(error => console.log('Error fetching Pokémon list:', error));
    }, []);

    useEffect(() => {
        if (selectedType) {
            fetch(`https://pokeapi.co/api/v2/type/${selectedType}`)
                .then(response => response.json())
                .then(data => {
                    const pokemonOfType = data.pokemon.map(p => p.pokemon);
                    setFilteredPokemons(pokemonOfType);
                })
                .catch(error => console.log('Error fetching Pokémon by type:', error));
        } else {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
                .then(response => response.json())
                .then(data => setFilteredPokemons(data.results))
                .catch(error => console.log('Error fetching Pokémon list:', error));
        }
    }, [selectedType]);

    return (
        <View style={styles.container1}>
            <View style={styles.containerT}>
                <Text style={styles.titulo}>Selecione seu POKÉMON</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.containerP}>
                    <Text>Selecione o Tipo</Text>
                    <Picker
                        style={styles.pickerI}
                        itemStyle={styles.pickerItem}
                        selectedValue={selectedType}
                        onValueChange={(itemValue) => setSelectedType(itemValue)}
                    >
                        <Picker.Item label="Todos os Tipos" value="" />
                        {pokemonTypes.map(type => (
                            <Picker.Item key={type.name} label={type.label} value={type.name} />
                        ))}
                    </Picker>
                </View>
                <View style={styles.containerP}>
                    <Text>Selecione o seu Pokémon</Text>
                    <Picker
                        style={styles.pickerI}
                        itemStyle={styles.pickerItem}
                        selectedValue={pokemon}
                        onValueChange={(itemValue) => setPokemon(itemValue)}
                    >
                        <Picker.Item label="Selecione o seu Pokémon" value="" />
                        {filteredPokemons.map((item, index) => (
                            <Picker.Item key={index} label={item.name} value={item.name} />
                        ))}
                    </Picker>
                </View>
            </View>
            <View style={styles.containerM}>
                {pokemon ? <Text style={styles.txt5}>Você selecionou {pokemon}</Text> : null}
            </View>
        </View>
    );
};

export default Pokemon;
