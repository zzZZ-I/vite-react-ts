import { Reducer } from 'redux'
import { IAction } from '../types'

export interface SettingInterFace {
	them: 'dark' | 'light'
}

const defaultApp: SettingInterFace = {
	them: 'dark',
}

const updateSetting = 'UPDATE_SETTING'

export const updateThemAction: (setting: SettingInterFace) => IAction<SettingInterFace> = (setting: SettingInterFace) => ({
	type: updateSetting,
	payload: setting,
})

const appReducer: Reducer<SettingInterFace, IAction<any>> = (state = defaultApp, action: IAction<any>) => {
	const { type, payload } = action
	switch (type) {
		case updateSetting:
			return {
				...payload,
			}
		default:
			return {
				...state,
			}
	}
}

export default appReducer
