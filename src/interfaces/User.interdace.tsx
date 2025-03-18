
//created user interface to define the structure of the user object
// Used readonly to prevent the user from changing the value of the properties
export default interface User {
    readonly login: string | null;
}