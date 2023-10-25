import { StyleSheet, Text, View } from "react-native";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

export function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.icon}>
        <FontAwesome5Icon name="tasks" size={20} style={{color: '#FFF'}} />
        <Text style={{color: '#FFF'}}>学習</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesome5Icon name="edit" size={20} style={{color: '#FFF'}} />
        <Text style={{color: '#FFF'}}>デッキ編集</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesome5Icon name="wrench" size={20} style={{color: '#FFF'}} />
        <Text style={{color: '#FFF'}}>設定</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})