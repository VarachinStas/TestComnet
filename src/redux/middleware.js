import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const spam = ['fuck', 'ololo', 'blm']

export function spamWords({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = spam.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(showAlert('go home, bitch!'))
                }
            }
            return next(action)
        }
    }
}