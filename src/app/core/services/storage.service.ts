import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export abstract class StorageService {
  abstract getItem<T>(key: string): Promise<T>;
  abstract setItem<T>(key: string, value: any): Promise<void>;
  abstract removeItem(key: string): Promise<void>;
}

@Injectable({providedIn: 'root'})
export class SessionStorageService implements StorageService {

    getItem<T>(key: string): Promise<T> {
        const value = JSON.parse(sessionStorage.getItem(key));
        return Promise.resolve(value);
    }

    setItem<T>(key: string, value: any): Promise<void> {
        const result = sessionStorage.setItem(key , JSON.stringify(value));
        return Promise.resolve(result);
    }

    removeItem(key: string): Promise<void> { 
        return Promise.resolve(sessionStorage.removeItem(key));
    }
}