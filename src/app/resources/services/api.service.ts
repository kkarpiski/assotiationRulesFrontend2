import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {StationResultInterface} from "../interfaces/station-result.interface";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ClassifierConfigInterface} from "../interfaces/classifier-config.interface";
import {CreateClassifierConfigParamsInterface} from "../interfaces/create-classifier-config-params.interface";
import {BaseResultInterface} from "../interfaces/base-result.interface";
import {ResultsInterface} from "../interfaces/results.interface";

@Injectable()
export class ApiService {
  constructor(
    private readonly httpService: HttpClient
  ) {
  }

  public getResults(): Observable<StationResultInterface[]> {
    const url = `${environment.apiUrl}station/results`;
    return this.httpService.get<StationResultInterface[]>(url);
  }

  public getCurrentConfig(): Observable<ClassifierConfigInterface> {
    const url = `${environment.apiUrl}classifier-config/current`;
    return this.httpService.get<ClassifierConfigInterface>(url);
  }

  public getTotalResultsAmount(): Observable<number> {
    const url = `${environment.apiUrl}result/count`;
    return this.httpService.get<number>(url);
  }

  public trainNetwork(params: CreateClassifierConfigParamsInterface): Observable<ClassifierConfigInterface> {
    const url = `${environment.apiUrl}classifier-config`;
    return this.httpService.post<ClassifierConfigInterface>(url, params);
  }

  public classify(params: ResultsInterface): Observable<BaseResultInterface> {
    const url = `${environment.apiUrl}bayesian-classifier`;
    return this.httpService.post<BaseResultInterface>(url, params);
  }
}
