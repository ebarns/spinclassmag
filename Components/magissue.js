/**
 * Created by localadmin on 8/7/17.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
export class MagIssue extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                {/*<Text style={styles.issues_hdr}>{this.props.name}</Text>*/}
                <TouchableHighlight
                    onPress={() => navigate('Issue', {month: this.props.name})}>
                    <Image
                        style={styles.issues_cover_img}
                        source={this.props.imagePath}/>
                </TouchableHighlight>
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
    issues_cover_img: {
        resizeMode: 'contain',
        width: responsiveWidth(40),
        height: responsiveHeight(75)
    },
    issues_hdr: {
        fontFamily: 'Avenir-Oblique',
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 5,
    }
});

