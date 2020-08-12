import { BaseApiService } from './base-api.service';


import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export const enum CarSearchEnum {
    YEAR = 'year',
    MAKE = 'make',
    MODEL = 'model', 
    MILEAGE = 'mileage', 
    TRANSMISSION = 'transmission', 
    NumberOfDoors = 'doorsNumber'
}

export interface AutoCompleteSearch {
    key: CarSearchEnum;
    label: string;
    placeholder: string;
    allOptions: any[]
}
@Injectable()
export class CarAutoCompleteService {


    constructor(protected baseApi: BaseApiService<any>) {
    } 

    updateAutoComplete(key , value) {
         const index = this.carAutoCompleteSearch.findIndex(i => i.key === key);
         if(index > -1 ) {
            this.carAutoCompleteSearch[index].allOptions = this.filteredItems(key , value)
         }
    }
 
    filteredItems(key : CarSearchEnum, value): (string)[] {
        switch (key){ 
            case CarSearchEnum.YEAR:
                return this.filteredResults(value , this.selectYears);
            case CarSearchEnum.MAKE:
                return this.filteredResults(value , this.selectMake);
            case CarSearchEnum.MODEL:
                return this.filteredResults(value , this.selectModel);
            case CarSearchEnum.MILEAGE:
                return this.filteredResults(value , this.selectMileage);
            case CarSearchEnum.TRANSMISSION:
                return this.filteredResults(value , this.selectTransmission);
            case CarSearchEnum.NumberOfDoors:
                return this.filteredResults(value , this.selectNumberOfDoors);
            default:
                return [];
        }
    }

    filteredResults(value: string , list: any[]): string[] {
        return value ? list.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) === 0) : list; 
    }

    // filteredYears(year: string): string[] {
    //     return year ? this.selectYears.filter(option => option.toLowerCase().indexOf(year.toLowerCase()) === 0) : this.selectYears; 
    // }

    // filteredMake(make: string): string[] {
    //     return year ? this.selectMake.filter(option => option.toLowerCase().indexOf(year.toLowerCase()) === 0) : this.selectMake; 
    // }

    // filteredModel(model: string): string[] {
    //     return year ? this.selectModel.filter(option => option.toLowerCase().indexOf(year.toLowerCase()) === 0) : this.selectModel; 
    // }

    // filteredMileage(mileage: string): string[] {
    //     return year ? this.selectMileage.filter(option => option.toLowerCase().indexOf(year.toLowerCase()) === 0) : this.selectMileage; 
    // }

    // filteredTransmission(transmission: string): string[] {
    //     return year ? this.selectTransmission.filter(option => option.toLowerCase().indexOf(year.toLowerCase()) === 0) : this.selectTransmission; 
    // }

    // filteredNumberOfDoors(numDoors: string): string[] {
    //     return numDoors ? this.selectNumberOfDoors.filter(option => option.toLowerCase().indexOf(numDoors.toLowerCase()) === 0) : this.selectNumberOfDoors; 
    // }

    selectYears: string[] = [...Year];
    selectMake: string[] = [...selectMake];
    selectModel: string[] = [...selectModel];
    selectMileage: string[] = [...selectMileage];
    selectTransmission: string[] = [...selectTransmission];
    selectNumberOfDoors: string[] = [...selectNumberOfDoors];

    carAutoCompleteSearch: AutoCompleteSearch[] = [
        {
            key: CarSearchEnum.YEAR,
            label: 'Select Year',
            placeholder: 'Year of manufacture',
            allOptions: Year
        },
        {
            key: CarSearchEnum.MAKE,
            label: 'Select Make',
            placeholder: 'Automobile Made by',
            allOptions: this.selectModel
        },
        {
            key: CarSearchEnum.MODEL,
            label: 'Select Model',
            placeholder: 'Automobile Model',
            allOptions: selectMake
        }, 
        {
            key: CarSearchEnum.MILEAGE,
            label: 'Select Mileage',
            placeholder: 'Automobile Mileage',
            allOptions: this.selectMileage
        },
        {
            key: CarSearchEnum.TRANSMISSION,
            label: 'Select Transmission',
            placeholder: 'Transmission',
            allOptions: this.selectTransmission
        },
        {
            key: CarSearchEnum.NumberOfDoors,
            label: 'Number of doors',
            placeholder: 'Doors',
            allOptions: this.selectNumberOfDoors
        }
    ];
}
 

const ITEMS = ['One', 'Two', 'Three', 'One', 'Two', 'Three', 'One', 'Two', 'Three', 'One', 'Two', 'Three'];

const Year = new Array(50).fill(1975).map((v, i) => (v + i).toString());
const selectMake = ['All Makes',
    'Acura',
    'Alfa Romeo',
    'Am General',
    'Aston Martin',
    'Audi',
    'Avanti Motors',
    'Bentley',
    'BMW',
    'Bugatti',
    'Buick',
    'Cadillac',
    'Chevrolet',
    'Chrysler',
    'Daewoo',
    'Daihatsu',
    'Dodg',
    'Eagle',
    'Ferrari',
    'FIAT',
    'Fisker',
    'Ford',
    'Genesis',
    'Geo',
    'GMC',
    'Honda',
    'Hummer',
    'Hyundai',
    'INFINITI',
    'International',
    'Isuzu',
    'Jaguar',
    'Jeep',
    'Kia',
    'Koenigsegg',
    'Lamborghini',
    'Land Rover',
    'Lexus',
    'Lincoln',
    'Lotus',
    'Maserati',
    'Maybach',
    'Mazda',
    'McLaren',
    'Mercedes - Benz',
    'Mercury',
    'MINI',
    'Mitsubishi',
    'Morgan',
    'Nissan',
    'Oldsmobile',
    'Panoz',
    'Plymouth',
    'Pontiac',
    'Porsche',
    'RAM',
    'Rolls - Royce',
    'Saab',
    'Saleen',
    'Saturn',
    'Scion',
    'smart',
    'Subaru',
    'Suzuki',
    'Tesla',
    'Toyota',
    'Volkswagen',
    'Volvo']

const selectModel = [];

const selectMileage = new Array(50).fill(0).map((v, i) => (v + i * 5000).toString());

const selectTransmission = ['All', 'Manual', 'Automatic'];

const selectNumberOfDoors = ['2', '3', '4', '5', '6+']; 