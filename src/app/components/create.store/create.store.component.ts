import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { TutorialModel } from '../../models/tutorial.model';
import * as TutorialActions from '../../actions/tutorial.action';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create-store',
  templateUrl: './create.store.component.html',
  styleUrls: ['./create.store.component.scss']
})
export class CreateStoreComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addTutorial($name, $url) {
    this.store.dispatch(new TutorialActions.AddTutorial({ name: $name, url: $url}));
  }

}
