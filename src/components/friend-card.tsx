import { Text, View, TouchableOpacity } from 'react-native'
import { Ionicons as Icon } from '@expo/vector-icons'

const FriendCard = () => {
  return (
    <View className="rounded-[30px] mt-5 bg-slate-700 p-3 px-5">
      {/* Top */}
      <View className="flex-row justify-between">
        <View className="flex-row items-center space-x-4">
          <View className="h-14 w-14 rounded-full bg-slate-800" />
          <Text
            className="text-2xl text-neutral-100"
            style={{
              fontFamily: 'Font-Semibold',
            }}
          >
            Mohit Khatri
          </Text>
        </View>
        {/* Verified Icon */}
        <View className="flex-row space-x-1 items-center">
          <Text className="text-emerald-500">
            <Icon name="shield-checkmark" size={16} />
          </Text>
        </View>
      </View>

      {/* Bottom */}
      <View className="grow flex-row flex-wrap gap-2 p-2 px-0 overflow-hidden">
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Font-Medium',
            }}
            className="bg-slate-500 rounded-[30px] p-2 px-3 text-neutral-100"
          >
            Github
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Font-Medium',
            }}
            className="bg-slate-500 rounded-[30px] p-2 px-3 text-neutral-100"
          >
            Github
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Font-Medium',
            }}
            className="bg-slate-500 rounded-[30px] p-2 px-3 text-neutral-100"
          >
            Github
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Font-Medium',
            }}
            className="bg-slate-500 rounded-[30px] p-2 px-3 text-neutral-100"
          >
            Github
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Font-Medium',
            }}
            className="bg-slate-500 rounded-[30px] p-2 px-3 text-neutral-100"
          >
            Kubernetes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'Font-Medium',
            }}
            className="bg-slate-500 rounded-[30px] p-2 px-3 text-neutral-100"
          >
            Kubernetes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default FriendCard
