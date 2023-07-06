<template>
  <ion-page>
    <ion-content class="font">
      <ion-row>
        <ion-col size="2"></ion-col>
        <ion-col size="8">
          <ion-searchbar v-model="city" color="light" animated="true" inputmode="text" placeholder="Search city"
            class="searchBar" @keyup.enter="getCity()"></ion-searchbar>
        </ion-col>
        <ion-col size="2">
        </ion-col>
      </ion-row>
      <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <div v-if="weatherData">
        <div>
          <ion-row>
            <ion-col class="cityTemp ion-text-center" size="12">
              <ion-text class="city">
                {{ this.latitude.name }}<br>
                <ion-text v-if="weatherData.current_weather.weathercode === 0 && weatherData.current_weather.is_day === 1"
                  class="text" src="https://i.ibb.co/ZStstQJ/32e.png">
                  Sunny
                </ion-text>
                <ion-text v-if="weatherData.current_weather.weathercode === 0 && weatherData.current_weather.is_day === 0"
                  class="text" src="https://i.ibb.co/ZStstQJ/32e.png">
                  Clear sky
                </ion-text>
                <ion-text
                  v-if="weatherData.current_weather.weathercode === 56 || weatherData.current_weather.weathercode === 57 || weatherData.current_weather.weathercode === 66 || weatherData.current_weather.weathercode === 67 || weatherData.current_weather.weathercode === 80 || weatherData.current_weather.weathercode === 81 || weatherData.current_weather.weathercode === 82"
                  class="text" src="https://i.ibb.co/Hr3qRFM/heavyrain.png">
                  Heavy rain
                </ion-text>
                <ion-text
                  v-if="weatherData.current_weather.weathercode === 96 || weatherData.current_weather.weathercode === 99"
                  class="text" src="https://i.ibb.co/QQ8cNTd/heavythunder.png">
                  Strong thunderstorm
                </ion-text>
                <ion-text
                  v-if="weatherData.current_weather.weathercode === 51 || weatherData.current_weather.weathercode === 53 || weatherData.current_weather.weathercode === 55 || weatherData.current_weather.weathercode === 61 || weatherData.current_weather.weathercode === 63 || weatherData.current_weather.weathercode === 65"
                  class="text" src="https://i.ibb.co/C0Sm4qY/lightrain.png">
                  Lightly raining
                </ion-text>
                <ion-text v-if="weatherData.current_weather.weathercode === 95" class="text"
                  src="https://i.ibb.co/0ygJLFC/lightthunder.png">
                  Light hunderstorm
                </ion-text>
                <ion-text
                  v-if="weatherData.current_weather.weathercode === 1 || weatherData.current_weather.weathercode === 2 || weatherData.current_weather.weathercode === 3"
                  class="text" src="https://i.ibb.co/L82GB8G/partly.png">
                  Partly cloudy
                </ion-text>
                <ion-text
                  v-if="weatherData.current_weather.weathercode === 45 || weatherData.current_weather.weathercode === 48"
                  class="text" src="https://i.ibb.co/f8grX0r/fog.png">
                  Foggy
                </ion-text>
                <ion-text
                  v-if="weatherData.current_weather.weathercode === 85 || weatherData.current_weather.weathercode === 86 || weatherData.current_weather.weathercode === 77 || weatherData.current_weather.weathercode === 71 || weatherData.current_weather.weathercode === 73 || weatherData.current_weather.weathercode === 75"
                  class="text" src="https://i.ibb.co/bbHs95X/snow.png">
                  Snow fall
                </ion-text>
                <br><ion-text class="temp">{{ Math.round(weatherData.current_weather.temperature)
                }}°</ion-text>
              </ion-text>
              <ion-img v-if="weatherData.current_weather.weathercode === 0 && weatherData.current_weather.is_day === 1"
                class="image" src="https://i.ibb.co/ZStstQJ/32e.png"></ion-img>
              <ion-img
                v-if="weatherData.current_weather.weathercode === 56 || weatherData.current_weather.weathercode === 57 || weatherData.current_weather.weathercode === 66 || weatherData.current_weather.weathercode === 67 || weatherData.current_weather.weathercode === 80 || weatherData.current_weather.weathercode === 81 || weatherData.current_weather.weathercode === 82"
                class="image" src="https://i.ibb.co/Hr3qRFM/heavyrain.png"></ion-img>
              <ion-img
                v-if="weatherData.current_weather.weathercode === 96 || weatherData.current_weather.weathercode === 99"
                class="image" src="https://i.ibb.co/QQ8cNTd/heavythunder.png"></ion-img>
              <ion-img
                v-if="weatherData.current_weather.weathercode === 51 || weatherData.current_weather.weathercode === 53 || weatherData.current_weather.weathercode === 55 || weatherData.current_weather.weathercode === 61 || weatherData.current_weather.weathercode === 63 || weatherData.current_weather.weathercode === 65"
                class="image" src="https://i.ibb.co/C0Sm4qY/lightrain.png"></ion-img>
              <ion-img v-if="weatherData.current_weather.weathercode === 95" class="image"
                src="https://i.ibb.co/0ygJLFC/lightthunder.png"></ion-img>
              <ion-img
                v-if="(weatherData.current_weather.weathercode === 1 || weatherData.current_weather.weathercode === 2 || weatherData.current_weather.weathercode === 3) && (weatherData.current_weather.is_day === 1)"
                class="image" src="https://i.ibb.co/L82GB8G/partly.png"></ion-img>
              <ion-img
                v-if="weatherData.current_weather.weathercode === 45 || weatherData.current_weather.weathercode === 48"
                class="image" src="https://i.ibb.co/f8grX0r/fog.png"></ion-img>
              <ion-img
                v-if="weatherData.current_weather.weathercode === 85 || weatherData.current_weather.weathercode === 86 || weatherData.current_weather.weathercode === 77 || weatherData.current_weather.weathercode === 71 || weatherData.current_weather.weathercode === 73 || weatherData.current_weather.weathercode === 75"
                class="image" src="https://i.ibb.co/bbHs95X/snow.png"></ion-img>
              <ion-img
                v-if="(weatherData.current_weather.weathercode === 1 || weatherData.current_weather.weathercode === 2 || weatherData.current_weather.weathercode === 3 || weatherData.current_weather.weathercode === 0) && (weatherData.current_weather.is_day != 1)"
                class="image" src="https://i.ibb.co/BwXgJYD/moon.png"></ion-img>
            </ion-col>
          </ion-row>
        </div>

        <ion-row class="buttons">
          <ion-col size="4">
            <ion-card class="cardIcons">
              <ion-img class="imageCard" src="https://i.ibb.co/Hr3qRFM/heavyrain.png" />
            </ion-card>
            <ion-card-subtitle>{{ weatherDataDay.daily.precipitation_probability_max[0] }} %</ion-card-subtitle>
          </ion-col>
          <ion-col size="4">
            <ion-card class="cardIcons">
              <ion-img class="imageCard" src="https://i.ibb.co/jL6Jz7X/uv.png" />
            </ion-card>
            <ion-card-subtitle v-if="(weatherDataDay.daily.uv_index_max[0]) <= 3">low</ion-card-subtitle>
            <ion-card-subtitle
              v-if="((weatherDataDay.daily.uv_index_max[0]) > 3) && ((weatherDataDay.daily.uv_index_max[0]) <= 6)">moderate</ion-card-subtitle>
            <ion-card-subtitle
              v-if="((weatherDataDay.daily.uv_index_max[0]) > 6) && ((weatherDataDay.daily.uv_index_max[0]) <= 8)">high</ion-card-subtitle>
            <ion-card-subtitle
              v-if="((weatherDataDay.daily.uv_index_max[0]) > 8) && ((weatherDataDay.daily.uv_index_max[0]) <= 11)">very
              high</ion-card-subtitle>
            <ion-card-subtitle v-if="(weatherDataDay.daily.uv_index_max[0]) > 11">extreme</ion-card-subtitle>
          </ion-col>
          <ion-col size="4">
            <ion-card class="cardIcons">
              <ion-img class="imageCard" src="https://i.ibb.co/c8mjfQn/droplet.png" />
            </ion-card>
            <ion-card-subtitle>{{ weatherDataDay.daily.rain_sum[0] }} mm</ion-card-subtitle>
          </ion-col>
        </ion-row>

        <ion-row class="buttonsTwo">
          <ion-col size="4">
            <ion-card class="cardIcons">
              <ion-img class="imageCard" src="https://i.ibb.co/7RfjVRS/sunrise.png" />
            </ion-card>
            <ion-card-subtitle>{{ String((new Date(weatherDataDay.daily.sunrise[1])).getHours()).padStart(2, '0') }} : {{
              String((new
                Date(weatherDataDay.daily.sunrise[1])).getMinutes()).padStart(2, '0') }} AM</ion-card-subtitle>
          </ion-col>
          <ion-col size="4">
            <ion-card class="cardIcons">
              <ion-img class="imageCard" src="https://i.ibb.co/tpmNqW3/sunset.png" />
            </ion-card>
            <ion-card-subtitle>{{ String((new Date(weatherDataDay.daily.sunset[0])).getHours()).padStart(2, '0') }} : {{
              String((new
                Date(weatherDataDay.daily.sunset[0])).getMinutes()).padStart(2, '0') }} PM</ion-card-subtitle>
          </ion-col>
          <ion-col size="4">
            <ion-card class="cardIcons">
              <ion-img class="imageCard" src="https://i.ibb.co/f8grX0r/fog.png" />
            </ion-card>
            <ion-card-subtitle>{{ weatherData.current_weather.windspeed }} km/h</ion-card-subtitle>
          </ion-col>
        </ion-row>

        <ion-row class="buttonsNext">
          <ion-col size="1"></ion-col>
          <ion-col size="10">
            <ion-text class="todayText">Today</ion-text>
          </ion-col>
          <ion-col size="1">
          </ion-col>
        </ion-row>
        <ion-row class="marginCard">
          <ion-col size="4" class="ion-text-center">
            <ion-card class="todayCard">
              <br>
              <ion-text class="minMaxToday">05:00</ion-text>
              <ion-img v-if="weatherData.hourly.weathercode[5] === 0" class="todayCardImage"
                src="https://i.ibb.co/ZStstQJ/32e.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[5] === 56 || weatherData.hourly.weathercode[5] === 57 || weatherData.hourly.weathercode[5] === 66 || weatherData.hourly.weathercode[5] === 67 || weatherData.hourly.weathercode[5] === 80 || weatherData.hourly.weathercode[5] === 81 || weatherData.hourly.weathercode[5] === 82"
                class="todayCardImage" src="https://i.ibb.co/Hr3qRFM/heavyrain.png"></ion-img>
              <ion-img v-if="weatherData.hourly.weathercode[5] === 96 || weatherData.hourly.weathercode[5] === 99"
                class="todayCardImage" src="https://i.ibb.co/QQ8cNTd/heavythunder.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[5] === 51 || weatherData.hourly.weathercode[5] === 53 || weatherData.hourly.weathercode[5] === 55 || weatherData.hourly.weathercode[5] === 61 || weatherData.hourly.weathercode[5] === 63 || weatherData.hourly.weathercode[5] === 65"
                class="todayCardImage" src="https://i.ibb.co/C0Sm4qY/lightrain.png"></ion-img>
              <ion-img v-if="weatherData.current_weather.weathercode === 95" class="image"
                src="https://i.ibb.co/0ygJLFC/lightthunder.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[5] === 1 || weatherData.hourly.weathercode[5] === 2 || weatherData.hourly.weathercode[5] === 3"
                class="todayCardImage" src="https://i.ibb.co/L82GB8G/partly.png"></ion-img>
              <ion-img v-if="weatherData.hourly.weathercode[5] === 45 || weatherData.hourly.weathercode[5] === 48"
                class="todayCardImage" src="https://i.ibb.co/f8grX0r/fog.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[5] === 85 || weatherData.hourly.weathercode[5] === 86 || weatherData.hourly.weathercode[5] === 77 || weatherData.hourly.weathercode[5] === 71 || weatherData.hourly.weathercode[5] === 73 || weatherData.hourly.weathercode[5] === 75"
                class="todayCardImage" src="https://i.ibb.co/bbHs95X/snow.png"></ion-img>
              <ion-text class="minMaxTodayTemp">{{ Math.round(weatherData.hourly.temperature_2m[5]) }}°</ion-text><br><br>
            </ion-card>
          </ion-col>
          <ion-col size="4" class="ion-text-center">
            <ion-card class="todayCard">
              <br>
              <ion-text class="minMaxToday">10:00</ion-text>
              <ion-img v-if="weatherData.hourly.weathercode[10] === 0" class="todayCardImage"
                src="https://i.ibb.co/ZStstQJ/32e.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[10] === 56 || weatherData.hourly.weathercode[10] === 57 || weatherData.hourly.weathercode[10] === 66 || weatherData.hourly.weathercode[10] === 67 || weatherData.hourly.weathercode[10] === 80 || weatherData.hourly.weathercode[10] === 81 || weatherData.hourly.weathercode[10] === 82"
                class="todayCardImage" src="https://i.ibb.co/Hr3qRFM/heavyrain.png"></ion-img>
              <ion-img v-if="weatherData.hourly.weathercode[10] === 96 || weatherData.hourly.weathercode[10] === 99"
                class="todayCardImage" src="https://i.ibb.co/QQ8cNTd/heavythunder.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[10] === 51 || weatherData.hourly.weathercode[10] === 53 || weatherData.hourly.weathercode[10] === 55 || weatherData.hourly.weathercode[10] === 61 || weatherData.hourly.weathercode[10] === 63 || weatherData.hourly.weathercode[10] === 65"
                class="todayCardImage" src="https://i.ibb.co/C0Sm4qY/lightrain.png"></ion-img>
              <ion-img v-if="weatherData.current_weather.weathercode === 95" class="image"
                src="https://i.ibb.co/0ygJLFC/lightthunder.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[10] === 1 || weatherData.hourly.weathercode[10] === 2 || weatherData.hourly.weathercode[10] === 3"
                class="todayCardImage" src="https://i.ibb.co/L82GB8G/partly.png"></ion-img>
              <ion-img v-if="weatherData.hourly.weathercode[10] === 45 || weatherData.hourly.weathercode[10] === 48"
                class="todayCardImage" src="https://i.ibb.co/f8grX0r/fog.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[10] === 85 || weatherData.hourly.weathercode[10] === 86 || weatherData.hourly.weathercode[10] === 77 || weatherData.hourly.weathercode[10] === 71 || weatherData.hourly.weathercode[10] === 73 || weatherData.hourly.weathercode[10] === 75"
                class="todayCardImage" src="https://i.ibb.co/bbHs95X/snow.png"></ion-img>
              <ion-text class="minMaxTodayTemp">{{ Math.round(weatherData.hourly.temperature_2m[10])
              }}°</ion-text><br><br>
            </ion-card>
          </ion-col>
          <ion-col size="4" class="ion-text-center">
            <ion-card class="todayCard">
              <br>
              <ion-text class="minMaxToday">13:00</ion-text>
              <ion-img v-if="weatherData.hourly.weathercode[13] === 0" class="todayCardImage"
                src="https://i.ibb.co/ZStstQJ/32e.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[13] === 56 || weatherData.hourly.weathercode[13] === 57 || weatherData.hourly.weathercode[13] === 66 || weatherData.hourly.weathercode[13] === 67 || weatherData.hourly.weathercode[13] === 80 || weatherData.hourly.weathercode[13] === 81 || weatherData.hourly.weathercode[13] === 82"
                class="todayCardImage" src="https://i.ibb.co/Hr3qRFM/heavyrain.png"></ion-img>
              <ion-img v-if="weatherData.hourly.weathercode[13] === 96 || weatherData.hourly.weathercode[13] === 99"
                class="todayCardImage" src="https://i.ibb.co/QQ8cNTd/heavythunder.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[13] === 51 || weatherData.hourly.weathercode[13] === 53 || weatherData.hourly.weathercode[13] === 55 || weatherData.hourly.weathercode[13] === 61 || weatherData.hourly.weathercode[13] === 63 || weatherData.hourly.weathercode[13] === 65"
                class="todayCardImage" src="https://i.ibb.co/C0Sm4qY/lightrain.png"></ion-img>
              <ion-img v-if="weatherData.current_weather.weathercode === 95" class="image"
                src="https://i.ibb.co/0ygJLFC/lightthunder.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[13] === 1 || weatherData.hourly.weathercode[13] === 2 || weatherData.hourly.weathercode[13] === 3"
                class="todayCardImage" src="https://i.ibb.co/L82GB8G/partly.png"></ion-img>
              <ion-img v-if="weatherData.hourly.weathercode[13] === 45 || weatherData.hourly.weathercode[13] === 48"
                class="todayCardImage" src="https://i.ibb.co/f8grX0r/fog.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[13] === 85 || weatherData.hourly.weathercode[13] === 86 || weatherData.hourly.weathercode[13] === 77 || weatherData.hourly.weathercode[13] === 71 || weatherData.hourly.weathercode[13] === 73 || weatherData.hourly.weathercode[13] === 75"
                class="todayCardImage" src="https://i.ibb.co/bbHs95X/snow.png"></ion-img>
              <ion-text class="minMaxTodayTemp">{{ Math.round(weatherData.hourly.temperature_2m[12])
              }}°</ion-text><br><br>
            </ion-card>
          </ion-col>
          <ion-col size="4" class="ion-text-center">
            <ion-card class="todayCard">
              <br>
              <ion-text class="minMaxToday">15:00</ion-text>
              <ion-img v-if="weatherData.hourly.weathercode[15] === 0" class="todayCardImage"
                src="https://i.ibb.co/ZStstQJ/32e.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[15] === 56 || weatherData.hourly.weathercode[15] === 57 || weatherData.hourly.weathercode[15] === 66 || weatherData.hourly.weathercode[15] === 67 || weatherData.hourly.weathercode[15] === 80 || weatherData.hourly.weathercode[15] === 81 || weatherData.hourly.weathercode[15] === 82"
                class="todayCardImage" src="https://i.ibb.co/Hr3qRFM/heavyrain.png"></ion-img>
              <ion-img v-if="weatherData.hourly.weathercode[15] === 96 || weatherData.hourly.weathercode[15] === 99"
                class="todayCardImage" src="https://i.ibb.co/QQ8cNTd/heavythunder.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[15] === 51 || weatherData.hourly.weathercode[15] === 53 || weatherData.hourly.weathercode[15] === 55 || weatherData.hourly.weathercode[15] === 61 || weatherData.hourly.weathercode[15] === 63 || weatherData.hourly.weathercode[15] === 65"
                class="todayCardImage" src="https://i.ibb.co/C0Sm4qY/lightrain.png"></ion-img>
              <ion-img v-if="weatherData.current_weather.weathercode === 95" class="image"
                src="https://i.ibb.co/0ygJLFC/lightthunder.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[15] === 1 || weatherData.hourly.weathercode[15] === 2 || weatherData.hourly.weathercode[15] === 3"
                class="todayCardImage" src="https://i.ibb.co/L82GB8G/partly.png"></ion-img>
              <ion-img v-if="weatherData.hourly.weathercode[15] === 45 || weatherData.hourly.weathercode[15] === 48"
                class="todayCardImage" src="https://i.ibb.co/f8grX0r/fog.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[15] === 85 || weatherData.hourly.weathercode[15] === 86 || weatherData.hourly.weathercode[15] === 77 || weatherData.hourly.weathercode[15] === 71 || weatherData.hourly.weathercode[15] === 73 || weatherData.hourly.weathercode[15] === 75"
                class="todayCardImage" src="https://i.ibb.co/bbHs95X/snow.png"></ion-img>
              <ion-text class="minMaxTodayTemp">{{ Math.round(weatherData.hourly.temperature_2m[15])
              }}°</ion-text><br><br>
            </ion-card>
          </ion-col>
          <ion-col size="4" class="ion-text-center">
            <ion-card class="todayCard">
              <br>
              <ion-text class="minMaxToday">18:00</ion-text>
              <ion-img v-if="weatherData.hourly.weathercode[18] === 0" class="todayCardImage"
                src="https://i.ibb.co/ZStstQJ/32e.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[18] === 56 || weatherData.hourly.weathercode[18] === 57 || weatherData.hourly.weathercode[18] === 66 || weatherData.hourly.weathercode[18] === 67 || weatherData.hourly.weathercode[18] === 80 || weatherData.hourly.weathercode[18] === 81 || weatherData.hourly.weathercode[18] === 82"
                class="todayCardImage" src="https://i.ibb.co/Hr3qRFM/heavyrain.png"></ion-img>
              <ion-img v-if="weatherData.hourly.weathercode[18] === 96 || weatherData.hourly.weathercode[18] === 99"
                class="todayCardImage" src="https://i.ibb.co/QQ8cNTd/heavythunder.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[18] === 51 || weatherData.hourly.weathercode[18] === 53 || weatherData.hourly.weathercode[18] === 55 || weatherData.hourly.weathercode[18] === 61 || weatherData.hourly.weathercode[18] === 63 || weatherData.hourly.weathercode[18] === 65"
                class="todayCardImage" src="https://i.ibb.co/C0Sm4qY/lightrain.png"></ion-img>
              <ion-img v-if="weatherData.current_weather.weathercode === 95" class="image"
                src="https://i.ibb.co/0ygJLFC/lightthunder.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[18] === 1 || weatherData.hourly.weathercode[18] === 2 || weatherData.hourly.weathercode[18] === 3"
                class="todayCardImage" src="https://i.ibb.co/L82GB8G/partly.png"></ion-img>
              <ion-img v-if="weatherData.hourly.weathercode[18] === 45 || weatherData.hourly.weathercode[18] === 48"
                class="todayCardImage" src="https://i.ibb.co/f8grX0r/fog.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[18] === 85 || weatherData.hourly.weathercode[18] === 86 || weatherData.hourly.weathercode[18] === 77 || weatherData.hourly.weathercode[18] === 71 || weatherData.hourly.weathercode[18] === 73 || weatherData.hourly.weathercode[18] === 75"
                class="todayCardImage" src="https://i.ibb.co/bbHs95X/snow.png"></ion-img>
              <ion-text class="minMaxTodayTemp">{{ Math.round(weatherData.hourly.temperature_2m[18])
              }}°</ion-text><br><br>
            </ion-card>
          </ion-col>
          <ion-col size="4" class="ion-text-center">
            <ion-card class="todayCard">
              <br>
              <ion-text class="minMaxToday">21:00</ion-text>
              <ion-img v-if="weatherData.hourly.weathercode[21] === 0" class="todayCardImage"
                src="https://i.ibb.co/ZStstQJ/32e.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[21] === 56 || weatherData.hourly.weathercode[21] === 57 || weatherData.hourly.weathercode[21] === 66 || weatherData.hourly.weathercode[21] === 67 || weatherData.hourly.weathercode[21] === 80 || weatherData.hourly.weathercode[21] === 81 || weatherData.hourly.weathercode[21] === 82"
                class="todayCardImage" src="https://i.ibb.co/Hr3qRFM/heavyrain.png"></ion-img>
              <ion-img v-if="weatherData.hourly.weathercode[21] === 96 || weatherData.hourly.weathercode[21] === 99"
                class="todayCardImage" src="https://i.ibb.co/QQ8cNTd/heavythunder.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[21] === 51 || weatherData.hourly.weathercode[21] === 53 || weatherData.hourly.weathercode[21] === 55 || weatherData.hourly.weathercode[21] === 61 || weatherData.hourly.weathercode[21] === 63 || weatherData.hourly.weathercode[21] === 65"
                class="todayCardImage" src="https://i.ibb.co/C0Sm4qY/lightrain.png"></ion-img>
              <ion-img v-if="weatherData.current_weather.weathercode === 95" class="image"
                src="https://i.ibb.co/0ygJLFC/lightthunder.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[21] === 1 || weatherData.hourly.weathercode[21] === 2 || weatherData.hourly.weathercode[21] === 3"
                class="todayCardImage" src="https://i.ibb.co/L82GB8G/partly.png"></ion-img>
              <ion-img v-if="weatherData.hourly.weathercode[21] === 45 || weatherData.hourly.weathercode[21] === 48"
                class="todayCardImage" src="https://i.ibb.co/f8grX0r/fog.png"></ion-img>
              <ion-img
                v-if="weatherData.hourly.weathercode[21] === 85 || weatherData.hourly.weathercode[21] === 86 || weatherData.hourly.weathercode[21] === 77 || weatherData.hourly.weathercode[21] === 71 || weatherData.hourly.weathercode[21] === 73 || weatherData.hourly.weathercode[21] === 75"
                class="todayCardImage" src="https://i.ibb.co/bbHs95X/snow.png"></ion-img>
              <ion-text class="minMaxTodayTemp">{{ Math.round(weatherData.hourly.temperature_2m[21])
              }}°</ion-text><br><br>
            </ion-card>
          </ion-col>
          <ion-col size="12"></ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="1"></ion-col>
          <ion-col size="10">
            <ion-text class="todayText">Next 4 days</ion-text>
          </ion-col>
          <ion-col size="1">
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="1"></ion-col>
          <ion-col size="10">
            <ion-card class="cardLast ion-text-center">
              <ion-row class="rowLast">
                <ion-col size="4">
                  <ion-text>Today</ion-text>
                </ion-col>
                <ion-col size="1"></ion-col>
                <ion-col size="2">
                  <ion-img v-if="weatherDataDay.daily.weathercode[0] === 0" class="imageLast"
                    src="https://i.ibb.co/ZStstQJ/32e.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[0] === 56 || weatherDataDay.daily.weathercode[0] === 57 || weatherDataDay.daily.weathercode[0] === 66 || weatherDataDay.daily.weathercode[0] === 67 || weatherDataDay.daily.weathercode[0] === 80 || weatherDataDay.daily.weathercode[0] === 81 || weatherDataDay.daily.weathercode[0] === 82"
                    class="imageLast" src="https://i.ibb.co/Hr3qRFM/heavyrain.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[0] === 96 || weatherDataDay.daily.weathercode[0] === 99"
                    class="imageLast" src="https://i.ibb.co/QQ8cNTd/heavythunder.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[0] === 51 || weatherDataDay.daily.weathercode[0] === 53 || weatherDataDay.daily.weathercode[0] === 55 || weatherDataDay.daily.weathercode[0] === 61 || weatherDataDay.daily.weathercode[0] === 63 || weatherDataDay.daily.weathercode[0] === 65"
                    class="imageLast" src="https://i.ibb.co/C0Sm4qY/lightrain.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[0] === 95" class="imageLast"
                    src="https://i.ibb.co/0ygJLFC/lightthunder.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[0] === 1 || weatherDataDay.daily.weathercode[0] === 2 || weatherDataDay.daily.weathercode[0] === 3"
                    class="imageLast" src="https://i.ibb.co/L82GB8G/partly.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[0] === 45 || weatherDataDay.daily.weathercode[0] === 48"
                    class="imageLast" src="https://i.ibb.co/f8grX0r/fog.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[0] === 85 || weatherDataDay.daily.weathercode[0] === 86 || weatherDataDay.daily.weathercode[0] === 77 || weatherDataDay.daily.weathercode[0] === 71 || weatherDataDay.daily.weathercode[0] === 73 || weatherDataDay.daily.weathercode[0] === 75"
                    class="imageLast" src="https://i.ibb.co/bbHs95X/snow.png"></ion-img>
                </ion-col>
                <ion-col size="1"></ion-col>
                <ion-col size="2">
                  <ion-text>{{ Math.round(weatherDataDay.daily.temperature_2m_min[0]) }}°</ion-text>
                </ion-col>
                <ion-col size="2">
                  <ion-text>{{ Math.round(weatherDataDay.daily.temperature_2m_max[0]) }}°</ion-text>
                </ion-col>
              </ion-row>

              <ion-row class="rowLast">
                <ion-col size="4">
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[1])).getDay() === 1">Mon</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[1])).getDay() === 2">Tue</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[1])).getDay() === 3">Wed</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[1])).getDay() === 4">Thu</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[1])).getDay() === 5">Fri</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[1])).getDay() === 6">Sat</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[1])).getDay() === 0">Sun</ion-text>
                </ion-col>
                <ion-col size="1"></ion-col>
                <ion-col size="2">
                  <ion-img v-if="weatherDataDay.daily.weathercode[1] === 0" class="imageLast"
                    src="https://i.ibb.co/ZStstQJ/32e.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[1] === 56 || weatherDataDay.daily.weathercode[1] === 57 || weatherDataDay.daily.weathercode[1] === 66 || weatherDataDay.daily.weathercode[1] === 67 || weatherDataDay.daily.weathercode[1] === 80 || weatherDataDay.daily.weathercode[1] === 81 || weatherDataDay.daily.weathercode[1] === 82"
                    class="imageLast" src="https://i.ibb.co/Hr3qRFM/heavyrain.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[1] === 96 || weatherDataDay.daily.weathercode[1] === 99"
                    class="imageLast" src="https://i.ibb.co/QQ8cNTd/heavythunder.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[1] === 51 || weatherDataDay.daily.weathercode[1] === 53 || weatherDataDay.daily.weathercode[1] === 55 || weatherDataDay.daily.weathercode[1] === 61 || weatherDataDay.daily.weathercode[1] === 63 || weatherDataDay.daily.weathercode[1] === 65"
                    class="imageLast" src="https://i.ibb.co/C0Sm4qY/lightrain.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[1] === 95" class="imageLast"
                    src="https://i.ibb.co/0ygJLFC/lightthunder.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[1] === 1 || weatherDataDay.daily.weathercode[1] === 2 || weatherDataDay.daily.weathercode[1] === 3"
                    class="imageLast" src="https://i.ibb.co/L82GB8G/partly.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[1] === 45 || weatherDataDay.daily.weathercode[1] === 48"
                    class="imageLast" src="https://i.ibb.co/f8grX0r/fog.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[1] === 85 || weatherDataDay.daily.weathercode[1] === 86 || weatherDataDay.daily.weathercode[1] === 77 || weatherDataDay.daily.weathercode[1] === 71 || weatherDataDay.daily.weathercode[1] === 73 || weatherDataDay.daily.weathercode[1] === 75"
                    class="imageLast" src="https://i.ibb.co/bbHs95X/snow.png"></ion-img>
                </ion-col>
                <ion-col size="1"></ion-col>
                <ion-col size="2">
                  <ion-text>{{ Math.round(weatherDataDay.daily.temperature_2m_min[1]) }}°</ion-text>
                </ion-col>
                <ion-col size="2">
                  <ion-text>{{ Math.round(weatherDataDay.daily.temperature_2m_max[1]) }}°</ion-text>
                </ion-col>
              </ion-row>

              <ion-row class="rowLast">
                <ion-col size="4">
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[2])).getDay() === 1">Mon</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[2])).getDay() === 2">Tue</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[2])).getDay() === 3">Wed</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[2])).getDay() === 4">Thu</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[2])).getDay() === 5">Fri</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[2])).getDay() === 6">Sat</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[2])).getDay() === 0">Sun</ion-text>
                </ion-col>
                <ion-col size="1"></ion-col>
                <ion-col size="2">
                  <ion-img v-if="weatherDataDay.daily.weathercode[2] === 0" class="imageLast"
                    src="https://i.ibb.co/ZStstQJ/32e.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[2] === 56 || weatherDataDay.daily.weathercode[2] === 57 || weatherDataDay.daily.weathercode[2] === 66 || weatherDataDay.daily.weathercode[2] === 67 || weatherDataDay.daily.weathercode[2] === 80 || weatherDataDay.daily.weathercode[2] === 81 || weatherDataDay.daily.weathercode[2] === 82"
                    class="imageLast" src="https://i.ibb.co/Hr3qRFM/heavyrain.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[2] === 96 || weatherDataDay.daily.weathercode[2] === 99"
                    class="imageLast" src="https://i.ibb.co/QQ8cNTd/heavythunder.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[2] === 51 || weatherDataDay.daily.weathercode[2] === 53 || weatherDataDay.daily.weathercode[2] === 55 || weatherDataDay.daily.weathercode[2] === 61 || weatherDataDay.daily.weathercode[2] === 63 || weatherDataDay.daily.weathercode[2] === 65"
                    class="imageLast" src="https://i.ibb.co/C0Sm4qY/lightrain.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[2] === 95" class="imageLast"
                    src="https://i.ibb.co/0ygJLFC/lightthunder.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[2] === 1 || weatherDataDay.daily.weathercode[2] === 2 || weatherDataDay.daily.weathercode[2] === 3"
                    class="imageLast" src="https://i.ibb.co/L82GB8G/partly.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[2] === 45 || weatherDataDay.daily.weathercode[2] === 48"
                    class="imageLast" src="https://i.ibb.co/f8grX0r/fog.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[2] === 85 || weatherDataDay.daily.weathercode[2] === 86 || weatherDataDay.daily.weathercode[2] === 77 || weatherDataDay.daily.weathercode[2] === 71 || weatherDataDay.daily.weathercode[2] === 73 || weatherDataDay.daily.weathercode[2] === 75"
                    class="imageLast" src="https://i.ibb.co/bbHs95X/snow.png"></ion-img>
                </ion-col>
                <ion-col size="1"></ion-col>
                <ion-col size="2">
                  <ion-text>{{ Math.round(weatherDataDay.daily.temperature_2m_min[2]) }}°</ion-text>
                </ion-col>
                <ion-col size="2">
                  <ion-text>{{ Math.round(weatherDataDay.daily.temperature_2m_max[2]) }}°</ion-text>
                </ion-col>
              </ion-row>

              <ion-row class="rowLast">
                <ion-col size="4">
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[3])).getDay() === 1">Mon</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[3])).getDay() === 2">Tue</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[3])).getDay() === 3">Wed</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[3])).getDay() === 4">Thu</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[3])).getDay() === 5">Fri</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[3])).getDay() === 6">Sat</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[3])).getDay() === 0">Sun</ion-text>
                </ion-col>
                <ion-col size="1"></ion-col>
                <ion-col size="2">
                  <ion-img v-if="weatherDataDay.daily.weathercode[3] === 0" class="imageLast"
                    src="https://i.ibb.co/ZStstQJ/32e.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[3] === 56 || weatherDataDay.daily.weathercode[3] === 57 || weatherDataDay.daily.weathercode[3] === 66 || weatherDataDay.daily.weathercode[3] === 67 || weatherDataDay.daily.weathercode[3] === 80 || weatherDataDay.daily.weathercode[3] === 81 || weatherDataDay.daily.weathercode[3] === 82"
                    class="imageLast" src="https://i.ibb.co/Hr3qRFM/heavyrain.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[3] === 96 || weatherDataDay.daily.weathercode[3] === 99"
                    class="imageLast" src="https://i.ibb.co/QQ8cNTd/heavythunder.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[3] === 51 || weatherDataDay.daily.weathercode[3] === 53 || weatherDataDay.daily.weathercode[3] === 55 || weatherDataDay.daily.weathercode[3] === 61 || weatherDataDay.daily.weathercode[3] === 63 || weatherDataDay.daily.weathercode[3] === 65"
                    class="imageLast" src="https://i.ibb.co/C0Sm4qY/lightrain.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[3] === 95" class="imageLast"
                    src="https://i.ibb.co/0ygJLFC/lightthunder.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[3] === 1 || weatherDataDay.daily.weathercode[3] === 2 || weatherDataDay.daily.weathercode[3] === 3"
                    class="imageLast" src="https://i.ibb.co/L82GB8G/partly.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[3] === 45 || weatherDataDay.daily.weathercode[3] === 48"
                    class="imageLast" src="https://i.ibb.co/f8grX0r/fog.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[3] === 85 || weatherDataDay.daily.weathercode[3] === 86 || weatherDataDay.daily.weathercode[3] === 77 || weatherDataDay.daily.weathercode[3] === 71 || weatherDataDay.daily.weathercode[3] === 73 || weatherDataDay.daily.weathercode[3] === 75"
                    class="imageLast" src="https://i.ibb.co/bbHs95X/snow.png"></ion-img>
                </ion-col>
                <ion-col size="1"></ion-col>
                <ion-col size="2">
                  <ion-text>{{ Math.round(weatherDataDay.daily.temperature_2m_min[3]) }}°</ion-text>
                </ion-col>
                <ion-col size="2">
                  <ion-text>{{ Math.round(weatherDataDay.daily.temperature_2m_max[3]) }}°</ion-text>
                </ion-col>
              </ion-row>

              <ion-row class="rowLast">
                <ion-col size="4">
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[4])).getDay() === 1">Mon</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[4])).getDay() === 2">Tue</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[4])).getDay() === 3">Wed</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[4])).getDay() === 4">Thu</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[4])).getDay() === 5">Fri</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[4])).getDay() === 6">Sat</ion-text>
                  <ion-text v-if="(new Date(weatherDataDay.daily.time[4])).getDay() === 0">Sun</ion-text>
                </ion-col>
                <ion-col size="1"></ion-col>
                <ion-col size="2">
                  <ion-img v-if="weatherDataDay.daily.weathercode[4] === 0" class="imageLast"
                    src="https://i.ibb.co/ZStstQJ/32e.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[4] === 56 || weatherDataDay.daily.weathercode[4] === 57 || weatherDataDay.daily.weathercode[4] === 66 || weatherDataDay.daily.weathercode[4] === 67 || weatherDataDay.daily.weathercode[4] === 80 || weatherDataDay.daily.weathercode[4] === 81 || weatherDataDay.daily.weathercode[4] === 82"
                    class="imageLast" src="https://i.ibb.co/Hr3qRFM/heavyrain.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[4] === 96 || weatherDataDay.daily.weathercode[4] === 99"
                    class="imageLast" src="https://i.ibb.co/QQ8cNTd/heavythunder.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[4] === 51 || weatherDataDay.daily.weathercode[4] === 53 || weatherDataDay.daily.weathercode[4] === 55 || weatherDataDay.daily.weathercode[4] === 61 || weatherDataDay.daily.weathercode[4] === 63 || weatherDataDay.daily.weathercode[4] === 65"
                    class="imageLast" src="https://i.ibb.co/C0Sm4qY/lightrain.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[4] === 95" class="imageLast"
                    src="https://i.ibb.co/0ygJLFC/lightthunder.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[4] === 1 || weatherDataDay.daily.weathercode[4] === 2 || weatherDataDay.daily.weathercode[4] === 3"
                    class="imageLast" src="https://i.ibb.co/L82GB8G/partly.png"></ion-img>
                  <ion-img v-if="weatherDataDay.daily.weathercode[4] === 45 || weatherDataDay.daily.weathercode[4] === 48"
                    class="imageLast" src="https://i.ibb.co/f8grX0r/fog.png"></ion-img>
                  <ion-img
                    v-if="weatherDataDay.daily.weathercode[4] === 85 || weatherDataDay.daily.weathercode[4] === 86 || weatherDataDay.daily.weathercode[4] === 77 || weatherDataDay.daily.weathercode[4] === 71 || weatherDataDay.daily.weathercode[4] === 73 || weatherDataDay.daily.weathercode[4] === 75"
                    class="imageLast" src="https://i.ibb.co/bbHs95X/snow.png"></ion-img>
                </ion-col>
                <ion-col size="1"></ion-col>
                <ion-col size="2">
                  <ion-text>{{ Math.round(weatherDataDay.daily.temperature_2m_min[4]) }}°</ion-text>
                </ion-col>
                <ion-col size="2">
                  <ion-text>{{ Math.round(weatherDataDay.daily.temperature_2m_max[4]) }}°</ion-text>
                </ion-col>
              </ion-row>
            </ion-card>
          </ion-col>
          <ion-col size="1"></ion-col>
        </ion-row>
      </div>
      <div v-if="!weatherData && errorMsg === ''">
        <ion-spinner color="light" name="dots"></ion-spinner>
      </div>
      <div v-if="errorMsg != ''">
        <ion-text class="errorMsg">
          {{ errorMsg }}
        </ion-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonRow, IonCol, IonSearchbar, IonText, IonImg, IonCard, IonCardSubtitle, IonSpinner, IonRefresher, IonRefresherContent } from '@ionic/vue';
