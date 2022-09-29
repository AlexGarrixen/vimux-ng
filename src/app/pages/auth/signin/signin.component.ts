import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { generateControlErrors } from '@app/utils/generateControlErrors';
import { authApi } from '@app/store/services/auth';
import { SessionService } from '@app/services/session.service';

const { useLoginMutation } = authApi;

interface Form {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private session: SessionService,
    private router: Router
  ) {}

  form = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });
  errors: Record<string, string[]> = {};
  query = useLoginMutation();
  isLoading: boolean = false;
  isError: boolean = false;

  extractErrors() {
    return generateControlErrors(this.form.controls, {
      email: {
        required: 'Email requerido',
        pattern: 'Correo invalido',
      },
      password: {
        required: 'Contraseña requerida',
        minlength: 'Minimo 3 caracteres',
      },
    });
  }

  getControlError(name: string) {
    return this.errors[name]?.[0];
  }

  onSubmit(ev: Event) {
    const errors = this.extractErrors();
    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      this.errors = errors;
      return;
    }

    this.query.dispatch(this.form.value as Form);
  }

  ngOnInit(): void {
    this.query.state$.subscribe(({ isError, isLoading, isSuccess, data }) => {
      this.errors = {};
      this.isLoading = isLoading;
      this.isError = isError;

      if (isSuccess && data) {
        this.session.save(data);
      }
    });

    this.session.session$.subscribe((data) => {
      if (data) this.router.navigate(['/user/queued'], { replaceUrl: true });
    });
  }
}
