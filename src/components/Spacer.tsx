import { DimensionValue, StyleProp, View, ViewStyle } from "react-native"

interface Props {
  width?: DimensionValue
  height?: DimensionValue
  style?: StyleProp<ViewStyle>
}

export function Spacer({width, height, style}: Props) {
  return (
    <View style={[style, {width: width ?? '100%', height: height ?? 15}]} />
  )
}

export default Spacer