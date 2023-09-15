import { View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const FriendsScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-slate-900 px-5">
        <TextInput
          className="mt-5 bg-slate-700 rounded-xl p-2 text-neutral-100"
          placeholder="Search Friends here"
          placeholderTextColor="#64748b"
          style={{
            fontFamily: 'Font-Medium',
          }}
          selectionColor="#64748b"
        />
      </View>
    </SafeAreaView>
  )
}
export default FriendsScreen
