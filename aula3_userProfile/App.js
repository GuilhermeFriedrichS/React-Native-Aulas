import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {

  let img = "https://img.welt.de/img/kultur/mobile101290753/2682509427-ci102l-w1024/Shrek-Aufmacher-BM-Lifestyle-Seeburg-jpg.jpg"


  return (
    <View >
      <Text style={{
        marginTop: 10,
        marginLeft: '45%',
        position: 'absolute'
      }}>
        <h2>Perfil</h2>
      </Text>
      <Text style={{
        marginTop: 370,
        marginLeft: 20
      }}>
        <h2>Dados Pessoais:</h2>
        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
        <h2>Dados Formação:</h2>
        Lorem Ipsum is that it has a more-or-less normal distribution
        <h2>Dados Experiência:</h2>
        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        <h2>Dados Projetos:</h2>
        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" 
      </Text>
      <Image  source={{ uri: img }}
          style={ styles.photo}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  
  photo:{
    width: 300, 
    height: 300,
    marginTop: 60,
    marginLeft: 45,
    marginBottom: 100,
    position: 'absolute',
    borderRadius: 20
  }


});
