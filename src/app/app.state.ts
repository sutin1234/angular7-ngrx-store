import { TutorialModel } from './models/tutorial.model';

export interface AppState {
    readonly tutorial: TutorialModel[];
}
