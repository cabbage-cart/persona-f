import { BehaviorSubject, Observable } from 'rxjs';
import { AvatarState } from '../shared';

const avatarState = new BehaviorSubject<AvatarState>({
  online: true,
  verified: false,
});

export const AvatarStateService = {
  setAvatarState: (state: AvatarState): void => avatarState.next(state),
  getAvatarState: (): Observable<AvatarState> => avatarState.asObservable(),
};
