import { Component, OnInit } from '@angular/core';
import { CerbungService } from '../cerbung.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create3',
  templateUrl: './create3.page.html',
  styleUrls: ['./create3.page.scss'],
})
export class Create3Page implements OnInit {

  cerbungId=0;
  cerbungs:any;
  constructor(private cerbung:CerbungService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.cerbungId = +this.route.snapshot.paramMap.get('id')!;
    this.cerbungs = this.cerbung.cerbungs.find(c => c.id === this.cerbungId);
  }

  submit(){
    this.router.navigate(["/home"])
  }

}
