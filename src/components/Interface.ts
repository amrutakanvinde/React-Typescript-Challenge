export interface PropsWeatherData {
    timezone: string,
    current: CurrentWeather
}

export interface CurrentWeather {
    dew_point: number,
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number
}