import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})

export class HandleValidators {
    passwordValidator(passwordControl: FormControl): any{
        const hasNumber = /\d/.test(passwordControl.value);
        const hasUpper = /[A-Z]/.test(passwordControl.value);
        if (!hasNumber || !hasUpper){
        return {message: 'Вы некорректно ввели пароль'};
        }
        return null;
    }
}


