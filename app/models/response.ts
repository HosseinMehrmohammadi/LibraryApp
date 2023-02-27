export type ResponseStatus = 'success' | 'failure'

export type NetworkResponse<T> = {
    type: ResponseStatus;
    body?: T;
}