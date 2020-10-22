/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import NavigationButtons from './components/NavigationButtons';
import PizzaSvg from './components/svg/PizzaSvg';

const App: () => React$Node = () => {
  const onNextPress = () => {
    console.log('next!');
  };

  const onBackPress = () => {
    console.log('back!');
  }

  return (
    <SafeAreaView>
      <Text style={styles.text}>Default</Text>
      <NavigationButtons
        nextCallback={onNextPress}
        backCallback={onBackPress}
      />

      <View style={styles.horizontalRuler}/>

      <Text style={styles.text}>Icons & Text</Text>
      <NavigationButtons
        withIcons={true}
        nextCallback={onNextPress}
        backCallback={onBackPress}
      />

      <View style={styles.horizontalRuler}/>

      <Text style={styles.text}>Icons Only</Text>
      <NavigationButtons
        withIcons={true}
        withText={false}
        nextCallback={onNextPress}
        backCallback={onBackPress}
      />

      <View style={styles.horizontalRuler}/>

      <Text style={styles.text}>Custom Icons</Text>
      <NavigationButtons
        withIcons={true}
        backIcon={<PizzaSvg width={40} height={40} fill='red'/>}
        nextIcon={<PizzaSvg width={40} height={40} fill='red'/>}
        nextCallback={onNextPress}
        backCallback={onBackPress}
      />

      <View style={styles.horizontalRuler}/>

      <Text style={styles.text}>Next Only</Text>
      <NavigationButtons
        hideBack={true}
        nextCallback={onNextPress}
        backCallback={onBackPress}
      />

      <View style={styles.horizontalRuler}/>

      <Text style={styles.text}>Customized Text</Text>
      <NavigationButtons
        nextCallback={onNextPress}
        backCallback={onBackPress}
        nextText='wanna next bro?'
        backText='wanna go back bro?'
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: '400',
    marginTop: 10,
    marginLeft: 10
  },
  horizontalRuler: {
    flexGrow: 1,
    margin: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    textAlign: 'center'
  }
});
