import {ResultsIndexesEnum} from "../enums/results-indexes.enum";
import {ResultsInterface} from "./results.interface";

export interface BaseResultInterface {
  airQualityIndex: ResultsIndexesEnum;
  bayesClassifiedAirQualityIndex: ResultsIndexesEnum;
  results: ResultsInterface;
}
