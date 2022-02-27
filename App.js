import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Home from './screens/Home'
import NewCar from './screens/NewCar'
import CarDetails from './screens/CarDetails'
import { LogBox } from 'react-native'
import _ from 'lodash'
import AddCars from './components/Buttons/AddCars'

const Stack = createNativeStackNavigator()

function App() {
  LogBox.ignoreLogs(['Warning:...']) // ignore specific logs
  LogBox.ignoreAllLogs() // ignore all logs
  const _console = _.clone(console)
  console.warn = (message) => {
    if (message.indexOf('Setting a timer') <= -1) {
      _console.warn(message)
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUp}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="AddCars"
          options={{ headerShown: false }}
          component={AddCars}
        />
        <Stack.Screen name="CarDetails" component={CarDetails} />
        <Stack.Screen name="NewCar" component={NewCar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
