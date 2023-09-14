import { Ionicons as Icon, AntDesign as IconAnt } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'

const Meter = ({ value }: { value: number }) => {
  const arr = Array.from({ length: 10 }).map((_, index) => {
    id: index
  })

  return (
    <View className="h-6 bg-slate-900 w-full mt-5 flex-row rounded-[30px] overflow-hidden">
      {arr.map((_, index) => (
        <View
          key={index}
          className={`border-slate-700 grow ${
            index === 0 ? 'border-none' : 'border-l-2'
          } ${value > index ? 'bg-slate-100' : ''}`}
        ></View>
      ))}
    </View>
  )
}

const SkillMeter = () => {
  const meterValue = Math.floor(Math.random() * 10)

  return (
    <View className="rounded-[30px] bg-slate-700 mt-5 items-center justify-center p-5">
      <Text className={`${meterValue ? 'text-slate-100' : 'text-slate-500'}`}>
        <Icon name="logo-apple" size={48} />
      </Text>
      <Meter value={meterValue} />
      <View className="flex-row mt-5 rounded-[30px] overflow-hidden">
        <TouchableOpacity className="h-7 bg-slate-900 w-12 items-center justify-center">
          <Text className="text-slate-100">
            <IconAnt name="minus" size={22} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="h-7 bg-slate-900 w-12 items-center justify-center">
          <Text className="text-slate-100">
            <Icon name="add" size={22} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default SkillMeter
