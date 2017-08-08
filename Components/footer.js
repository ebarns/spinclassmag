/**
 * Created by localadmin on 8/7/17.
 */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

export class Footer extends Component {
    render() {
        return (
            <View style={{height: responsiveHeight(100)}}>
                <View style={styles.container}>
                    <Image source={require('../img/spin_footer.gif')}/>
                </View>
                <View
                    style={{ height: 50}}
                >
                    <Text style={[fonts.base_font, styles.footer_txt]}>spinclassmag@gmail.com</Text>
                    <Text style={[fonts.base_font, styles.footer_txt]}>web: spinclass.life</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    footer_txt: {
        color: '#BEBEBE',
        textAlign: 'center'
    }
});

const fonts = StyleSheet.create({
    base_font: {
        fontFamily: 'Avenir-Oblique',
    }
});