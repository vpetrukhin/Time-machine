export interface IParametr {
    name: string;
    title: string;
    type: string;
}

export interface IModel {
    name: string,
    equation: string,
    paramList: Array<IParametr>

}