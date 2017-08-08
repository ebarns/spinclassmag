/**
 * Created by localadmin on 8/7/17.
 */
import React, {Component} from 'react';
import {Image, View, StyleSheet, ScrollView} from 'react-native';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

export class IssueScreen extends Component {

    issueHandler(issue_month) {
        switch (issue_month) {
            case 'March':
                return marchMag;
            case 'April':
                return aprilMag;
            case 'May'  :
                return mayMag;
            case 'July' :
                return julyMag;
        }
    }

    renderMonth(issue_month) {
        var mag = this.issueHandler(issue_month);
        this.mag_length = mag.length;
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                >
                    {
                        mag.map((item, index) => (
                            <View key={item.key}
                                  style={styles.issues_img_container}
                            >
                                <Image
                                    style={this.issueImageStyle(item.key)}
                                    source={item.image}

                                />
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }

    issueImageStyle = function (image_id) {
        if (image_id === 1 || image_id === this.mag_length) {
            return styles.cover_img;
        }
        else {
            return styles.issue_img;
        }
    }

    render() {
        const {params} = this.props.navigation.state;
        return this.renderMonth(params.month);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    issues_img_container: {
        width: responsiveWidth(100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    issue_img: {
        resizeMode: 'contain',
        width: responsiveWidth(90),
        height: responsiveHeight(80),
        padding: 100,
    },
    cover_img: {
        resizeMode: 'contain',
        width: responsiveWidth(90),
        height: responsiveHeight(80),
    },
});


mag_length = 0;
marchMag = [
    {key: 1, image: require('../img/spin_march/page_one.jpg')},
    {key: 2, image: require('../img/spin_march/page_two.jpg')},
    {key: 3, image: require('../img/spin_march/page_three.jpg')},
    {key: 4, image: require('../img/spin_march/page_four.jpg')},
    {key: 5, image: require('../img/spin_march/page_five.jpg')},
    {key: 6, image: require('../img/spin_march/page_six.jpg')},
    {key: 7, image: require('../img/spin_march/page_seven.jpg')},
];

aprilMag = [
    {key: 1, image: require('../img/spin_april/page_1.png')},
    {key: 2, image: require('../img/spin_april/page_2.png')},
    {key: 3, image: require('../img/spin_april/page_3.png')},
    {key: 4, image: require('../img/spin_april/page_4.png')},
    {key: 5, image: require('../img/spin_april/page_5.png')},
    {key: 6, image: require('../img/spin_april/page_6.png')},
    {key: 7, image: require('../img/spin_april/page_7.png')},
    {key: 8, image: require('../img/spin_april/page_8.png')},
    {key: 9, image: require('../img/spin_april/page_9.png')},
    {key: 10, image: require('../img/spin_april/page_10.png')},
];
mayMag = [
    {key: 1, image: require('../img/spin_may/page_1.png')},
    {key: 2, image: require('../img/spin_may/page_2.png')},
    {key: 3, image: require('../img/spin_may/page_3.png')},
    {key: 4, image: require('../img/spin_may/page_4.png')},
    {key: 5, image: require('../img/spin_may/page_5.png')},
    {key: 6, image: require('../img/spin_may/page_6.png')},
    {key: 7, image: require('../img/spin_may/page_7.png')},
    {key: 8, image: require('../img/spin_may/page_8.png')},
    {key: 9, image: require('../img/spin_may/page_9.png')},
    {key: 10, image: require('../img/spin_may/page_10.png')},
    {key: 11, image: require('../img/spin_may/page_11.png')},
    {key: 12, image: require('../img/spin_may/page_12.png')},
    {key: 13, image: require('../img/spin_may/page_13.png')},
    {key: 14, image: require('../img/spin_may/page_14.png')},
    {key: 15, image: require('../img/spin_may/page_15.png')},
    {key: 16, image: require('../img/spin_may/page_16.png')},
];
julyMag = [
    {key: 1, image: require('../img/spin_july/page_1.jpg')},
    {key: 2, image: require('../img/spin_july/page_2.jpg')},
    {key: 3, image: require('../img/spin_july/page_3.jpg')},
    {key: 4, image: require('../img/spin_july/page_4.jpg')},
    {key: 5, image: require('../img/spin_july/page_5.jpg')},
    {key: 6, image: require('../img/spin_july/page_6.jpg')},
    {key: 7, image: require('../img/spin_july/page_7.jpg')},
    {key: 8, image: require('../img/spin_july/page_8.jpg')},
    {key: 9, image: require('../img/spin_july/page_9.jpg')},
    {key: 10, image: require('../img/spin_july/page_10.jpg')},
    {key: 11, image: require('../img/spin_july/page_11.jpg')},
    {key: 12, image: require('../img/spin_july/page_12.jpg')},
    {key: 13, image: require('../img/spin_july/page_13.jpg')},
    {key: 14, image: require('../img/spin_july/page_14.jpg')},
    {key: 15, image: require('../img/spin_july/page_15.jpg')},
    {key: 16, image: require('../img/spin_july/page_16.jpg')},
    {key: 17, image: require('../img/spin_july/page_17.jpg')},
];