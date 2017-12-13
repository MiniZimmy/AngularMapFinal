import { Action, ActionReducer } from '@ngrx/store';
import { IState, intitialState, State } from './../state';
import { Marker } from './../../models';

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const CLEAR = 'CLEAR';

namespace Actions {

  interface IAction<T> extends Action {
    payload: T;
  }

  export class Add implements IAction<Marker> {
    readonly type = ADD;
    constructor(public payload: Marker) {}
  }

  export class Remove implements IAction<Marker> {
    readonly type = REMOVE;
    constructor(public payload: Marker) {}
  }

  export class Clear implements Action {
    readonly type = CLEAR;
    constructor() {}
  }

}

type AvailableActions = Actions.Add | Actions.Remove | Actions.Clear;

export function markerReducer(state = intitialState, action: AvailableActions): State {
  switch (action.type) {
    case ADD:
      return new State([...state.markers, action.payload]);

    case REMOVE:
      return {
        markers: state.markers.filter((marker) => !marker.equals(action.payload))
      };

    case CLEAR:
      return intitialState;

    default:
      return state;
  }
};
