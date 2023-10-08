import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar as SB, Pressable } from 'react-native';
import * as Haptics from 'expo-haptics'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

// background: linear-gradient(220.55deg, #FF5E98 0%, #0F213E 100%);
// background: linear-gradient(220.55deg, #FF9D7E 0%, #4D6AD0 100%);

export default function App() {
  const gradientsSample = [
['#4D6AD0', '#FF9D7E'],
['#001C63', '#24CFC5'],
['#6B0013', '#4063BC'],
['#0F213E', '#FF5E98'], // 明るい色の中でもグレースケールで割と見やすい
['#AD00FE', '#00E0EE'],
['#4E4376', '#2b5876'],
['#418CB7', '#FF8570'],
['#243949', '#517FA4'],
['#434343', '#222'],
['#000', '#000'],
  ]
  const [colors, setColors] = useState(gradientsSample[3])
  const card = {
    front: "おもて",
    back: "うら"
  }
  const [isFront, setIsFront] = useState<boolean>(true)
  const reverseCard = () => {
    setIsFront(!isFront)
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }
  const [isTapped, setIsTapped] = useState<boolean>(false)
  return (
    <SafeAreaView style={{paddingTop: SB.currentHeight, flex: 1}}>
      <LinearGradient colors={colors} start={{x: 0, y: 1}} end={{x: 1, y: 0}} style={styles.background} />
      <View style={{width: '100%', alignItems: 'center', padding: 10}}>
        <Text style={{color: '#FFF', fontSize: 25}}>Header</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
          <Text> </Text>
          {
            gradientsSample.map((gradient, i) => (
              <>
                <LinearGradient colors={gradient} start={{x: 0, y: 1}} end={{x: 1, y: 0}} style={styles.button1} key={i}>
                  <Pressable onPress={() => setColors(gradient)}>
                    <Text style={styles.text}>Button</Text>
                  </Pressable>
                </LinearGradient>
                <Text> </Text>
              </>
            ))
          }
          <Text> </Text>
          <Pressable onPress={reverseCard} style={styles.sample2}>
            <View style={{alignItems: 'center'}}>
              <Text style={[styles.cardText, {...!isFront && {color: 'rgba(256, 256, 256, 0.7)', fontSize: 23}}]}>{card.front}</Text>
              {!isFront && 
                <Text style={[styles.cardText, {paddingTop: 7}]}>{card.back}</Text>
              }
            </View>
          </Pressable>
          <Text> </Text>
          <Pressable onPress={() => setIsTapped(!isTapped)} style={styles.sample2}>
            <View style={styles.separetedCard}>
              <Text style={styles.cardText}>{card.front}</Text>
            </View>
            <View style={{height: 0.5, width: '100%', backgroundColor: 'rgba(256, 256, 256, 0.5)'}} />
            <View style={styles.separetedCard}>
              {!isTapped ?
                (<FontAwesome5Icon name='hand-pointer' size={20} style={styles.cardText} />) : (<Text style={styles.cardText}>{card.back}</Text>)
              }
            </View>
          </Pressable>
          <Text> </Text>
          <Pressable onPress={() => setIsTapped(!isTapped)} style={styles.sample2}>
            <View style={styles.separetedCard}>
              <Text style={styles.cardText}>{card.front}</Text>
            </View>
            <View style={{height: 0.5, width: '100%', backgroundColor: 'rgba(256, 256, 256, 0.5)'}} />
            <View style={styles.separetedCard}>
              {!isTapped ?
                (<AntDesignIcon name='question' size={20} style={styles.cardText} />) : (<Text style={styles.cardText}>{card.back}</Text>)
              }
            </View>
          </Pressable>
          <Text> </Text>
          <View style={styles.sample2}>
            <Text style={styles.text}>hello world</Text>
            <Text style={styles.text}>イメージはこんな感じ テステス</Text>
            <Text style={styles.text}>あああああああああああああああああああああああああああああああああああああああああああああ</Text>
            <Text> </Text>
            <View style={styles.sample3}>
              <Text style={styles.text}>hello world</Text>
            </View>
          </View>
          <Text> </Text>
          <View style={styles.sample3}>
            <Text style={styles.text}>hello world</Text>
            <Text style={styles.text}>イメージはこんな感じ テステス</Text>
            <Text style={styles.text}>あああああああああああああああああああああああああああああああああああああああああああああ</Text>
          </View>
        </View>
      </ScrollView>
      <View style={{width: '100%', paddingTop: 15, paddingBottom: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <FontAwesome5Icon name="tasks" size={25} style={{color: '#FFF'}} />
        <FontAwesome5Icon name="edit" size={25} style={{color: '#FFF'}} />
        <FontAwesome5Icon name="wrench" size={25} style={{color: '#FFF'}} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: '#FFF',
  },
  cardText: {
    color: '#FFF',
    fontSize: 30,
  },
  separetedCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
  },
  sample2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    padding: 20,
    backgroundColor: 'rgba(256, 256, 256, 0.1)',
    borderColor: 'rgba(256, 256, 256, 0.5)',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
    minHeight: 300,
  },
  sample3: {
    borderRadius: 7,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderStyle: 'solid',
    borderWidth: 0.5,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  button: {
    padding: 15,
    borderColor: 'rgba(256, 256, 256, 0.4)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 100,
  },
  button1: {
    padding: 15,
    borderColor: 'rgba(256, 256, 256, 0.4)',
    borderRadius: 100,
  },
});
