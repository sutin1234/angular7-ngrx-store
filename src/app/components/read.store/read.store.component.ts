import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TutorialModel } from '../../models/tutorial.model';
import { AppState } from '../../app.state';
import * as TutorialActions from '../../actions/tutorial.action';
import { RemoveTutorial } from '../../actions/tutorial.action';

@Component({
  selector: 'app-read-store',
  templateUrl: './read.store.component.html',
  styleUrls: ['./read.store.component.scss']
})
export class ReadStoreComponent implements OnInit {

  tutorial: Observable<TutorialModel[]>;

  constructor(private store: Store<AppState>) {
    this.tutorial =  store.select('tutorial');
  }

  ngOnInit() {
  }

  removeTutorial($index) {
    console.log($index);
    this.store.dispatch(new TutorialActions.RemoveTutorial($index));
  }

}
