import { Component,Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {


  @Input() index: number = 0;
  @Input() nom: string = "Ibrahim";
  @Input() prenom: string = "Abdourahamane";
  @Input() isEnforme: boolean = true;
  @Input() description: string = "";
  constructor(private datasources: DataService) { }

  ngOnInit(): void {
  }

  onStatuts(){
    this.datasources.setStatus(this.index);
  }

}
