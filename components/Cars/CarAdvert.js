import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import propTypes from 'prop-types'

const CarAdvert = ({ carImage, detailsOnpress, marka, price }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.DescriptionTask2}
        onPress={detailsOnpress}
      >
        <Image source={carImage} style={styles.carImage} />
        <Text style={styles.marka}>{marka}</Text>
        <Text style={styles.price}>₺{price}</Text>
      </TouchableOpacity>
    </View>
  )
}
CarAdvert.propTypes = {
  marka: propTypes.string,
  price: propTypes.string,
  carImage: propTypes.any,
  detailsOnpress: propTypes.any,
}

const styles = StyleSheet.create({
  DescriptionTask2: {
    width: '100%',
    backgroundColor: '#f5f5f5cf',
    padding: 12,
    borderRadius: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    height: 100,
    marginTop: 10,
  },
  carImage: { height: 80, width: 80, borderRadius: 5 },
  marka: { fontSize: 22, fontWeight: 'bold' },
  price: { color: 'red', fontSize: 15, fontWeight: 'bold' },
})
export default CarAdvert
