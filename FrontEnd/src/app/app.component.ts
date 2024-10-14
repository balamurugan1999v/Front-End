import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  balu = 'Naanthan';
  name:any;

  process(){
    console.log("Coming here");
  }

  mailId:any;
  number:any;
  address:any;
  jsonObj:any;
  jsonData:any;
  nameResponse:any;

  submit(){
    this.jsonObj={ 
      name: this.name,
      mailId: this.mailId,
      contactNumber: this.number,
      address: this.address
    };
    console.log(this.jsonObj);
    this.jsonData = JSON.stringify(this.jsonObj);
    console.log(this.jsonData);
    this.callToClearData();
    this.doCheck();
  }

  callToClearData(){
    this.name=null;
    this.mailId=null;
    this.number=null;
    this.address=null;
  }
  doCheck(){
    if(this.name != null && this.address !=null && this.number!=null && this.mailId !=null){
      (document.getElementById('submitButton') as HTMLInputElement).disabled = false;
    }
    else{
      (document.getElementById('submitButton') as HTMLInputElement).disabled = true;
    }
  }
}


