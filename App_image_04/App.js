import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>

      <Image
        source={{ uri: 'https://i.pinimg.com/736x/e6/cf/81/e6cf810b7a37310a5eba4babe4fd90d8.jpg' }}
        style={{ width: 200, height: 200, marginBottom: 20, borderRadius: 100 }}
      />

      <Text style={{ fontSize: 24, fontWeight: 'bold',textAlign: 'center', marginBottom: 15 }}>
        Bem-vindo ao aplicativo da Chevrolet Opala
      </Text>

      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          width: '80%',
          color: 'gray',
          marginBottom: 40
        }}
      >
        O Chevrolet Opala é um dos carros mais icônicos da história automotiva brasileira. Este aplicativo foi
         criado para fãs e entusiastas que desejam conhecer mais sobre o modelo, acompanhar curiosidades, dicas 
         de manutenção e informações sobre diferentes versões desse clássico que marcou gerações.  
      </Text>

      <View style={{ flexDirection: 'row', gap: 20 }}>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#3b82f6',
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 20
          }}
        >
          <Text style={{ color: '#3b82f6' }}>Pular</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#3b82f6',
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 20
          }}
        >
          <Text style={{ color: 'white' }}>Próximo</Text>
        </TouchableOpacity>

      </View>

      <View style={{ flexDirection: 'row', marginTop: 200 }}>

      <View
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: '#4f7de8',
          margin: 5
        }}
      />

      <View
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: '#ccc',
          margin: 5
        }}
      />

      <View
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: '#ccc',
          margin: 5
        }}
      />

    </View>

    </View>
  );
}

export default App;