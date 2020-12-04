import { Component, OnInit } from '@angular/core';
import { singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'child-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'child-app';
  props: {};

  ngOnInit(): void {
    singleSpaPropsSubject.pipe(filter((v) => !!v)).subscribe((value) => {
      this.props = value.props;
      console.log('props: ' + value.props); // this never happens
    });
  }
}
