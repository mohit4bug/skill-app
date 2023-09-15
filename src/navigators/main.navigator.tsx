import { Ionicons as Icon } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text } from 'react-native'
import FriendsScreen from '../screens/friends.screen'
import ProfileScreen from '../screens/profile.screen'

const Tab = createBottomTabNavigator()

const Tabs = [
  { name: 'Friends', component: FriendsScreen, icon: 'people' },
  { name: 'Profile', component: ProfileScreen, icon: 'person' },
]

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#0f172a',
          borderColor: 'transparent',
          height: 60,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      {Tabs.map((tab, idx) => (
        <Tab.Screen
          key={idx}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Text className={focused ? 'text-slate-100' : 'text-slate-500'}>
                <Icon name={tab.icon as any} size={size} />
              </Text>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  )
}
export default MainNavigator
