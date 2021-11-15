export interface ServerResponse<T> {
    success: boolean;
    errors?: any;
    data?: T;
}

export default ServerResponse;