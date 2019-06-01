import { AppService } from './../../shared/services/app.services';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges {

  @Input('item') item: {}
  
  resultItems = ''
  loader = false

  constructor(private service: AppService) { }

  ngOnChanges(changes: SimpleChanges){
    this.loader = true
    if(changes.item.currentValue !== changes.item.previousValue){
      this.service.wikiData(changes.item.currentValue)
      .subscribe((data) => {
        this.loader = false
        this.resultItems = data
      })
    }

    
  }

  
}
