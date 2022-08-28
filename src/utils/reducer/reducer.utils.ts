import { AnyAction } from "redux";
export interface IAction<T> {
    type: T
}

export interface IActionWithPayload <T,P>{
    type: T;
    payload: P;
}


export function createAction<T extends string>(type: T, payload: void): IAction<T>;
export function createAction<T extends string, P>(type: T, payload: P): IActionWithPayload<T,P>;
export function createAction<T extends string, P>(type: T, payload:P) {
    return { type, payload}
}


export type withMatch<AC extends ()=> AnyAction> = AC & {
    type: ReturnType<AC>['type'],
    match: (action: AnyAction) => action is ReturnType<AC>
}

export function matchCreateActions<AC extends ()=> AnyAction & { type: string}> (actionCreator: AC) :withMatch<AC>;
export function matchCreateActions<AC extends (...argu: any[])=> AnyAction & { type: string}> (actionCreator: AC) :withMatch<AC>;
export function matchCreateActions(actionCreator: Function) {
    const { type } = actionCreator();
    return Object.assign(actionCreator, {
        type,
        match(action: AnyAction){
            return action.type === type;
        }
    })

}







// export interface IAction<T> {
//     type: T
// }
// export interface IActionWithPayload<T, U> {
//     type: T,
//     payload: U
// }


// export function createAction<T extends string, U>(type: T, payload: U): IActionWithPayload<T, U>;
// export function createAction<T extends string, U>(type: T, payload: void): IAction<T>;


// export function createAction<T extends string, U>(type: T, payload: U) {
//     if(payload) {
//         return {
//             type,
//             payload
//         }
//     } else {
//         return {
//             type
//         }
//     }
// }











// export const creatAction = (type, payload) => {
//     return {
//         type,
//         payload
//     }
// }