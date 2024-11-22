import { Image, View, Text, StyleSheet } from "react-native";

export default function EspacoParaImagem() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Meus Hobbies</Text>
      <View style={styles.imagemContainer}>
        <View style={styles.imagemWrapper}>
          <Image
            source={require('../../../assets/images/trabalhos-img/academia.png')}
            style={styles.imagem}
          />
          <Text style={styles.imagemTexto}>Academia</Text>
          <p style={styles.a}>Faço academia a 2 Meses, estou tomando suplementos e seguindo a dieta, academia é meu hobbie favorito !</p>
        </View>
        <View style={styles.imagemWrapper}>
          <Image
            source={require('../../../assets/images/trabalhos-img/mt.png')}
            style={styles.imagem}
          />
          <Text style={styles.imagemTexto}>Muay Thai</Text>
          <p style={styles.p}>Lutei Muay Thai 3 anos da minha vida, tenho 5 graduações e sempre amei lutas em geral</p>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagemWrapper: {
    alignItems: 'center',
  },
  imagem: {
    width: 300,
    height: 200,
    marginHorizontal: 10,
  },
  imagemTexto: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  p: {
    width: 300
  },
  a: {
    width: 300
  }
});
