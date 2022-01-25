import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../resources/services/api.service";

@Component({
  selector: 'app-association_rules_data',
  templateUrl: './association_rules_data.component.html',
  styleUrls: ['./association_rules_data.component.scss']
})
export class AssociationRulesDataComponent implements OnInit {

  dataSource: Record<string, string | number>[] = [];

  constructor(
    private readonly apiService: ApiService
  ) {

  }

  ngOnInit(): void {
  }
}
