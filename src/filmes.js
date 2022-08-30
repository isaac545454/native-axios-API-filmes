import { StyleSheet, Text, View,  Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

export default function filmes({data}) {
  return (
    <View >
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Image
        source={{uri: data.foto}}
        style={styles.capa}
        />
        <View style={styles.areaBotao}>
             <TouchableOpacity style={styles.botao}>
                <Text style={styles.botaoTexto}>LEIA MAIS...</Text>
             </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
       shadowColor: '#red',
       backgroundColor: '#red',
       shadowOffset: {width: 0, height: 2},
       shadowOpacity: 0.9,
       margin: 5,
       padding: 5,
       shadowRadius: 5,
       borderRadius: 5,
       elevation: 3,
    },
    titulo:{
      fontSize: 18,
      padding: 15,
      
    },
    capa: {
      height: 250,
      zIndex: 2,
      width: '100%',
      justifyContent: 'center',
      
    },
    areaBotao: {
       alignItems: 'flex-end',
       marginTop: -40,
       zIndex: 9,
    },
    botao: {
      width: 100,
      backgroundColor: '#09a6ff',
      opacity: 1,
      padding: 9
    },
    botaoTexto: {
        textAlign: 'center',
        color: '#fff'
    }
})