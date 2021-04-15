import { BehaviorSubject, Observable } from 'rxjs';
import { States } from '../shared';

const subject = new BehaviorSubject<States>('');

export const StateService = {
  setState: (state: States): void => subject.next(state),
  getState: (): Observable<States> => subject.asObservable(),
};
