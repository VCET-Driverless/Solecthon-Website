import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Ap } from './home/home.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '/', component: AppComponent },
  { path: '/about', component: AboutComponent },
  {path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
