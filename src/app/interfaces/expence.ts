export interface Expence {
    id: number,
    name: string,
    price: number,
    categoryId?: number,
    date: Date,
    isChecked: boolean
}