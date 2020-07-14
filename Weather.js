import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Options = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#373B44', '#4286f4'],
        title: 'Thunderstorm in the house',
        subtitle: 'Actually, outside of the house'
    },
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ['#89F7FE', '#66A6FF'],
        title: 'Drizzle',
        subtitle: 'Is like rain, but gay 🏳️‍🌈'
    },
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#00C6FB', '#005BEA'],
        title: 'Raining like a MF',
        subtitle: 'For more info look outside'
    },
    Snow: {
        iconName: 'weather-snowy',
        gradient: ['#7DE2FC', '#B9B6E5'],
        title: 'Cold as balls',
        subtitle: 'Do you want to build a snowman? Fuck no.'
    },
    Mist: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Mist!',
        subtitle: "It's like you have no glasses on."
    },
    Smoke: {
        iconName: 'weather-fog',
        gradient: ['#304352', '#d7d2cc'],
        title: '',
        subtitle: ''
    },
    Haze: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: '',
        subtitle: ''
    },
    Dust: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Dusty',
        subtitle: 'Thanks a lot China 🖕🏻'
    },
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#bdc3c7', '#2c3e50'],
        title: '',
        subtitle: ''
    },
    Sand: {
        iconName: 'weather-hail',
        gradient: ['#3E5151', '#DECBA4'],
        title: '',
        subtitle: ''
    },
    Ash: {
        iconName: 'weather-hail',
        gradient: ['#606c88', '#3f4c6b'],
        title: '',
        subtitle: ''
    },
    Squall: {
        iconName: 'weather-rainy',
        gradient: ['#928DAB', '#00d2ff'],
        title: '',
        subtitle: ''
    },
    Tornado: {
        iconName: 'weather-hail',
        gradient: ['#373B44', '#73C8A9'],
        title: '',
        subtitle: ''
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#FF7300', '#FEF253'],
        title: 'Sunny as fuck',
        subtitle: 'Go get your ass burnt'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#D7D2CC', '#304352'],
        title: 'Clouds',
        subtitle: 'I know, fucking boring'
    }
}

export default Weather = ({ temp, condition }) => {
    return (
        <LinearGradient colors={Options[condition].gradient} style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={Options[condition].iconName} size={96} color="#ffffff" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{Options[condition].title}</Text>
                <Text style={styles.subtitle}>{Options[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Mist', 'Smoke', 'Haze', 'Dust', 'Fog', 'Sand', 'Dust', 'Ash', 'Squall', 'Tornado', 'Clear', 'Clouds']).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: '#ffffff'
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: '#ffffff',
        fontSize: 34,
        fontWeight: '300',
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: '600',
        textAlign: "left"
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 40,
        alignItems: "flex-start",
        justifyContent: "center",
    }
});