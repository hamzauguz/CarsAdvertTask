import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import propTypes from 'prop-types'

const SignInUpTextInput = ({
  place1,
  place2,
  sifre,
  onChangeTextEmail,
  valueEmail,
  onChangeTextPassword,
  valuePassword,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hidePass, setHidePass] = useState(true)
  return (
    <View>
      <View style={styles.view3}>
        <TextInput
          value={valueEmail}
          onChangeText={onChangeTextEmail}
          placeholder={place1}
          style={styles.textinpu1}
        />
      </View>
      <View style={styles.view2}>
        <TextInput
          secureTextEntry={hidePass ? true : false}
          value={valuePassword}
          onChangeText={onChangeTextPassword}
          placeholder={place2}
          style={styles.textinpu1}
        />
        <Ionicons
          style={styles.icon}
          size={25}
          name={hidePass ? 'eye-off' : 'eye'}
          color="black"
          onPress={() => setHidePass(!hidePass)}
        />
        <TouchableOpacity>
          <Text style={styles.sifre}>{sifre}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
SignInUpTextInput.prototype = {
  place1: propTypes.string,
  place2: propTypes.string,
  sifre: propTypes.string,
  onChangeTextEmail: propTypes.any,
  valueEmail: propTypes.any,
  onChangeTextPassword: propTypes.any,
  valuePassword: propTypes.any,
}

const styles = StyleSheet.create({
  sifre: { left: 190, bottom: 20, fontSize: 14, color: 'gray' },
  icon: { left: 275, top: -35, height: 30, width: 30 },
  textinpu1: {
    height: 40,
    left: 10,
    fontWeight: '700',
    fontSize: 15,
  },
  view2: {
    backgroundColor: '#bb08cc',
    height: 40,
    width: '80%',
    borderRadius: 20,
    top: 15,
  },
  view3: {
    backgroundColor: '#bb08cc',
    height: 40,
    width: '80%',
    borderRadius: 20,
  },
})

export default SignInUpTextInput
