import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Platform } from 'react-native';
import IosBackSvg from './svg/IosBackSvg';
import AndroidBackSvg from './svg/AndroidBackSvg';
import IosNextSvg from './svg/IosNextSvg';
import AndroidNextSvg from './svg/AndroidNextSvg';

const defaultIconColor = '#007aff';
const iosBackIcon = <IosBackSvg width={25} height={25} fill={defaultIconColor}/>;
const androidBackIcon = <AndroidBackSvg width={25} height={25} fill={defaultIconColor}/>;
const iosNextIcon = <IosNextSvg width={25} height={25} fill={defaultIconColor}/>;
const androidNextIcon = <AndroidNextSvg width={25} height={25} fill={defaultIconColor}/>;

const NavigationButtons = ({
                            navigation,
                            data,
                            withText = true,
                            withIcons = false,
                            iconPadding = 0,
                            nextScreen,
                            hideBack = false,
                            backText = 'Back',
                            backIcon = Platform.OS === 'ios' ? iosBackIcon : androidBackIcon,
                            isBackDisabled = false,
                            backCallback,
                            hideNext = false,
                            nextText = 'Next',
                            nextIcon = Platform.OS === 'ios' ? iosNextIcon : androidNextIcon,
                            isNextDisabled = false,
                            nextCallback
                          }) => {

  const onBackPress = () => {
    if(backCallback && typeof backCallback === 'function') {
      backCallback();
    }

    if(navigation) {
      navigation.goBack();
    }
  };

  const onNextPress = () => {
    if(nextCallback && typeof nextCallback === 'function') {
      nextCallback();
    }

    if(navigation) {
      navigation.navigate(nextScreen, data);
    }
  };

  return (
    <View style={styles.buttonsContainer}>
      {hideBack ? 
        <View/> :
        <View style={styles.contentContainer}>
          {withIcons && 
            <TouchableOpacity onPress={onBackPress} style={{padding: iconPadding}}>
              {backIcon}
            </TouchableOpacity>
          }

          {withText &&
            <Button
              onPress={onBackPress}
              title={backText || t('buttons.back')}
              disabled={isBackDisabled}
              style={styles.button}
            />
          }
        </View>
      }
      
      {hideNext ? 
        <View/> :
        <View style={styles.contentContainer}>
          {withText &&
            <Button
              onPress={onNextPress}
              title={nextText || t('buttons.next')}
              disabled={isNextDisabled}
              style={styles.button}
            />
          }

          {withIcons &&
            <TouchableOpacity onPress={onNextPress} style={{padding: iconPadding}}>
              {nextIcon}
            </TouchableOpacity>
          }
        </View>
      }
    </View>
  );
}

export default NavigationButtons;

const styles = StyleSheet.create({
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  }
});