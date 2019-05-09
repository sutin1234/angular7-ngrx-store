import { Action } from '@ngrx/store';
import { TutorialModel } from '../models/tutorial.model';
import * as TutorialAction from '../actions/tutorial.action';

// initState / initPayload
const initialState: TutorialModel = {
    name: 'Angular NgRx',
    url: 'http://angular.io'
};

// create Reducer
export function reducer(state: TutorialModel[] = [initialState], action: TutorialAction.Actions) {
    // check case type
    switch (action.type) {
        case TutorialAction.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialAction.REMOVE_TUTORIAL:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}

