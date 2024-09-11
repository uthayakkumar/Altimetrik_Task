import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private assetAllocationData = {
    labels: ['Stocks', 'Bonds', 'Real Estate', 'Commodities'],
    datasets: [
      {
        data: [40, 30, 20, 10], 
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }
    ]
  };

  private marketTrendsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'S&P 500',
        data: [100, 120, 150, 170, 160],
        borderColor: '#36A2EB',
        fill: false
      },
      {
        label: 'NASDAQ',
        data: [90, 110, 130, 140, 150],
        borderColor: '#FF6384',
        fill: false
      }
    ]
  };

  private performanceMetricsData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
    datasets: [
      {
        label: 'Portfolio',
        data: [10, 12, 14, 8, 16],
        backgroundColor: '#FF6384'
      },
      {
        label: 'Benchmark',
        data: [8, 10, 12, 10, 14],
        backgroundColor: '#36A2EB'
      }
    ]
  };

  getAssetAllocationData(): Observable<any> {
    return of(this.assetAllocationData);
  }

  getMarketTrendsData(): Observable<any> {
    return of(this.marketTrendsData);
  }

  getPerformanceMetricsData(): Observable<any> {
    return of(this.performanceMetricsData);
  }
}