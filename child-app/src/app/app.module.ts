import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { filter } from 'rxjs/operators';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  ngOnInit(): void {
    singleSpaPropsSubject.pipe(filter((v) => !!v)).subscribe((value) => {
      console.log('props: ' + value); // this never happens
    });
  }
}
