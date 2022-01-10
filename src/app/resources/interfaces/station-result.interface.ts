import {ResultsInterface} from "./results.interface";
import {ResultsIndexesEnum} from "../enums/results-indexes.enum";

export interface StationResultInterface {
  stationName: string;

  airQualityIndex: ResultsIndexesEnum;
  assotiationRulesAirQualityIndex: ResultsIndexesEnum;
  measurementDate: string;
  results: ResultsInterface;
}
