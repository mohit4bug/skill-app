import { TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FriendCard from '../components/friend-card'
const FriendsScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 bg-slate-900 px-5">
        <TextInput
          className="mt-5 bg-slate-700 rounded-[30px] p-2 px-4 text-neutral-100"
          placeholder="Search Friends here"
          placeholderTextColor="#64748b"
          style={{
            fontFamily: 'Font-Medium',
          }}
          selectionColor="#64748b"
        />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </ScrollView>
    </SafeAreaView>
  )
}
export default FriendsScreen
