import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  item = {}
  form: FormGroup

  @ViewChild('inputF') inputRef: ElementRef

  constructor() { }

  ngOnInit() {
    // this.items = this.servise.items
    this.form = new FormGroup({
      search: new FormControl(null, Validators.required)
    })

    
  }

  onSubmit(){
    this.item = this.form.value

    // this.form.reset()
    // console.log()
  }

  inputFocus(){
    if(this.inputRef.nativeElement.value){
      this.inputRef.nativeElement.value = ''
    }
  }

}
