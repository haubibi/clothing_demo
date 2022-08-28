import { InputHTMLAttributes,ChangeEventHandler } from "react";

export interface IInputoptions {
    name:string;
    type:string;
    onChange: ChangeEventHandler<HTMLInputElement>
    value: string;
    required?:boolean;
}
export interface IFormInputPropsInterface extends InputHTMLAttributes<HTMLInputElement>{
    inputoptions: IInputoptions;
    label?: string;
}
