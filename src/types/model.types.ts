export interface IParameter {
    id: number,
    name: string;
    title: string;
    type: string;
}

export interface IModel {
    id: number,
    name: string,
    equation: string,
    paramList: Array<IParameter>

}