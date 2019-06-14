class Weather{
  constructor(city, state){
    this.apiKey = 'fd3077e2058e41a3ab8152206191206'
    this.city = city;
    this.state = state;
  }

  // Fetch Weather from API
  async getWeather(){
    const response = await fetch(`https://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.state}&q=${this.city}`);
    const responseData = await response.json();

    return responseData;
  }
  
  // Change weather location
  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}