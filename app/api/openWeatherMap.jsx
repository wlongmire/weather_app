const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=368e081da30053c749baefff230518a0&units=imperial';


module.exports = {
  getTemp:function(location) {
    const encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return (axios.get(requestUrl).then(function(res) {

      if (res.data.COD && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }

    }, function(res){
      throw new Error(res.data.message);
    }));

  }
}
