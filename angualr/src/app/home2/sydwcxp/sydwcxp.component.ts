import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { env } from '../../env';
@Component({
  selector: 'app-sydwcxp',
  templateUrl: './sydwcxp.component.html',
  styleUrls: ['./sydwcxp.component.css']
})
export class SydwcxpComponent implements OnInit {

  listOfData = [];//数据
  isLoading = true;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.goSearchdata();
  }
  goSearchdata() {
    let url = env.Api(12994);
    this.http.post(url, {}).subscribe((data: any) => {
      this.isLoading = false;
      if (data.error !== '') {
        alert(data.error);
      } else {
        this.listOfData = data.data;
      }
    })
   
  }

}
