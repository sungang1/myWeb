import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my';
  isPhone;


  ngOnInit() {

    this.mobileOrPc(window);
  }

 constructor(public router:Router){

 }


  mobileOrPc($window) {
    var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
    this.isPhone = (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
    if(this.isPhone==true){
     this.router.navigateByUrl('/phone')
    }else{
      this.router.navigateByUrl('/pc')
    }
     console.log(this.isPhone);
    
  }

  



}
