import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  user_name=""
  inPassword=""
  alertButtons=['OK']

  constructor(private router: Router, private alertController: AlertController) {}

  async signIn() {
    if (this.user_name === 'Hitler' && this.inPassword === '123456') {
      this.router.navigate(['/home']);
      const alert = await this.alertController.create({
        header: 'Sign In',
        message: 'Sign In Successfully',
        buttons: ['OK'],
      });
      await alert.present();
      // Login berhasil, alihkan ke halaman yang sesuai
      // Misalnya, dengan menggunakan router
    } else {
      // Menampilkan peringatan jika login gagal
      const alert2 = await this.alertController.create({
        header: 'Sign In',
        message: 'Failed ! Username or Password is incorrect',
        buttons: ['OK'],
      });
      await alert2.present();
      
    }
  }
}
