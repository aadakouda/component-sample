import { DimensionValue, StyleProp, View, ViewStyle } from "react-native"

interface Props {
  width?: DimensionValue
  height?: DimensionValue
  style?: StyleProp<ViewStyle>
}

export function Spacer({width, height}: Props) {
  return (
    <View style={{width: width ?? '100%', height: height ?? 15}} />
  )
}

export default Spacer