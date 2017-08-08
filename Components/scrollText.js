/**
 * Created by localadmin on 8/7/17.
 */
import React, {Component} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import * as Easing from 'react-native/Libraries/Animated/src/Easing';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import fonts from '../fonts.js'
export default class ScrollText extends Component {
    constructor() {
        super()
        this.animatedValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.animate(0)
    }

    animate(repetition_counter) {
        if (repetition_counter <= 3) {
            this.animatedValue.setValue(0)
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear
                }
            ).start(() => this.animate(repetition_counter + 1))
        }

    }

    render() {
        const movingRight = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300],
        })
        const movingLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300],
        })
        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 1, 1],
            outputRange: [1, 0, 0]
        })

        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0,0)',
                    width: responsiveWidth(100)

                }}
            >
                <View style={{
                    width: responsiveWidth(50),
                }}>
                    <Animated.View
                        style={{
                            marginRight: movingLeft,
                            opacity: opacity,
                        }}
                    >
                        <Text style={[styles.slideLeft, fonts.base_font]}>
                            <FontAwesome>{Icons.caretLeft}</FontAwesome>
                        </Text>
                    </Animated.View>
                </View>
                <View>
                    <Animated.View
                        style={{opacity: opacity}}
                    >
                        <Text style={fonts.base_font}>Scroll to view more</Text>
                    </Animated.View>
                </View>
                <View style={{width: responsiveWidth(50)}}>
                    <Animated.View
                        style={{
                            alignSelf: 'flex-start',
                            marginLeft: movingRight,
                            opacity: opacity,
                        }}
                    >
                        <Text style={[styles.slideRight, fonts.base_font]}>
                            <FontAwesome>{Icons.caretRight}</FontAwesome>
                        </Text>
                    </Animated.View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scroll_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        width: responsiveWidth(100)
    },
    logo_img: {
        width: responsiveWidth(50),
        height: responsiveHeight(75),
    },

});
