import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseContextService {
    userData: string;

    constructor() {

    }

    getUserData() : string {
        return this.userData;
    }

    setUserData(userData: string): void {
        this.userData = userData;
    }
}