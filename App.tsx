import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'green'}/> 
      <View style={[styles.container]}>
        <TouchableOpacity>
          <View>
            <Text>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})