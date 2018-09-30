class Take {
  constructor() {}

  async getQuate() {
    const responce = await fetch('http://quotes.rest/qod.json');
    const data = await responce.json();

    return data;
  }
  // // GET THE WEATHER LOCATION
  // async getLocation(latitude, longitude) {
  //   console.log(latitude, longitude);
  //   const responce = await fetch(
  //     `http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true`
  //   );
  //   const data = await responce.json();
  //   return data;
  // }
  // FUNCTION TO GET LOCATION

  async getLocation(city) {
    const responce = await fetch(`http://ip-api.com/json`);
    const data = await responce.json();
    return data;
  }
  // GET THE WEATHER OF CURRENT LOCATION
  async getWeather(city) {
    const responce = await fetch(
      `http://api.apixu.com/v1/forecast.json?key=f758c8a38d2e4b98935103730182506&q=${city}`
    );
    const data = await responce.json();
    return data;
  }
}
export const take = new Take();
