import HeaderSobre from "../../components/HeaderSobre";
import { StyleSheet, Image, Text, View, FlatList } from "react-native";
import { Link } from "expo-router";

export default function SobreHome() {
  const data = [
    { id: '1', link7: '/sobre-mim/Hobbies', titulo: 'Hobbies' },
    { id: '2', link7: '/sobre-mim/Trabalhos', titulo: 'Trabalhos' }
  ];
  
  return (
    <>
      <View style={styles.container}>
        <HeaderSobre titulo='Sobre Mim' />
        <View style={styles.main}>
          <Image
            style={styles.perfil}
            source={require('../../assets/images/eu.jpeg')}
          />
          <Text style={styles.welcome}>Quem é o Alexandre?</Text>
          <Text style={styles.descricao}>
            Meu nome é Alexandre, tenho 17 anos e atualmente estudo no SESI SENAI, Estou trabalhando na Mitsubishi. Amo academia e lutas em geral, principalmente Muay Thai!
          </Text>
          <View style={styles.buttonContainer}>
            <FlatList
              horizontal
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Link style={styles.link} href={item.link7}>
                  <Text style={styles.linkText}>{item.titulo}</Text>
                </Link>
              )}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  main: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 16
  },

  perfil: {
    width: 200,
    height: 200,
    overflow: 'hidden',
    borderRadius: 100
  },

  welcome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },

  descricao: {
    textAlign: 'center',
    margin: 10,
    width: 305
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },

  link: {
    backgroundColor: '#FFFF00',
    margin: 10,
    padding: 15,
    width: 150,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  linkText: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center'
  }
});
