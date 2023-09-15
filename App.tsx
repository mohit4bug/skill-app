import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import MainNavigator from './src/navigators/main.navigator'
import { StatusBar } from 'expo-status-bar'

SplashScreen.preventAutoHideAsync()

const Tab = createBottomTabNavigator()

const App = () => {
  const [fontsLoaded] = useFonts({
    'Font-Extrabold': require('./assets/fonts/InterTight-ExtraBold.ttf'),
    'Font-Semibold': require('./assets/fonts/InterTight-SemiBold.ttf'),
    'Font-Regular': require('./assets/fonts/InterTight-Regular.ttf'),
    'Font-Medium': require('./assets/fonts/InterTight-Medium.ttf'),
  })
  const onLayoutView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer onReady={onLayoutView}>
      <StatusBar backgroundColor="#0f172a" style="light" />
      <MainNavigator />
    </NavigationContainer>
  )
}
export default App
