/**
 * Created by cuyu on 3/9/17.
 */

export const cache = (firstname, lastname, disabled) => {
    return {
        type: 'CACHE',
        firstname: firstname,
        lastname: lastname,
        disabled: disabled
    }
};