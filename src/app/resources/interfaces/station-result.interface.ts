import {ResultsInterface} from "./results.interface";
import {ResultsIndexesEnum} from "../enums/results-indexes.enum";
import {ResultsWeatherInterface} from "./resultsWeather.interface";
import {WeatherResultInterface} from "./weather_result.interface";

export interface StationResultInterface {
  stationName: string;
  airQualityIndex: ResultsIndexesEnum;
  associationRulesAirQualityIndex: ResultsIndexesEnum;
  measurementDate: string;
  results: ResultsInterface;
  weatherData: WeatherResultInterface;
  resultsWeather: ResultsWeatherInterface;
}
