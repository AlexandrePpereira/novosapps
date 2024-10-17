import { Image, View, Text, StyleSheet } from "react-native";

export default function EspacoParaImagem() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Meus Trabalhos</Text>
      <View style={styles.imagemContainer}>
        <View style={styles.imagemWrapper}>
          <Image
            source={require('../../../assets/images/trabalhos-img/renner.png')}
            style={styles.imagem}
          />
          <Text style={styles.imagemTexto}>Renner</Text>
          <p style={styles.a}>Trabalhei no CD da Renner no setor de exportação, fiquei de setembro(2023) a fevereiro(2024), criando muita experiência na área de roupas !</p>
        </View>
        <View style={styles.imagemWrapper}>
          <Image
            source={require('../../../assets/images/trabalhos-img/mitsubishi1.png')}
            style={styles.imagem}
          />
          <Text style={styles.imagemTexto}>Mitsubishi</Text>
          <p style={styles.p}>Atualmente trabalho como Jovem Aprendiz na Mitsubishi, perto do SESI SENAI, Estou na área administrativa e fazendo integração ao curso do CIEE !</p>
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
    width: 400,
    height: 220,
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
