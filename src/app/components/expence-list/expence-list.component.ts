import { Component, OnInit } from '@angular/core';
import { Expence } from '../../interfaces/expence';
import { ExpenceServiceService } from 'src/app/servises/expence-service/expence-service.service';
import { SortService } from 'src/app/servises/sort/sort.service';

@Component({
  selector: 'app-expence-list',
  templateUrl: './expence-list.component.html',
  styleUrls: ['./expence-list.component.scss'],
})
export class ExpenceListComponent implements OnInit {
  public keys: string[] = [];
  public dates: Date[] = [];
  public expences: Record<string, Expence[]> = {};

  constructor(private expenceService: ExpenceServiceService, private sortService: SortService) {}

  ngOnInit(): void {
    this.expenceService.expences$.subscribe((expences) => {
      this.expences = expences;
      this.keys = Object.keys(expences);
      
      this.dates = this.sortService.sort(this.keys.map((el) => new Date(el)));

      this.keys = this.dates.map(date => this.expenceService.getDate(date));
    });
  }
}
