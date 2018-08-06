import {RecaptchaResponse} from '../src/interfaces';

export interface RecaptchaResponse {
    error?: string,
    data?: any;
}

declare global {
    namespace Express {
        export interface Request {
            recaptcha?: RecaptchaResponse;
        }
        export interface Response {
            recaptcha?: string;
        }
    }
}
