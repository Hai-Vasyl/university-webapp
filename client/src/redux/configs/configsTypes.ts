export const CHANGE_LANGUAGE_CONFIG = "CHANGE_LANGUAGE_CONFIG" 

export enum Languages {
  'en', 'uk'
} 

interface ChangeLanguage {
  type: typeof CHANGE_LANGUAGE_CONFIG
  payload: Languages
}

export type ConfigsReducerTypes = ChangeLanguage

