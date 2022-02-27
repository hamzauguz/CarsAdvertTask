import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import propTypes from 'prop-types'

const MainPage = ({ image }) => {
  return <Image style={styles.view7} source={image} />
}
MainPage.propTypes = {
  image: propTypes.any,
}

const styles = StyleSheet.create({
  view7: { height: '50%' },
})
export default MainPage
