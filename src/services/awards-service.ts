import { BehaviorSubject, Observable } from 'rxjs';
import { AwardsType } from '../shared';

const subject = new BehaviorSubject<AwardsType>('');

export const AwardsService = {
  setAward: (state: AwardsType): void => subject.next(state),
  getAward: (): Observable<AwardsType> => subject.asObservable(),
};
