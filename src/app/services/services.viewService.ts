import { Injectable } from '@angular/core';

@Injectable() 
export class ViewService {
    viewModel: number;
    
    constructor() {

    }

    setViewModel(viewModel: number): void {
        this.viewModel = viewModel;
    }

    getViewModel() : number {
        return this.viewModel;
    } 
}