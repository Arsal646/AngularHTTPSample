import { Component, OnInit } from '@angular/core';
import { CommonService } from './common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularPractice';


  constructor(
    private commonService:CommonService
  ){

  }
  ngOnInit(){
    this.commonService.getList().subscribe((res:any)=>{
      console.log(res)
    })

  }
}
