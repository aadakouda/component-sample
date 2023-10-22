import { BlurView } from "expo-blur"
import { Modal, Pressable, StyleSheet, Text, View } from "react-native"
import Spacer from "./Spacer"
import React, { ReactNode, useState } from "react"
import BorderedButton from "./BorderedButton"
import Divider from "./Divider"
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

interface Props {
  options: {label: string; value: string}[]
}

export function Select({options}: Props) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [selected, setSelected] = useState<string | undefined>(undefined)
  const onPressModal = () => {
    console.log(selected)
    setIsOpenModal(false)
  }

  return (
    <Pressable style={styles.pulldown} onPress={() => setIsOpenModal(true)}>
      <View style={styles.input}>
        {selected == null ?
          <Text style={styles.placeHolder}>選択してください</Text>
          : <Text style={styles.inputText}>{selected}</Text>
        }
        <View style={styles.inputIcon}>
          <AntDesignIcon name="caretdown" style={styles.text} />
        </View>
      </View>
      <Modal animationType='fade' transparent={true} visible={isOpenModal} onRequestClose={() => setIsOpenModal(false)}>
      <View style={styles.modalBackGround}>
        <BlurView style={styles.modal} intensity={40}>
          <Text style={styles.modalHeader}>果物を選択してください</Text>
          <Spacer/>
          {options.map((option, i)=> (
            <Pressable key={i} onPress={() => setSelected(option.label)}>
              <View>
              <Spacer/>
              <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                  {option.label === selected &&
                    <AntDesignIcon name='check' style={styles.text} />
                  }
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexGrow: 2, marginLeft: 10, marginRight: 10}}>
                  <Text style={styles.text}>{option.label}</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} />
              </View>
              <Spacer/>
              </View>
            </Pressable>
          )).reduce<ReactNode[]>((prev, curr) => {
          return [...prev, curr, <Divider/>]
          }, []).slice(0, -1)}
          <Spacer/>
          <BorderedButton title='閉じる' onPress={onPressModal} />
        </BlurView>
      </View>
      </Modal>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'row',
  },
  placeHolder: {
    flex: 1,
    color: 'rgba(256, 256, 256, 0.5)',
  },
  inputText: {
    flex: 1,
    color: '#FFF',
  },
  inputIcon: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  pulldown: {
    borderRadius: 7,
    padding: 15,
    height: 50,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderColor: 'rgba(256, 256, 256, 0.5)',
    borderStyle: 'solid',
    borderBottomWidth: 1.5,
  },
  modalBackGround: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modal: {
    padding: 20,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 7,
    width: '100%',
  },
  modalHeader: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  text: {
    color: '#FFF',
  },
})