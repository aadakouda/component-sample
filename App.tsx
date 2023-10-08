import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, StatusBar as SB, Button, Pressable } from 'react-native';

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
  return (
    <SafeAreaView style={{paddingTop: SB.currentHeight}}>
      <LinearGradient colors={colors} start={{x: 0, y: 1}} end={{x: 1, y: 0}} style={styles.background} />
      <ScrollView style={{width: 'auto', height: 'auto'}}>
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
          <Text> </Text>
        </View>
      </ScrollView>
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
  sample: {
    borderRadius: 7,
    padding: 20,
    alignItems: 'center',
    borderColor: 'rgba(256, 256, 256, 0.2)',
    borderStyle: 'solid',
    borderWidth: 0.5,
  },
  sample2: {
    borderRadius: 7,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(256, 256, 256, 0.1)',
    borderColor: 'rgba(256, 256, 256, 0.15)',
    borderStyle: 'solid',
    borderWidth: 1,
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
