import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho fixo */}
      <View style={styles.fundoPreto}>
        <Text style={styles.text}>Bem Vindo ao</Text>
        <Text style={styles.text}>Fundo de Investimentos</Text>
      </View>

      {/* Conteúdo rolável */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.group}>
            <Image style={styles.image} source={require('../FundoInvestimentos/assets/inv1.png')} />
            <Text style={styles.cot}> Cotação: 112,30 </Text>
            <Text style={styles.pvp}> P/VP: 1,01 </Text>
          </View>
          
          <View style={styles.group}>
            <Image style={styles.image} source={require('../FundoInvestimentos/assets/inv2.png')} />
            <Text style={styles.cot}> Cotação: 101,04 </Text>
            <Text style={styles.pvp}> P/VP: 0,90 </Text>
          </View>
          
          <View style={styles.group}>
            <Image style={styles.image} source={require('../FundoInvestimentos/assets/inv3.png')} />
            <Text style={styles.cot}> Cotação: 8,16 </Text>
            <Text style={styles.pvp}> P/VP: 0,93 </Text>
          </View>
          
          <View style={styles.group}>
            <Image style={styles.image} source={require('../FundoInvestimentos/assets/inv4.png')} />
            <Text style={styles.cot}> Cotação: 108,27 </Text>
            <Text style={styles.pvp}> P/VP: 1,02 </Text>
          </View>
          
          <View style={styles.group}>
            <Image style={styles.image} source={require('../FundoInvestimentos/assets/inv5.png')} />
            <Text style={styles.cot}> Cotação: 109,19 </Text>
            <Text style={styles.pvp}> P/VP: 0,92 </Text>
          </View>
          
          <View style={styles.group}>
            <Image style={styles.image} source={require('../FundoInvestimentos/assets/inv6.png')} />
            <Text style={styles.cot}> Cotação: 8,12 </Text>
            <Text style={styles.pvp}> P/VP: 0,86 </Text>
          </View>
          
          <View style={styles.group}>
            <Image style={styles.image} source={require('../FundoInvestimentos/assets/inv7.png')} />
            <Text style={styles.cot}> Cotação: 9,05 </Text>
            <Text style={styles.pvp}> P/VP: 0,99 </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  fundoPreto: {
    
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#2F3840',
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    height: 100, // Ajuste a altura conforme necessário
  },

  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },

  image: {
    width: 350,
    height: 80,
    marginTop: 50,
  },

  cot: {
    fontSize: 22,
    fontWeight: '600',
  },

  pvp: {
    fontSize: 22,
  },

  group: {
    backgroundColor: 'beige',
    width: 360,
    height: 200,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollView: {
    marginTop: 100, // Ajuste para a altura do fundoPreto
  },

  content: {
    flexGrow: 1,
    alignItems: 'center',
  },
});
