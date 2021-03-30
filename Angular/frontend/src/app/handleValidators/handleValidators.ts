import { FormControl } from '@angular/forms';
export class HandleValidators {
    passwordValidator(passwordControl: FormControl): any{
        const isPasswordValid = /\d/.test(passwordControl.value) || /[A-Z]/.test(passwordControl.value);
        if (!isPasswordValid){
        return {message: 'Вы некорректно ввели пароль'};
        }
        return null;
    }
}


