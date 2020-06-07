export interface Meta {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    uniqueTotal: number;
}

export interface BaseResponse<T> {
    messsageSummary: string;
    messages: string[];
    meta: Meta;
    notOk: boolean;
    payload: T;
    status: number | string;
}

export interface BasePagedResponse<T> {
    messsageSummary?: string;
    messages?: string[];
    meta: Meta;
    notOk: boolean;
    payload: T[];
    status: number | string;
}

