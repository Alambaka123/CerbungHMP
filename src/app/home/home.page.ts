import { Component } from '@angular/core';
import { CerbungService } from '../cerbung.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  cerbungs:any[]=[]
  cari_cerbung="";
  constructor(
    private cerbungservice: CerbungService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(){ 
    this.cerbungs = this.cerbungservice.cerbungs

  }

  ReadCerbung(id:number){
    this.router.navigate(["/read", id]);
  }

}
