import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../resources/services/api.service";
import {ClassifierConfigInterface} from "../../resources/interfaces/classifier-config.interface";

@Component({
  selector: 'classifier-data',
  templateUrl: './classifier-data.component.html',
  styleUrls: ['./classifier-data.component.scss']
})
export class ClassifierDataComponent implements OnInit {
  public totalAvailableResults: number = 0;

  displayedColumns: string[] = ['NAZWA', 'ROZMIAR ZESTAWU UCZĄCEGO', 'ILOŚĆ KLASYFIKACJI', 'SKUTECZNOŚĆ'];
  dataSource: Record<string, string | number>[] = [];

  public isLoader = false;

  @ViewChild('newNetworkName') newNetworkNameElement: ElementRef | null = null;
  @ViewChild('newNetworkTrainingSize') newNetworkTrainingSetSize: ElementRef | null = null;

  constructor(
    private readonly apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.isLoader = false;
    this.fetchData();
  }

  private async fetchData(): Promise<void> {
    this.apiService.getCurrentConfig().subscribe(config => {
      this.dataSource = this.parseConfig(config);
    })
    this.apiService.getTotalResultsAmount().subscribe(amount => {
      this.totalAvailableResults = amount;
    })
  }

  public async onButtonClick(): Promise<void> {
    this.isLoader = true;
    const newNetworkName = this.newNetworkNameElement?.nativeElement?.value || '';
    const newNetworkTrainingSize = this.newNetworkTrainingSetSize?.nativeElement?.value || 0;
    if (!newNetworkName || !newNetworkTrainingSize || +newNetworkTrainingSize <= 0 || +newNetworkTrainingSize > this.totalAvailableResults) {
      this.isLoader = false;
      window.alert('Invalid form values!');
      return;
    }
    this.apiService.trainNetwork({
      name: newNetworkName,
      trainingSetSize: +newNetworkTrainingSize
    }).subscribe(result => {
      this.fetchData();
      this.isLoader = false;
    });
  }

  private parseConfig(config: ClassifierConfigInterface): Record<string, string | number>[] {
    const {name, trainingSetSize, testsAmount, positiveResults} = config;
    return [{
      name,
      trainingSetSize,
      testsAmount,
      effectiveness: positiveResults ? `${(positiveResults / testsAmount * 100).toFixed(2)}%` : '-'
    }]
  }
}
