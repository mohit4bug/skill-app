import { Ionicons as Icon } from '@expo/vector-icons'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import SkillMeter from '../components/skill-meter'

const ProfileScreen = () => {
  return (
    <ScrollView className="flex-1 bg-slate-900 px-5">
      {/* Top */}
      <View className="h-36 justify-center mt-8">
        <View className="border-b border-slate-700 py-5">
          <Text
            className="text-5xl text-slate-100 py-1"
            style={{ fontFamily: 'Font-Extrabold' }}
          >
            Mohit Khatri
          </Text>

          <View className="flex-row space-x-3">
            {/* Heart */}
            <View className="flex-row space-x-1 items-center">
              <Text className="text-rose-500">
                <Icon name="heart" size={16} />
              </Text>
              <Text
                style={{
                  fontFamily: 'Font-Extrabold',
                }}
                className="text-xs text-slate-100"
              >
                32
              </Text>
            </View>

            {/* Verified */}
            <View className="flex-row space-x-1 items-center">
              <Animatable.Text
                animation="flash"
                iterationCount="infinite"
                className="text-emerald-500"
                easing="linear"
                duration={3000}
              >
                <Icon name="shield-checkmark" size={16} />
              </Animatable.Text>
            </View>
          </View>
        </View>
      </View>

      {/* Skill Meters */}
      <SkillMeter />
      <SkillMeter />
      <SkillMeter />
      <SkillMeter />
      <SkillMeter />
    </ScrollView>
  )
}
export default ProfileScreen
