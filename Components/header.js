/**
 * Created by localadmin on 8/7/17.
 */
import React, {Component} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import * as Easing from 'react-native/Libraries/Animated/src/Easing';

export class Header extends Component {
    render() {
        return (
            <View style={{width:responsiveWidth(100),flexDirection: 'row', backgroundColor: '#060708'}}>
                <ScrollDownText />
                <View style={styles.header_container}>
                    <Image
                        style={styles.logo_img}
                        source={require('../img/spin_logo.jpg')}/>
                </View>
            </View>
        );
    }
}

class ScrollDownText extends Component {
    constructor() {
        super()
        this.animatedValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.animate(0)
    }

    animate(repetition_counter) {
        if (repetition_counter <= 1) {
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
        const movingDown = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300],
        })
        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 1, 1],
            outputRange: [1, 0, 0]
        })

        return (
            <View
                style={styles.slideDown}
            >
                <Animated.View
                    style={{
                        top: movingDown,
                        opacity: opacity,
                    }}
                >
                    <View style={{flexDirection: 'column'}}>
                            <FontAwesome style={styles.arrowColor}>{Icons.caretDown}</FontAwesome>
                            <FontAwesome style={styles.arrowColor}>{Icons.caretDown}</FontAwesome>
                            <FontAwesome style={styles.arrowColor}>{Icons.caretDown}</FontAwesome>
                    </View>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header_container: {
        flexDirection: 'row',
        height: responsiveHeight(100),
        width: responsiveWidth(97),
        backgroundColor: '#060708',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_img: {
        width: responsiveWidth(65),
        height: responsiveHeight(75),
    },
    slideDown: {
        alignItems: 'flex-start',
        paddingLeft: responsiveWidth(2),
        height: 200
    },
    arrowColor: {
        height:15,
        color: '#fff',
        fontSize: 20,
    },
});