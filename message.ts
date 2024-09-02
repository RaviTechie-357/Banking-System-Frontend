export interface Message {
        id?: number;
        name: string;
        email: string;
        message: string;
        response?: string; // Optional field for admin's response
}
