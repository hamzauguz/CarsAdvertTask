import React from 'react'
import { Text, StyleSheet } from 'react-native'
import propTypes from 'prop-types'

const SelectText = ({ name }) => {
  return <Text style={styles.label}>{name}</Text>
}
SelectText.propTypes = {
  name: propTypes.string,
}
const styles = StyleSheet.create({
  label: {
    width: '90%',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 16,
    color: '#F92E6A',
  },
})

export default SelectText
