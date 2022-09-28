import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myForm: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string | null>;
    age: FormControl<number>;
    optional?: FormControl<number>;
  }>;

  constructor(private formBuilder: FormBuilder) {
    // Alternative npm package https://github.com/ngneat/reactive-forms

    this.myForm = this.formBuilder.nonNullable.group({
      firstName: new FormControl('', { nonNullable: true }),
      lastName: new FormControl(),
      age: new FormControl(0, { nonNullable: true })
    });

  }

  ngOnInit(): void {
    this.myForm.patchValue({
      // nonExistant: 10 // This would error
      age: 10 
    });
    // const c = this.myForm.value.abc; // This would error
    this.myForm.valueChanges.subscribe((myForm) => {
      console.log(myForm);
    });

    const rawValue = this.myForm.getRawValue();
    // or
    const value = this.myForm.value;

    const notExisting = value.age;
    // const notExisting = value.notOnMyForm  // This would error
  }
}
