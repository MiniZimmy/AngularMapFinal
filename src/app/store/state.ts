import { Marker } from './../models';

export interface IState {
  markers: Marker[];
}

export const intitialState: IState = {
  markers: []
};

export class State implements IState {
  constructor(public markers: Marker[] = []) {}
}
