/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    NativeModules,
    requireNativeComponent,
    ViewPropTypes,
    // Animated,
    // Easing,
    Pressable,
    UIManager
} from 'react-native';
import PropTypes from 'prop-types';
import { useLazyRef } from './src/useLazyRef';
import { Neumorph } from './src/Neumorph';
import { AnimatedNeumorph } from './src/AnimatedNeumorph';
// import Shadow from './src/Shadow';
import Animated, { useSharedValue, useAnimatedStyle, Easing, withTiming, useValue, interpolateNode, interpolate } from 'react-native-reanimated';
import { hexToRgb } from './src/utils';


const App: React.FC = () => {

    const [isAnim, setIsAnim] = useState<boolean>(false);
    const [isAnim2, setIsAnim2] = useState<boolean>(false);
    const [isAnim3, setIsAnim3] = useState<boolean>(false);

    const width = useSharedValue(150);

    const height = useSharedValue(150);

    const startAnimation = () => {
        width.value = withTiming(300, {
            duration: 300,
            easing: Easing.ease
        });
        // height.value = withTiming(300, {
        //     duration: 300,
        //     easing: Easing.ease
        // })
    }

    const downAnimation = () => {
        width.value = withTiming(150, {
            duration: 300,
            easing: Easing.ease
        });
        // height.value = withTiming(150, {
        //     duration: 300,
        //     easing: Easing.ease
        // });
    }
    const styleAnim1 = useAnimatedStyle(() => {
        return {
            width: withTiming(width.value, {
                duration: 1500,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1)
            }),
            height: withTiming(height.value, {
                duration: 1500,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1)
            }),
        }
    })
    const styleAnim2 = useAnimatedStyle(() => {
        return {
            width: withTiming(width.value, {
                duration: 1500,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1)
            }),
            height: withTiming(height.value, {
                duration: 1500,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1)
            }),
        }
    })
    const styleAnim3 = useAnimatedStyle(() => {
        return {
            width: withTiming(width.value, {
                duration: 1500,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1)
            }),
            height: withTiming(height.value, {
                duration: 1500,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1)
            }),
        }
    })

    // const styleAnim = useAnimatedStyle(() => {
    //     return {
    //         width: withTiming(width.value, {
    //             duration: 1500,
    //             easing: Easing.bezier(0.25, 0.1, 0.25, 1)
    //         }),
    //         height: withTiming(height.value, {
    //             duration: 1500,
    //             easing: Easing.bezier(0.25, 0.1, 0.25, 1)
    //         }),
    //     }
    // })

    return (
        <SafeAreaView style={styles.container}>
                <Button title="Toggle" onPress={() => startAnimation()}/>
                <Button title="Down" onPress={() => downAnimation()}/>
                <ScrollView contentContainerStyle={{ marginTop: 20, marginLeft: 50, flexDirection: 'row', flexWrap: "wrap" }}>
                    <Pressable onPressIn={() => setIsAnim(true)} onPressOut={() => setIsAnim(false)}>
                        <AnimatedNeumorph
                            inner={isAnim}
                            style={[styleAnim1,{ 
                                backgroundColor: '#dddddd',
                                shadowOpacity: 1,
                                shadowRadius: 4,
                                borderRadius: 50,
                                marginTop: 20,
                                marginRight: 20
                            }]}
                        />
                    </Pressable>
                    <Pressable onPressIn={() => setIsAnim2(true)} onPressOut={() => setIsAnim2(false)}>
                        <AnimatedNeumorph
                            inner={isAnim2}
                            style={[styleAnim2,{ 
                                backgroundColor: '#dddddd',
                                shadowOpacity: 1,
                                shadowRadius: 4,
                                borderRadius: 50,
                                marginTop: 20,
                                marginRight: 20
                            }]}
                        />
                    </Pressable>
                    <Pressable onPressIn={() => setIsAnim3(true)} onPressOut={() => setIsAnim3(false)}>
                        <AnimatedNeumorph
                            inner={isAnim3}
                            style={[styleAnim3,{ 
                                backgroundColor: '#dddddd',
                                shadowOpacity: 1,
                                shadowRadius: 4,
                                borderRadius: 50,
                                marginTop: 20,
                                marginRight: 20,
                            }]}
                        />
                    </Pressable>
                    <Neumorph
                        inner
                        darkShadowColor="#000000"
                        lightShadowColor="#ffffff"
                        style={{
                            backgroundColor: '#800080',
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            borderRadius: 100,
                            marginTop: 20,
                            marginRight: 20,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Neumorph
                            darkShadowColor="#000000"
                            lightShadowColor="#ffffff"
                            style={{
                                backgroundColor: '#dddddd',
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                borderRadius: 100,
                                width: 125,
                                height: 125
                            }}
                        />
                    </Neumorph>
                    <Neumorph
                        inner
                        lightShadowColor="#0000ff"
                        darkShadowColor="#ff0000"
                        style={{
                            backgroundColor: '#dddddd',
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            borderRadius: 100,
                            marginTop: 20,
                            marginRight: 20,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    />
                    <Neumorph
                        inner
                        darkShadowColor="#000000"
                        lightShadowColor="#ffffff"
                        style={{
                            backgroundColor: '#800080',
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            borderRadius: 100,
                            marginTop: 20,
                            marginRight: 20,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Neumorph
                            darkShadowColor="#000000"
                            lightShadowColor="#ffffff"
                            style={{
                                backgroundColor: '#dddddd',
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                borderRadius: 100,
                                width: 125,
                                height: 125
                            }}
                        />
                    </Neumorph>
                    <Neumorph
                        inner
                        darkShadowColor="#000000"
                        lightShadowColor="#ffffff"
                        style={{
                            backgroundColor: '#800080',
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            borderRadius: 100,
                            marginTop: 20,
                            marginRight: 20,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Neumorph
                            darkShadowColor="#000000"
                            lightShadowColor="#ffffff"
                            style={{
                                backgroundColor: '#dddddd',
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                borderRadius: 100,
                                width: 125,
                                height: 125
                            }}
                        />
                    </Neumorph>
                    <Neumorph
                        inner
                        darkShadowColor="#000000"
                        lightShadowColor="#ffffff"
                        style={{
                            backgroundColor: '#800080',
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            borderRadius: 100,
                            marginTop: 20,
                            marginRight: 20,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Neumorph
                            darkShadowColor="#000000"
                            lightShadowColor="#ffffff"
                            style={{
                                backgroundColor: '#dddddd',
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                borderRadius: 100,
                                width: 125,
                                height: 125
                            }}
                        />
                    </Neumorph>
                    <Neumorph
                        inner
                        darkShadowColor="#000000"
                        lightShadowColor="#ffffff"
                        style={{
                            backgroundColor: '#800080',
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            borderRadius: 100,
                            marginTop: 20,
                            marginRight: 20,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Neumorph
                            darkShadowColor="#000000"
                            lightShadowColor="#ffffff"
                            style={{
                                backgroundColor: '#dddddd',
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                borderRadius: 100,
                                width: 125,
                                height: 125
                            }}
                        />
                    </Neumorph>
                    <Neumorph
                        inner
                        darkShadowColor="#000000"
                        lightShadowColor="#ffffff"
                        style={{
                            backgroundColor: '#800080',
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            borderRadius: 100,
                            marginTop: 20,
                            marginRight: 20,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Neumorph
                            darkShadowColor="#000000"
                            lightShadowColor="#ffffff"
                            style={{
                                backgroundColor: '#dddddd',
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                borderRadius: 100,
                                width: 125,
                                height: 125
                            }}
                        />
                    </Neumorph>
                    <Neumorph
                        inner
                        darkShadowColor="#000000"
                        lightShadowColor="#ffffff"
                        style={{
                            backgroundColor: '#800080',
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            borderRadius: 100,
                            marginTop: 20,
                            marginRight: 20,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Neumorph
                            darkShadowColor="#000000"
                            lightShadowColor="#ffffff"
                            style={{
                                backgroundColor: '#dddddd',
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                borderRadius: 100,
                                width: 125,
                                height: 125
                            }}
                        />
                    </Neumorph>
                    <Neumorph
                        inner
                        darkShadowColor="#000000"
                        lightShadowColor="#ffffff"
                        style={{
                            backgroundColor: '#800080',
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            borderRadius: 100,
                            marginTop: 20,
                            marginRight: 20,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Neumorph
                            darkShadowColor="#000000"
                            lightShadowColor="#ffffff"
                            style={{
                                backgroundColor: '#dddddd',
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                borderRadius: 100,
                                width: 125,
                                height: 125
                            }}
                        />
                    </Neumorph>
                    <Neumorph
                        inner
                        darkShadowColor="#000000"
                        lightShadowColor="#ffffff"
                        style={{
                            backgroundColor: '#800080',
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            borderRadius: 100,
                            marginTop: 20,
                            marginRight: 20,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Neumorph
                            darkShadowColor="#000000"
                            lightShadowColor="#ffffff"
                            style={{
                                backgroundColor: '#dddddd',
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                borderRadius: 100,
                                width: 125,
                                height: 125
                            }}
                        />
                    </Neumorph>
                    <Neumorph
                        inner
                        darkShadowColor="#000000"
                        lightShadowColor="#ffffff"
                        style={{
                            backgroundColor: '#800080',
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            borderRadius: 100,
                            marginTop: 20,
                            marginRight: 20,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Neumorph
                            darkShadowColor="#000000"
                            lightShadowColor="#ffffff"
                            style={{
                                backgroundColor: '#dddddd',
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                borderRadius: 100,
                                width: 125,
                                height: 125
                            }}
                        />
                    </Neumorph>
                    <Neumorph
                        inner
                        darkShadowColor="#000000"
                        lightShadowColor="#ffffff"
                        style={{
                            backgroundColor: '#800080',
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            borderRadius: 100,
                            marginTop: 20,
                            marginRight: 20,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Neumorph
                            darkShadowColor="#000000"
                            lightShadowColor="#ffffff"
                            style={{
                                backgroundColor: '#dddddd',
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                borderRadius: 100,
                                width: 125,
                                height: 125
                            }}
                        />
                    </Neumorph>
                    <Neumorph
                        inner
                        darkShadowColor="#000000"
                        lightShadowColor="#ffffff"
                        style={{
                            backgroundColor: '#800080',
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            borderRadius: 100,
                            marginTop: 20,
                            marginRight: 20,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Neumorph
                            darkShadowColor="#000000"
                            lightShadowColor="#ffffff"
                            style={{
                                backgroundColor: '#dddddd',
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                borderRadius: 100,
                                width: 125,
                                height: 125
                            }}
                        />
                    </Neumorph>
                    <Neumorph
                        inner
                        darkShadowColor="#000000"
                        lightShadowColor="#ffffff"
                        style={{
                            backgroundColor: '#800080',
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            borderRadius: 100,
                            marginTop: 20,
                            marginRight: 20,
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Neumorph
                            darkShadowColor="#000000"
                            lightShadowColor="#ffffff"
                            style={{
                                backgroundColor: '#dddddd',
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                borderRadius: 100,
                                width: 125,
                                height: 125
                            }}
                        />
                    </Neumorph>
                </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dddddd',
        flex: 1
    }
})

export default App;
