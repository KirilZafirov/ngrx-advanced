export const enum SortOrderType {
    Ascending = 'Ascending',
    Descending = 'Descending',
}

export const enum OrderColumnNameType {
    Name = 'Name',
    CreatedAt = 'CreatedAt',
}

export interface SearchParams {
    isActive?: boolean;
    all?: boolean;
    currentPage?: number;
    pageSize?: number;
    keyword?: string;
    sortOrder?: SortOrderType;
    orderColumnName?: OrderColumnNameType;
}