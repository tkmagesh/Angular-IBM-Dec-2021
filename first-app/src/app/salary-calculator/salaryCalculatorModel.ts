import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class SalaryCalculatorModel{
    basic = 0;
    hra = 0;
    da = 0;
    tax = 0;
    salary = 0;

    calculate(){
        const gross = this.basic + this.hra + this.da;
        this.salary = gross * ((100-this.tax)/100);
    }
}