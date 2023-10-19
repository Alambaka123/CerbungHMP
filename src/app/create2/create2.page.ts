import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CerbungService } from '../cerbung.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create2',
  templateUrl: './create2.page.html',
  styleUrls: ['./create2.page.scss'],
})
export class Create2Page implements OnInit {

  new_content= ""
  cerbungId=0
  new_akses="public"
  constructor(private cerbung:CerbungService, private navCtrl:NavController, private route:ActivatedRoute) { }

  ngOnInit() {
    this.cerbungId = +this.route.snapshot.paramMap.get('id')!
  }

  submit() {
    this.cerbung.addCerbungParagraphs(this.cerbungId, [this.new_content], this.new_akses);
    //this.navCtrl.navigateForward(` /create3/${this.cerbungId}'); // or wherever you want to navigate after creation
    this.navCtrl.navigateForward(`/create3/${this.cerbungId}`);
  }

}
