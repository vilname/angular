import { AppService } from './../../shared/services/app.services';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-quiestions',
  templateUrl: './quiestions.component.html',
  styleUrls: ['./quiestions.component.css']
})
export class QuiestionsComponent implements OnInit, AfterViewInit {

  items = []
  itemResult = []
  searchSortVal = ''
  analytics = []
  @ViewChild('search') searchRef: ElementRef
  @ViewChild('sortDate') sortDateRef: ElementRef
  @ViewChild('question') questionRef:ElementRef


  constructor(private service: AppService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    const dateConfig: any = {
      label: 'Запросы',
      color: 'rgb(255, 99, 132)'
    }

    this.service.getAllQuestions()
      .subscribe((data) => {
        this.items = data


        this.items.forEach(item => {

          let i = 0

          this.items.forEach(ite => {
            if(item.dateAnalytics === ite.dateAnalytics){
              i += 1

              this.analytics[item.dateAnalytics] = {
                count: i,
                date: item.dateAnalytics
              }
            }
          })
        })

        dateConfig.labels = []
        dateConfig.data = []

        for (var key in this.analytics) {
          dateConfig.labels.push(this.analytics[key].date)
          dateConfig.data.push(this.analytics[key].count)
        }


        const questionCtx = this.questionRef.nativeElement.getContext('2d')

        // questionCtx.canvas.height = '300px'

        new Chart(questionCtx, createChartConfig(dateConfig))

        /// копия массива для поиска
        this.itemResult = this.items.slice()
      })
  }

  searchSort(){
    this.searchSortVal = this.searchRef.nativeElement.value;
    const sort = this.itemResult.filter((item) => {
      let findEl = item.name.toLowerCase().indexOf(this.searchSortVal.toLowerCase()) !== -1 ? true : false 
      return findEl
    })

    this.items = sort

  }

  dateSort(){
    // let dateSort = this.sortDateRef.nativeElement.value;
    
    this.items.reverse()
  }

}

function createChartConfig({labels, data, label, color}){
  return {
    type: 'line',
    options: {
      responsive: true,
      maintainAspectRatio: false
    },
    data: {
      labels,
      datasets: [
        {
          label, data,
          borderColor: color,
          steppedLine: false,
        }
      ]
    }
  }
}
