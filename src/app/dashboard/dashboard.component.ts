import { Component } from '@angular/core';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  assetAllocationData : any;
  marketTrendsData: any;
  performanceMetricsData: any;

  constructor(private mockService: MockDataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.mockService.getAssetAllocationData().subscribe(data => {
      this.assetAllocationData = data;
    });

    this.mockService.getMarketTrendsData().subscribe(data => {
      this.marketTrendsData = data;
    });

    this.mockService.getPerformanceMetricsData().subscribe(data => {
      this.performanceMetricsData = data;
    });
  }
}