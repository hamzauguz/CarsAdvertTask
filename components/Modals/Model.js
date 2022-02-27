import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Model = (props, { faruk }) => {
  faruk = [
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
  ]

  const onPressItem = (option) => {
    props.changeModalVisibility(false)
    props.setData(option)
  }
  const option = faruk.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item)}
      >
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    )
  })
  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}
    >
      <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / 2 }]}>
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  option: {
    alignItems: 'flex-start',
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export { Model }
