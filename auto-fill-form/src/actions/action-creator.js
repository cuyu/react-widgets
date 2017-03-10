/**
 * Created by cuyu on 3/9/17.
 */

export const cache = (firstname, lastname) => {
    return {
        type: 'CACHE',
        firstname: firstname,
        lastname: lastname,
    }
};