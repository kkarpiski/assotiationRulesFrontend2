import {Component, ElementRef, ViewChild} from '@angular/core';
import {ApiService} from "../../resources/services/api.service";
import {ResultsIndexesEnum} from "../../resources/enums/results-indexes.enum";
import {IndexResultColorMapper} from "../../resources/general/mappers/index-result-color.mapper";

@Component({
  selector: 'testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {
  public isLoader = false;

  public result: ResultsIndexesEnum | null = null;
  public resultColor: string | null = null;
  public realResult: ResultsIndexesEnum | null = null;
  public realResultColor: string | null = null;

  @ViewChild('C6H6') C6H6: ElementRef | null = null;
  @ViewChild('CO') CO: ElementRef | null = null;
  @ViewChild('NO2') NO2: ElementRef | null = null;
  @ViewChild('O3') O3: ElementRef | null = null;
  @ViewChild('PM10') PM10: ElementRef | null = null;
  @ViewChild('PM25') PM25: ElementRef | null = null;
  @ViewChild('SO2') SO2: ElementRef | null = null;

  constructor(
    private readonly apiService: ApiService
  ) {
  }

  public async onButtonClick(): Promise<void> {
    this.isLoader = true;
    const C6H6 = +this.C6H6?.nativeElement?.value || null;
    const CO = +this.CO?.nativeElement?.value || null;
    const NO2 = +this.NO2?.nativeElement?.value || null;
    const O3 = +this.O3?.nativeElement?.value || null;
    const PM10 = +this.PM10?.nativeElement?.value || null;
    const PM25 = +this.PM25?.nativeElement?.value || null;
    const SO2 = +this.SO2?.nativeElement?.value || null;
    this.apiService.classify({
      C6H6,
      CO,
      NO2,
      O3,
      PM10,
      PM25,
      SO2
    }).subscribe(result => {
      const {bayesClassifiedAirQualityIndex, airQualityIndex} = result;
      this.result = bayesClassifiedAirQualityIndex;
      this.resultColor = `#${new IndexResultColorMapper(bayesClassifiedAirQualityIndex).instance}`;
      this.realResult = airQualityIndex;
      this.realResultColor = `#${new IndexResultColorMapper(airQualityIndex).instance}`;
      this.isLoader = false;
    });
  }
}
