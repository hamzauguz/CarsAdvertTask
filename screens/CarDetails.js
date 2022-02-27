import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import CarDetailView from '../components/Cars/CarDetailView'

const CarDetails = ({ route }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: route.params.image }} style={styles.image} />
      <View>
        <CarDetailView title={'Marka:'} route={route.params.marka} />
        <CarDetailView title={'Yıl:'} route={route.params.year} />
        <CarDetailView title={'Kasa Tipi:'} route={route.params.type} />
        <CarDetailView title={'Kilometre:'} route={route.params.price} />
        <CarDetailView title={'Mail Adresi:'} route={route.params.email} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
  },
  image: { height: 300, width: '100%' },
})
export default CarDetails
