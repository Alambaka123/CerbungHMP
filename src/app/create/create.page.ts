import { Component, OnInit } from '@angular/core';
import { CerbungService } from '../cerbung.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  new_judul = ""
  new_desc = ""
  new_url = ""
  new_genre = ""
/*   new_content="" */
  arr_genre:string[]=["Action", "Romance", "Horror"]
  /* public alertButtons = ['OK'] */
  constructor(private cerbungservice: CerbungService,
    private router: Router, private navCtrl:NavController) { }

  ngOnInit() {
  }

  nextStep() {
    const newId = this.cerbungservice.addCerbungDetails(this.new_judul, "Hitler McLovin", "19/Oktober/2023", this.new_url, this.new_genre, "0", "0", this.new_desc)
    this.new_judul = ""
    this.new_url = ""
    this.new_genre = ""
    this.new_desc = ""
    
    /* this.router.navigate(['/create2']); */
    this.navCtrl.navigateForward(`/create2/${newId}`);
  }

}
