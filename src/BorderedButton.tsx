import { StyleSheet, Pressable, Text } from "react-native"

interface Props {
  title: string
  onPress?: () => void
}

export function BorderedButton({title, onPress}: Props) {
  return (
    <Pressable
      style={
        ({pressed}) => [
          {
            backgroundColor: pressed ? 'rgba(256, 256, 256, 0.5)': undefined,
            width: '100%',
            alignItems: 'center'
          },
          styles.button
        ]
      }
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
    )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderColor: 'rgba(256, 256, 256, 0.7)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 100,
  },
  title: {
    color: 'white',
  },
})

export default BorderedButton