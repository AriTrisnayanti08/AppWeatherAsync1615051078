import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  AppRegistry,
  Image,
  View } from 'react-native';

  const temp = require('./src/image/temp.png');
  const speed = require('./src/image/speed.png');
  const main = require('./src/image/main.png');
  const main1 = require('./src/image/main1.png');
  const sunrise = require('./src/image/sunrise.png');
  const sunset = require('./src/image/sunset.png');
  const pressure = require('./src/image/pressure.png');
  const Humidity = require('./src/image/Humidity.png');
  const sealevel = require('./src/image/sealevel.png');
  const ground = require('./src/image/ground.png');

export default class AppWeather extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        kota: '',
        forecast: {
          main: ' ',
          description: ' ',
          temp: ' ',
          pressure: ' ',
          humidity: ' ',
          sea_level: ' ',
          grnd_level: ' ',
          speed: ' ',
          sunrise: ' ',
          sunset: ' '
        }
      };
   }

 getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.kota + '&appid=15919cdce67c7ea2b912f9adfe6d005e&units=metric';
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast: {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
      }
    });
    }
    );
    }

  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.header}>
          <Text style={{ padding: 20, fontSize: 22, color: 'white' }}>
          PRAKIRAAN CUACA</Text>
      </View>
      <View style={styles.box2}>
          <Text style={{ fontSize: 20 }}> Masukkan Nama Kota</Text>
          <TextInput
            style={{
              height: 40,
              width: 250,
              margin: 10,
              backgroundColor: 'white',
              textAlign: 'center'
            }}
            onChangeText={(kota) => this.setState({ kota })}
            keyboardType='ascii-capable'
          />
          <Button
            onPress={() => this.getWeather()}
            marginBottom="20"
            title="Telusuri"
            color="#01579B"
            accessibilityLabel="Telusuri"
          />
      </View>
      <View style={styles.box3}>
        <View style={styles.button1}>
          <View style={styles.iconContainer}>
            <Image source={temp} style={styles.icon} />
          </View>
         </View>
        <View style={styles.button2}><Text>Temp : {'\n'}
          {this.state.forecast.temp}{'\n'}</Text></View>
        <View style={styles.button1}>
          <View style={styles.iconContainer}>
            <Image source={speed} style={styles.icon} />
          </View>
          </View>
        <View style={styles.button2}><Text>Wind Speed: {'\n'}
          {this.state.forecast.speed}{'\n'}</Text></View>
      </View>

      <View style={styles.box3}>
        <View style={styles.button1}>
          <View style={styles.iconContainer}>
            <Image source={main} style={styles.icon} />
          </View>
        </View>
        <View style={styles.button2}><Text>Main : {'\n'}
          {this.state.forecast.main}{'\n'}</Text></View>
        <View style={styles.button1}>
          <View style={styles.iconContainer}>
            <Image source={main1} style={styles.icon} />
          </View>
        </View>
        <View style={styles.button2}><Text>Main Desc : {'\n'}
          {this.state.forecast.description}{'\n'}</Text></View>
      </View>
      <View style={styles.box3}>
        <View style={styles.button1}>
          <View style={styles.iconContainer}>
            <Image source={sunrise} style={styles.icon} />
          </View>
        </View>
        <View style={styles.button2}><Text>Sunrise : {'\n'}
          {this.state.forecast.sunrise}{'\n'}</Text></View>
        <View style={styles.button1}>
          <View style={styles.iconContainer}>
            <Image source={sunset} style={styles.icon} />
          </View>
        </View>
        <View style={styles.button2}><Text>Sunset : {'\n'}
          {this.state.forecast.sunset}{'\n'}</Text></View>
      </View>
      <View style={styles.box3}>
        <View style={styles.button1}>
          <View style={styles.iconContainer}>
            <Image source={pressure} style={styles.icon} />
          </View>
        </View>
        <View style={styles.button2}><Text>Pressure : {'\n'}
          {this.state.forecast.pressure}{'\n'}</Text></View>
        <View style={styles.button1}>
          <View style={styles.iconContainer}>
            <Image source={Humidity} style={styles.icon} />
          </View>
          </View>
        <View style={styles.button2}><Text>Humidity : {'\n'}
          {this.state.forecast.humidity}{'\n'}</Text></View>
      </View>
      <View style={styles.box3}>
        <View style={styles.button1}>
          <View style={styles.iconContainer}>
            <Image source={sealevel} style={styles.icon} />
          </View>
          </View>
        <View style={styles.button2}><Text>Sea Level :{'\n'}
          {this.state.forecast.sea_level}{'\n'}</Text></View>
        <View style={styles.button1}>
          <View style={styles.iconContainer}>
            <Image source={ground} style={styles.icon} />
          </View>
        </View>
        <View style={styles.button2}><Text>Ground Level :{'\n'}
          {this.state.forecast.grnd_level}{'\n'}</Text></View>
      </View>
      <View style={styles.footer}>
        <Text style={{ padding: 10, fontSize: 15, color: 'white' }}>Copyright@Ari_Trisnayanti</Text>
      </View>
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#E3F2FD',
    flex: 1,
    flexDirection: 'column'
  },
  box2: {
    flex: 1.3,
    marginTop: 12,
    marginLeft: 15,
    marginRight: 20,
    backgroundColor: '#1E88E5',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center'
  },
  box3: {
    flex: 0.0,
    backgroundColor: '#E3F2FD',
    marginTop: 13,
    marginLeft: 15,
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button1: {
    width: 50,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E88E5'
  },
  button2: {
    width: 115,
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#BBDEFB',
    marginRight: 7
  },
  text: {
    padding: 15,
    fontSize: 15
  },
  header: {
    marginTop: 15,
    flex: 0.4,
    backgroundColor: '#0D47A1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 0.4,
    backgroundColor: '#0D47A1',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
  icon: {
    height: 50,
    width: 50,
  }
});
AppRegistry.registerComponent('AppForm2', () => AppWeather);
