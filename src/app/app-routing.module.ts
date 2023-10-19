import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'following',
    loadChildren: () => import('./following/following.module').then( m => m.FollowingPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'read/:id',
    loadChildren: () => import('./read/read.module').then( m => m.ReadPageModule)
  },
  {
    path: 'prefs',
    loadChildren: () => import('./prefs/prefs.module').then( m => m.PrefsPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'respond',
    loadChildren: () => import('./respond/respond.module').then( m => m.RespondPageModule)
  },
  {
    path: 'profile-lain',
    loadChildren: () => import('./profile-lain/profile-lain.module').then( m => m.ProfileLainPageModule)
  },
  {
    path: 'create2/:id',
    loadChildren: () => import('./create2/create2.module').then( m => m.Create2PageModule)
  },
  {
    path: 'create3/:id',
    loadChildren: () => import('./create3/create3.module').then( m => m.Create3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
