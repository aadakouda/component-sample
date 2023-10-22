import { ReactNode } from "react"
import { View, StyleSheet } from "react-native"

interface Props {
  children: ReactNode
}

export function Card({children}: Props) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(256, 256, 256, 0.1)',
    borderColor: 'rgba(256, 256, 256, 0.5)',
    borderStyle: 'solid',
    borderRadius: 7,
    borderWidth: 1,
    width: '100%',
  },
})

export default Card