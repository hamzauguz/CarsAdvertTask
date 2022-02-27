import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import propTypes from 'prop-types'

const InputCars = ({ picture, setPicture, placeTitle }) => {
  return (
    <TextInput
      value={picture}
      onChangeText={setPicture}
      style={styles.input}
      placeholder={placeTitle}
    />
  )
}

InputCars.propTypes = {
  placeTitle: propTypes.string,
  picture: propTypes.any,
  setPicture: propTypes.any,
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#F92E6A',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

export default InputCars
