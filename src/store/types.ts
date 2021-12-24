import { SettingInterFace } from './modules/app'

export interface IStoreState {
	app: SettingInterFace
}
export interface IAction<T> {
	type: string
	payload: T
}
