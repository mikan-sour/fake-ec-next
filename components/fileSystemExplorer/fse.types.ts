export default interface IFileSystem {
    name:string,
    isDirectory:boolean,
    childrenFiles?:IFileSystem[],
}

export interface IFileHeader { files:number, dirs:number }

