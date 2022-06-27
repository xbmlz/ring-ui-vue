export type ButtonType = 'primary' | 'danger'
export type ButtonSize = 'large' | 'default' | 'small'

export const ButtonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
