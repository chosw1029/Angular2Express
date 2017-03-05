// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './info.component';

// Route Configuration
const routes: Routes = [
  { path: 'info', component: InfoComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}