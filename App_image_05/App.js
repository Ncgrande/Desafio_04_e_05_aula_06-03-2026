import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  return (

    <View style={{ flex: 1 }}>

      <View style={{
        backgroundColor: '#720b0bff',
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
      }}>

        <Text style={{
          color: 'white',
          fontSize: 26,
          fontWeight: 'bold'
        }}>
          Chevrolet
        </Text>

        <Text style={{
          color: 'white',
          fontSize: 16,
          marginLeft: 10,
          fontWeight: 'bold'
        }}>
          DO BRASIL
        </Text>

      </View>

      <View style={{
        backgroundColor: '#e97373ff',
        height: 40
      }} />

      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
      }}>

        <Image
          source={{ uri: 'https://i.pinimg.com/736x/94/f5/03/94f503e7f876501d1b1cefe8ac97583b.jpg' }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            marginBottom: 30
          }}
        />

        <Text style={{
          fontSize: 26,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 20
        }}>
          Carros que marcaram época
        </Text>

        <Text style={{
          fontSize: 18,
          textAlign: 'center'
        }}>
          Conheça os carros clássicos que fizeram história no Brasil.
          Modelos icônicos que marcaram gerações e ainda hoje são
          admirados por colecionadores e apaixonados por automobilismo.
        </Text>

      </View>


      <View style={{
        backgroundColor: '#720b0bff',
        height: 50
      }} />

    </View>

  );
}

export default App;