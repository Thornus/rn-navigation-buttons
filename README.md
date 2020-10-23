# React Native Navigation Buttons
<p align="center">
  <img src="https://i.imgur.com/68RSHVb.png" width="40%"/>
</p>

## Getting started

`npm install --save rn-navigation-buttons`

This project uses **[react-native-svg](https://github.com/react-native-svg/react-native-svg)** to display icons.

Install it following the instructions on their repo.


## Basic use

``` javascript
import React from 'react';
import NavigationButtons from 'rn-navigation-buttons';

function App() {
  const onNextPress = () => {
    console.log('next!');
  };

  const onBackPress = () => {
    console.log('back!');
  }

  return (
    <NavigationButtons
      nextCallback={onNextPress}
      backCallback={onBackPress}
    />
  );
}

export default App;
```

## Props

`navigation`

Param you can pass if you use [react-navigation](https://reactnavigation.org/).

`data`

Object. Data to pass to the next screen if you use [react-navigation](https://reactnavigation.org/).

`withText`

Boolean. Whether to show text in the buttons. Defaults to true.

`withIcons` 

Boolean. Whether to show icons in the buttons. Defaults to false.

`iconPadding`

Number. Pretty self-explanatory... Padding for the icons. Defaults to 0.

`nextScreen`

String. Name of the screen to advance to if you use [react-navigation](https://reactnavigation.org/).

`hideBack`

Boolean. Whether to hide the back button. Defaults to false.

`backText`

String. Text to display in the back button. Defaults to 'Back'.

`backIcon`

SVG component created using [SVGR](https://react-svgr.com/playground/?native=true). Defaults to iOS or Android back arrow icon based on platform.

`isBackDisabled`

Boolean. Whether the back button should be disabled. Defaults to false.

`backCallback`

Function. Function to call when pressing the back button (optional).

`hideNext`

Boolean. Whether to hide the next button. Defaults to false.

`nextText`

String. Text to display in the next button. Defaults to 'Next'.

`nextIcon`

SVG component created using [SVGR](https://react-svgr.com/playground/?native=true). Defaults to iOS or Android forward arrow icon based on platform.

`isNextDisabled`

Boolean. Whether the next button should be disabled. Defaults to false.

`nextCallback`

Function. Function to call when pressing the next button (optional).

## Example

For a complete example please look at `App.js`.
