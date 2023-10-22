import { TextInput, StyleSheet } from "react-native"

interface Props {
    placeholder: string
}

export function Input({placeholder}: Props) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={'rgba(256, 256, 256, 0.5)'}
      placeholder={placeholder}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderColor: 'rgba(256, 256, 256, 0.5)',
    borderStyle: 'solid',
    borderBottomWidth: 1.5,
    borderRadius: 7,
    color: 'white',
  },
  placeHolder: {
    color: 'rgba(256, 256, 256, 0.4)',
  },
})

export default Input