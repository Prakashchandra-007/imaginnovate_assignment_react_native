import React, {useMemo, useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import WeatherCard from '../componets/weatercard';
import {getWeatherData} from '../apis/api';
import {COLORS} from '../constants';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const HomeScreen = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async () => {
    try {
      setIsLoading(true);
      const data = await getWeatherData(city);
      setWeatherData(data.list);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          gap: 2,
          width: '100%',
          justifyContent: 'center',
        }}>
        <TextInput
          style={styles.input}
          placeholder="Enter city"
          value={city}
          onChangeText={setCity}
        />
        <TouchableOpacity onPress={fetchWeather} style={styles.searchBtn}>
          <View
            style={{
              backgroundColor: COLORS.white,
              height: 16,
              width: 16,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Text style={{fontSize: 10, color: COLORS.orange}}>?</Text>
          </View>
          <Text style={{color: COLORS.white}}>Search</Text>
        </TouchableOpacity>
        {isLoading && <ActivityIndicator color={COLORS.orange} />}
      </View>
      <View style={{width: '100%'}}>
        <FlatList
          data={weatherData}
          horizontal={screenHeight < screenWidth}
          renderItem={({item}) => (
            <WeatherCard
              date={new Date(item.dt_txt).toLocaleDateString()}
              temp={item.main.temp}
              description={item.main.description}
              humidity={item.main.humidity}
              tempMin={item.main.temp_min}
              tempMax={item.main.temp_max}
              pressure={item.main.pressure}
            />
          )}
          keyExtractor={item => item.dt}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: screenHeight,
    width: screenWidth,
  },
  input: {
    height: 40,
    borderColor: COLORS.brown,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    maxWidth: 400,
  },
  searchBtn: {
    backgroundColor: COLORS.brown,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#00000',
    padding: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    borderRadius: 4,
  },
});

export default HomeScreen;
