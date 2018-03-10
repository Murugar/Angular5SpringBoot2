import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  version: any;
  test1 = 'hello from the component';
  greetings = 'Welcome to Spring5 Boot2 Angular5';

  constructor(private http: HttpClient) {
      
     
  }
  

  ngOnInit() {
      
      
        
  
    this.http
      .get('http://localhost:8080/service/version')
      .subscribe(data => {
        console.log(data);
        this.version = data;
      });
    
   
    
  }
}
