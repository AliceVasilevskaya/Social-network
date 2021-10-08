export type FieldValidadorType = (value: string) => string | undefined

export const required: FieldValidadorType = (value) => {
    if(value) return undefined
    return 'Field is required'
}
export const maxLengthCreator = (maxLength: number): FieldValidadorType => (value) => {
    if (value.length > maxLength) return `The limit is ${maxLength} symbols`
    return undefined
}