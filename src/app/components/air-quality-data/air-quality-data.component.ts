import {Component, OnInit} from '@angular/core';
import {StationResultInterface} from "../../resources/interfaces/station-result.interface";
import {IndexResultColorMapper} from "../../resources/general/mappers/index-result-color.mapper";
import {ApiService} from "../../resources/services/api.service";

@Component({
  selector: 'air-quality-data',
  templateUrl: './air-quality-data.component.html',
  styleUrls: ['./air-quality-data.component.scss']
})
export class AirQualityDataComponent implements OnInit {
  displayedColumns: string[] = ['NAZWA STACJI', 'DATA POMIARU','POGODA', 'C6H6', 'CO', 'NO2', 'O3', 'PM10', 'PM25', 'SO2', 'WYNIK', 'KLASA'];
  dataSource: Record<string, string | number>[] = [];

  constructor(
    private readonly apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.apiService.getResults().subscribe(
      results => {
        this.dataSource = this.parseElements(results);
        console.log(JSON.stringify(this.dataSource));
      });
  }

  private parseElements(elements: StationResultInterface[]): Record<string, string | number>[] {
    const result: Record<string, string | number>[] = [];
    elements.forEach(element => {
      const { stationName, airQualityIndex, assotiationRulesAirQualityIndex, results, measurementDate} = element;
      const {C6H6, NO2, O3, CO, SO2, PM25, PM10} = results;
      const defaultResult = '-';
      const date = new Date(measurementDate);
      result.push({
        stationName: stationName,
        measurementDate: `${('0' + date.getDay()).slice(-2)}-${('0' + date.getMonth()).slice(-2)}-${date.getFullYear()} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`,
        C6H6: C6H6?.toFixed(2) ?? defaultResult,
        CO: CO?.toFixed(2) ?? defaultResult,
        NO2: NO2?.toFixed(2) ?? defaultResult,
        O3: O3?.toFixed(2) ?? defaultResult,
        PM10: PM10?.toFixed(2) ?? defaultResult,
        PM25: PM25?.toFixed(2) ?? defaultResult,
        SO2: SO2?.toFixed(2) ?? defaultResult,
        result: assotiationRulesAirQualityIndex,
        resultColor: `#${new IndexResultColorMapper(assotiationRulesAirQualityIndex).instance}`,
        realResult: airQualityIndex,
        realResultColor: `#${new IndexResultColorMapper(airQualityIndex).instance}`
      })
    });
    return result;
  }
}
