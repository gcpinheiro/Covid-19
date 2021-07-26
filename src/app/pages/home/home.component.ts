import { Component, OnInit } from '@angular/core';
import { DataCovidService } from 'src/app/shared/data-covid.service';
import { DataStates } from 'src/app/interfaces/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  responseState?: DataStates;
  constructor(private dataCovidService: DataCovidService) { }

  ngOnInit(): void {
    this.listStates();
  }
  public listStates(){
    this.dataCovidService.getStates().subscribe(datas =>{
      this.responseState = datas;
     console.log(this.responseState?.data[0].uf)
      //console.log(datas.data[0].uf)
    })
  }
  public redirectOrientation(){
      const orientation = document.getElementById("div-orientation");
      document.location.href = 'https://portalarquivos.saude.gov.br/images/pdf/2020/April/03/Cartilha--Informa----es-Coronavirus.pdf';
  }
}
