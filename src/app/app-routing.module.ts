import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { GstGetDetailComponent } from './gst-get-detail/gst-get-detail.component';


const routes: Routes = [
  { path: 'gst-add', component: GstAddComponent },
  { path: 'gst-get', component: GstGetComponent },
  { path: 'gst-get-detail/:id', component: GstGetDetailComponent },
  {
    path: 'gsts',
    component: GstAddComponent,
    data: { title: 'Gst List' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
