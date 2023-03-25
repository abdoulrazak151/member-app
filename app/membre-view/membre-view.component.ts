import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-membre-view',
  templateUrl: './membre-view.component.html',
  styleUrls: ['./membre-view.component.css']
})
export class MembreViewComponent implements OnInit {

  date = Date.now();
  title = 'Mon Premier Projet Angular';
  membres:any;
  public constructor(private datasources: DataService){
   
  }


  ngOnInit(){
    this.membres=this.datasources.getMembre();
  }
onUpdate(){
  console.log('Mettre a jour!!!');
}

}
