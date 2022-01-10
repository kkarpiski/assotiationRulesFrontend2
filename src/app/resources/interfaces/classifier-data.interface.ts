import {ClassifierIndexDataInterface} from "./classifier-index-data.interface";
import {ResultKeysEnum} from "../enums/results-key.enum";

export interface ClassifierDataInterface extends ClassifierIndexDataInterface {
  typeOfData: ResultKeysEnum;
}
