import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import database from '../firebaseconfig'
import { auth } from '../firebase'
import { Car } from '../components/Modals/Car'
import { Model } from '../components/Modals/Model'
import { CarType } from '../components/Modals/CarType'
import SelectText from '../components/Buttons/SelectText'
import InputCars from '../components/Buttons/InputCars'
import ChooseCars from '../components/Buttons/ChooseCars'

export default function NewCar({ navigation }) {
  const [price, setPrice] = useState(null)
  const [imageh, setImageh] = useState(null)
  const [email, setemail] = useState(auth.currentUser?.email)
  const [isModalVisible2, setisModalVisible2] = useState(false)
  const [chooseData2, setchooseData2] = useState('Select Item...')
  const setData2 = (option) => {
    setchooseData2(option)
  }
  const changeModalVisibility2 = (bool) => {
    setisModalVisible2(bool)
  }
  const [isModalVisible, setisModalVisible] = useState(false)
  const [chooseData, setchooseData] = useState('Select Item...')
  const setData = (option) => {
    setchooseData(option)
  }
  const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
  }

  const [isModalVisible3, setisModalVisible3] = useState(false)
  const [chooseData3, setchooseData3] = useState('Select Item...')
  const setData3 = (option) => {
    setchooseData3(option)
  }
  const changeModalVisibility3 = (bool) => {
    setisModalVisible3(bool)
  }

  function addTask() {
    database.collection('Tasks').add({
      price: price,
      email: email,
      status: false,
      image: imageh,
      marka: chooseData2,
      year: chooseData,
      type: chooseData3,
    })
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <SelectText name={'Resim'} />
      <InputCars
        picture={imageh}
        setPicture={setImageh}
        placeTitle={'Resim Url...'}
      />
      <SelectText name={'Marka'} />

      <TouchableOpacity
        onPress={() => changeModalVisibility2(true)}
        style={styles.toucableOpacity}
      >
        <ChooseCars data={chooseData2} />
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible2}
        nRequestClose={() => changeModalVisibility2(false)}
      >
        <Car
          setData={setData2}
          changeModalVisibility={changeModalVisibility2}
        />
      </Modal>
      <SelectText name={'Yıl'} />
      <TouchableOpacity
        onPress={() => changeModalVisibility(true)}
        style={styles.toucableOpacity}
      >
        <ChooseCars data={chooseData} />
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}
      >
        <Model
          setData={setData}
          changeModalVisibility={changeModalVisibility}
        />
      </Modal>
      <SelectText name={'Kasa Tipi'} />
      <TouchableOpacity
        onPress={() => changeModalVisibility3(true)}
        style={styles.toucableOpacity}
      >
        <ChooseCars data={chooseData3} />
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible3}
        nRequestClose={() => changeModalVisibility3(false)}
      >
        <CarType
          setData={setData3}
          changeModalVisibility={changeModalVisibility3}
        />
      </Modal>
      <SelectText name={'Fiyat'} />
      <InputCars
        picture={price}
        setPicture={setPrice}
        placeTitle={'Fiyat giriniz...'}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          addTask()
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonNewTask: {
    position: 'absolute',
    width: 60,
    height: 60,
    bottom: 30,
    left: 20,
    backgroundColor: '#F92e6a',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  toucableOpacity: {
    backgroundColor: 'gray',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
})
