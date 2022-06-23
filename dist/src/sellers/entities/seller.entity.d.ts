import { Apply } from './../../applys/entities/apply.entity';
export declare class Seller {
    id: number;
    userType: string;
    email: string;
    password: string;
    username: string;
    phone: string;
    nickname: string;
    region: string;
    agency_name: string;
    rank: number;
    fcm_token: string;
    latest_active: Date;
    notification_agree: boolean;
    createdAt: Date;
    updatedAt: Date;
    applys: Apply[];
}
