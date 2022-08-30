import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import Api from './src/servises/api'
import Filmes from './src/filmes'
import {useEffect, useState } from 'react'

export default function App() {
  const [filmes, setFilmes] = useState([])
  const [Loading, setLoading] = useState(true)
  useEffect(()=>{
    Data()
  }, [])

  const Data = async ()=>{
     const response = await Api.get('r-api/?api=filmes/')
     setFilmes(response.data)
     setLoading(false)
  }
  return (
    <View style={styles.container}>
      {Loading === true?(
        <ActivityIndicator color='#000' size={50} />
      ):(
       <FlatList 
        data={filmes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item})=> <Filmes data={item}/>}
       />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 30
  },
  Loading: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
  }
});
