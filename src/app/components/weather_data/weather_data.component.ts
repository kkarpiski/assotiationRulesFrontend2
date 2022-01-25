import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../resources/services/api.service";

@Component({
  selector: 'weather_data.component.ts',
  templateUrl: './weather_data.component.html',
  styleUrls: ['./weather_data.component.scss']
})
export class WeatherDataComponent implements OnInit {

  constructor(
    private readonly apiService: ApiService
  ) {
  }

  ngOnInit(): void {
    /*
    this.apiService.getResults().subscribe(
      results => {
        this.dataSource = this.parseElements(results);
        console.log(JSON.stringify(this.dataSource));
     */
      }
  }
