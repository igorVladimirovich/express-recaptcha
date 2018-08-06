declare global {
    namespace Express {
        export interface Request {
            recaptcha?: any;
        }
        export interface Response {
            recaptcha?: string;
        }
    }
}