import axios from 'axios';

export default {
  components: {
    IonPage,
    IonRefresher, 
    IonRefresherContent,
    IonContent,
    IonRow,
    IonCol,
    IonSearchbar,
    IonText,
    IonImg,
    IonCard,
    IonCardSubtitle,
    IonSpinner
  },
  data() {
    const handleRefresh = (event: CustomEvent) => {
      setTimeout(() => {
        this.getCity();
        event.target.complete();
      }, 2000);
    };
    return {
      weatherData: null,
      weatherDataDay: null,
      city: '',
      longitude: null,
      latitude: null,
      errorMsg: '',
      handleRefresh
    };
  },
  mounted() {
    this.errorMsg = '';
  },
  methods: {

    getCity() {
      this.weatherData = null;
      this.weatherDataDay = null;
      const apiKey = 'ta335xbRbt7OgaDwWp5q0g==uOz3vmDNAziM5nSN';
      const apiUrl = 'https://api.api-ninjas.com/v1/city?name=' + this.city;

      axios.get(apiUrl, {
        headers: {
          'X-Api-Key': apiKey
        }
      })
        .then(response => {
          this.latitude = response.data[0];
          this.longitude = response.data[0];
          this.getWeatherData(this.latitude.latitude, this.longitude.longitude);
          this.getWeatherDataDay(this.latitude.latitude, this.longitude.longitude);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
          this.errorMsg = 'There is no such city!'
        });
    },
    async getWeatherData(latitude, longitude) {
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=precipitation,weathercode,visibility,temperature_2m,relativehumidity_2m,precipitation_probability,rain,snowfall,windspeed_10m,uv_index,is_day&current_weather=true&timezone=Europe%2FBerlin`);
        console.log(response.data)
        this.weatherData = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getWeatherDataDay(latitude, longitude) {
      try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,weathercode,temperature_2m_min,sunrise,sunset,precipitation_probability_max,rain_sum,uv_index_max,precipitation_sum,snowfall_sum,windspeed_10m_max&timezone=Europe%2FBerlin`);
        console.log(response.data)
        this.weatherDataDay = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/pier-sans');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');

ion-content {
  --background: linear-gradient(rgb(31, 45, 97) 0%, rgba(104, 165, 233, 1) 100%);

}

.rowLast {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(205, 205, 205);
}

.cardLast {
  background: rgb(255, 255, 255);
  border-radius: 20px;
  color: black;
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
  font-size: 20px;

}

ion-card {
  filter: drop-shadow(5px 5px 6px #00000010);
}

.todayCardImage {
  height: 50px !important;
  width: 50px !important;
  margin: auto;
}

.marginCard {
  margin-left: 30px;
  margin-right: 30px;
}

.todayText {
  font-size: 30px;
  font-weight: 900;
  color: #ffffff;
  filter: drop-shadow(2px 2px 6px #0000005b);
}

.minMaxToday {
  font-size: 15px;
  font-weight: 300;
  color: #eaeaea;
  font-family: 'Pier Sans', sans-serif;
}

.minMaxTodayTemp {
  color: white;
  font-weight: 700;
  font-size: 20px;
  font-family: 'Pier Sans', sans-serif;
}

ion-searchbar {
  padding-top: 20px;
  --border-radius: 30px !important;
}

.todayCard {
  width: 80%;
  height: 125px;
  margin: auto;
  margin-top: 10px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #0f2c5d;
  margin-bottom: 10px;
  background-image: radial-gradient(at top left, transparent 80%, #ffffff17 67.5%),
    linear-gradient(135deg, #517ca52c 0%, #3f82cf19 100%);
  filter: drop-shadow(5px 5px 3px #0000004f);
}


ion-card-subtitle {
  text-align: center;
  padding-top: 7px;
  color: white;
  font-weight: 300;
  text-transform: capitalize;
  font-family: 'Raleway', sans-serif;
  filter: drop-shadow(5px 5px 6px #00000064);
}

.imageCard {
  width: 60px;
  height: 60px;
  margin: auto;
  padding-top: 7px;
}

.cardIcons {
  text-align: center;
  padding-bottom: 15px;
  background: #0f2c5d;
  border: 1px solid rgba(38, 107, 186, 0.748);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 10px;
  box-shadow: 5px 5px 10px #0a0a0a2d;
  filter: drop-shadow(3px 3px 5px #0000004f);
  width: 70px;
  height: 70px;
  margin: auto;
  background-image: radial-gradient(at top left, transparent 67%, #ffffff17 67.5%),
    linear-gradient(135deg, #517ca52c 0%, #3f82cf19 100%);
}

.buttons {
  bottom: 90px;
  position: relative;
}

.buttonsTwo {
  bottom: 60px;
  position: relative;
}


.city {
  font-size: 40px;
  font-weight: 600 !important;
  color: #e5e5e5;
  filter: drop-shadow(2px 2px 6px #0000005b);
}

.text {
  font-size: 20px;
  font-weight: 300 !important;
}

.temp {
  font-size: 120px;
  font-weight: 900 !important;
  background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(167, 208, 255) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(2px 2px 6px #00000016);
}

.font {
  font-family: 'Pier Sans', sans-serif;
}

.image {
  position: relative;
  bottom: 20%;
  left: 39%;
  width: 200px;
  height: 200px;
  filter: drop-shadow(2px 2px 6px #ffffff32);
}

.cityTemp {
  padding-top: 50px;
}

ion-spinner {
  width: 100px;
  height: 100px;
  margin: -50px 0 0 -50px;
  position: absolute;
  top: 50%;
  left: 50%;
}

.errorMsg {
  width: 200px;
  height: 100px;
  margin: -50px 0 0 -90px;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  color: rgb(214, 214, 214);
}

.imageLast {
  height: 50px;
  width: 50px;
  filter: drop-shadow(4px 3px 2px #00000058);
}
</style>
