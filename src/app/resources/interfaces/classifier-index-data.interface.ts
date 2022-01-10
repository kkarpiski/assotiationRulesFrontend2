import {ResultsIndexesEnum} from "../enums/results-indexes.enum";

export interface ClassifierIndexDataInterface {
  amountOfDefinedValues: number;
  amountOfUndefinedValues: number;
  indexOfData: ResultsIndexesEnum;
  mean: number;
  standardDeviation: number;
}
