import { FormControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(passwordControl: FormControl): ValidationErrors{
        const isPasswordValid = /(?=.*[0-9])(?=.*[A-Z])/g.test(passwordControl.value);
        if (!isPasswordValid){
        return {message: 'Вы некорректно ввели пароль'};
        }
        return null;
    }



