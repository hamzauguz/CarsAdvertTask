import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import database from '../firebaseconfig'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import AddCars from '../components/Buttons/AddCars'
import CarAdvert from '../components/Cars/CarAdvert'

const Home = () => {
  const [task, setTask] = useState([])
  const navigation = useNavigation()

  function handleSignOut() {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login')
      })
      .catch((error) => alert(error.message))
  }

  useEffect(() => {
    const routeref = database.collection('Tasks')

    routeref.onSnapshot((query) => {
      const list = []
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id })
      })
      setTask(list)
    })
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({ item }) => {
          return (
            <CarAdvert
              detailsOnpress={() => {
                navigation.navigate('CarDetails', {
                  id: item.id,
                  price: item.price,
                  email: item.email,
                  status: false,
                  image: item.image,
                  marka: item.marka,
                  type: item.type,
                  year: item.year,
                })
              }}
              carImage={{ uri: item.image }}
              marka={item.marka}
              price={item.price}
            />
          )
        }}
      />
      <AddCars
        title={'İlan Ekle'}
        next={() => navigation.navigate('NewCar')}
        out={handleSignOut}
        iconName={'log-out'}
        iconSize={32}
        iconColor={'white'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
})
export default Home
