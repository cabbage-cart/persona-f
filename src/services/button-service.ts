import { BehaviorSubject, Observable } from 'rxjs';

const stagger = new BehaviorSubject<boolean>(false);
const slide = new BehaviorSubject<boolean>(false);

export const ButtonService = {
  setSlideOut: (state: boolean): void => slide.next(state),
  setStaggerOut: (state: boolean): void => stagger.next(state),
  getStagger: (): Observable<boolean> => stagger.asObservable(),
  getSlide: (): Observable<boolean> => slide.asObservable(),
};
