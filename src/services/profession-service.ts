import { BehaviorSubject, Observable } from 'rxjs';
import { Professions } from '../shared';

const subject = new BehaviorSubject<Professions>('');

export const ProfessionService = {
  setState: (state: Professions): void => subject.next(state),
  getState: (): Observable<Professions> => subject.asObservable(),
};
