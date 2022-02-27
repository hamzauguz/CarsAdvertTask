import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import SocialMedia from '../components/SignInUp/SocialMedia'
import SignInUpButton from '../components/SignInUp/SignInUpButton'
import SignInUpTextInput from '../components/SignInUp/SignInUpTextInput'
import SignInWelcome from '../components/SignInUp/SignInWelcome'
import MainPage from '../components/SignInUp/MainPage'
import { auth } from '../firebase'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Home')
      }
    })

    return unsubscribe
  }, [])

  function handleSignUp() {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user
        console.log('Registered with:', user.email)
      })
      .catch((error) => alert('Incorrect'))
  }

  const navigation = useNavigation()
  return (
    <KeyboardAvoidingView style={styles.full}>
      <MainPage image={require('../assets/images/car3.jpg')} />
      <View style={styles.view6}>
        <SignInWelcome
          welcome={'Hoşgeldiniz'}
          signUp={'Hesabınız varmı? Hemen giriş yapın.'}
          change={() => navigation.navigate('Login')}
        />
        <View style={styles.view4}>
          <SignInUpTextInput
            place1={'Lütfen Mail Adresinizi Giriniz...'}
            place2={'Lütfen Şifrenizi giriniz...'}
            valueEmail={email}
            onChangeTextEmail={(text) => setEmail(text)}
            valuePassword={password}
            onChangeTextPassword={(text) => setPassword(text)}
          />

          <View style={styles.top1}>
            <SignInUpButton change={handleSignUp} giris={'Kayıt Ol'} />
            <Text style={styles.text1}>Ya da</Text>

            <SocialMedia
              image1={require('../assets/images/face.png')}
              image2={require('../assets/images/google.png')}
              image3={require('../assets/images/apple.png')}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  text1: { left: 140, top: 50 },
  top1: { top: 70 },
  view4: { top: 50, left: 40 },
  view6: {
    backgroundColor: 'white',
    height: '100%',
    borderTopStartRadius: 60,
    borderTopRightRadius: 60,
    bottom: 80,
    width: '100%',
  },
  full: { width: '100%', height: '100%' },
})

export default SignUp
