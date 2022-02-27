import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import propTypes from 'prop-types'

const CarDetailView = ({ title, route }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.label}>{title} </Text>
      <Text style={styles.label}>{route}</Text>
    </View>
  )
}
CarDetailView.propTypes = {
  title: propTypes.string,
  route: propTypes.string,
}
const styles = StyleSheet.create({
  label: {
    marginTop: 20,
    fontSize: 16,
    color: '#F92E6A',
  },
})

export default CarDetailView
