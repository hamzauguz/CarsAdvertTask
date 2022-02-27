import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import propTypes from 'prop-types'

const AddCars = ({ title, next, out, iconName, iconSize, iconColor }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonNewTask} onPress={next}>
        <Text style={styles.iconButton}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={out} style={styles.buttonNewTaskRight}>
        <Ionicons name={iconName} size={iconSize} color={iconColor} />
      </TouchableOpacity>
    </View>
  )
}
AddCars.propTypes = {
  title: propTypes.string,
  size: propTypes.number,
  color: propTypes.string,
  iconName: propTypes.string,
  next: propTypes.any,
  out: propTypes.any,
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  iconButton: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonNewTask: {
    position: 'absolute',
    width: 200,
    height: 60,
    bottom: 30,
    left: 60,
    backgroundColor: '#F92e6a',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonNewTaskRight: {
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 30,
    right: 20,
    backgroundColor: '#F92e6a',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default AddCars
