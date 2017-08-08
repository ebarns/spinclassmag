import * as React from "react/cjs/react.development";
import { Animated } from 'react-native';
import Animation from 'lottie-react-native';

export class Wave extends React.Component {

    componentDidMount(){
        this.animation.play();
    }

    render() {
        return (
            <Animation
                style={{width: 500, height:500}}
                source={require('../img/lottie/mild_wave.json')}
                ref={animation => { this.animation = animation; }}
                />
        );
    }
}

export class Fade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
        };
    };

    componentWillMount() {
        this._visibility = new Animated.Value(this.props.visible ? 1 : 0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({ visible: true });
        }
        Animated.timing(this._visibility, {
            toValue: nextProps.visible ? 1 : 0,
            duration: 300,
        }).start(() => {
            this.setState({ visible: nextProps.visible });
        });
    }

    render() {
        const { visible, style, children, ...rest } = this.props;

        const containerStyle = {
            opacity: this._visibility.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
            }),
            transform: [
                {
                    scale: this._visibility.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1.1, 1],
                    }),
                },
            ],
        };

        const combinedStyle = [containerStyle, style];
        return (
            <Animated.View style={this.state.visible ? combinedStyle : containerStyle} {...rest}>
                {children}
            </Animated.View>
        );
    }
}