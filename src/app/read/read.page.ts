import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CerbungService } from '../cerbung.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {

  id = 0

  cerbungs:any[]=[]
  constructor(private route:ActivatedRoute, private cerbungservice:CerbungService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params=>{
        this.id = +params['id']
      }
    )
    this.cerbungs = this.cerbungservice.cerbungs
  }

}
