/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Animated, AppRegistry, Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import * as Easing from 'react-native/Libraries/Animated/src/Easing';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import {Header} from './Components/header';
import {MagIssue} from './Components/magissue';
import {IssueScreen} from './Components/issue';
import {Footer} from './Components/footer';
import {Fade, Wave} from "./Components/wave";


class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
        headerBackTitle: "Back",
    }

    constructor() {
        super()
        this.state = {
            visible: false,
        }
    }

    handleScroll(event){
        var y = event.nativeEvent.contentOffset.y;
        if(y > 300){
            this.setState({visible: true});
        }
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.main_scroll_container}
                    pagingEnabled={true}
                    onScroll={this.handleScroll.bind(this)}
                >
                    <Header/>
                    <Fade visible={this.state.visible}>
                        <Body
                            navigation={this.props.navigation}
                        />
                    </Fade>
                    <Footer/>
                </ScrollView>
            </View>
        );
    }

}

class Body extends Component {
    constructor() {
        super();
        this.state = {
            issues: [
                {key: 4, image: require('./img/spin_july.jpg'), name: 'July'},
                {key: 3, image: require('./img/spin_may.png'), name: 'May'},
                {key: 2, image: require('./img/spin_april.png'), name: 'April'},
                {key: 1, image: require('./img/spin_march.jpg'), name: 'March'},
            ],
            currentPage: 0
        }

    }

    render() {
        return (
            <View style={styles.body_container}>
                <Text style={styles.title}>Issues</Text>
                <ScrollText/>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                >
                    {
                        this.state.issues.map((item, index) => (
                            <View
                                style={styles.mag_issue}
                                key={item.key}
                            >
                                <MagIssue
                                    imagePath={item.image}
                                    name={item.name}
                                    navigation={this.props.navigation}
                                />
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

class ScrollText extends Component {
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
                        <Text style={[styles.slideLeft]}>
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
                        <Text style={[styles.slideRight]}>
                            <FontAwesome>{Icons.caretRight}</FontAwesome>
                        </Text>
                    </Animated.View>
                </View>
            </View>
        );
    }
}


const SpinClass = StackNavigator({
    Home: {screen: HomeScreen},
    Issue: {screen: IssueScreen},
});

const fonts = StyleSheet.create({
    base_font: {
        fontFamily: 'Avenir-MediumOblique',
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    main_scroll_container: {
        flex: 1,
        flexDirection: 'column',
    },
    body_container: {
        height: responsiveHeight(100),
        paddingTop: 5,
    },
    mag_issue: {
        width: responsiveWidth(50),
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        paddingTop: 5,
        fontFamily: 'Avenir-Oblique'
    },
    slideRight: {
        textAlign: 'left',
    },
    slideLeft: {
        textAlign: 'right',
    },
});

AppRegistry.registerComponent('SpinClass', () => SpinClass);

// fontFamily: 'Optima-BoldItalic'