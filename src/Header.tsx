import { Text, View } from "react-native";

interface Props {
  title: string
}

export function Header({title}: Props) {
  return (
    <View style={{width: '100%', alignItems: 'center', padding: 10}}>
      <Text style={{color: '#FFF', fontSize: 25}}>{title}</Text>
    </View>
  )
}