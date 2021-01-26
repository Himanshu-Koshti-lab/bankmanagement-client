import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { UpdateUser } from 'src/app/classes/update-user';

@Component({
  selector: 'app-customer-update',
  templateUrl: './cupdate-details.component.html',
  styleUrls: ['./cupdate-details.component.css'],
})
export class CupdateDetailsComponent implements OnInit {
  Submit: FormGroup;
  updateuser = new UpdateUser();
  msg: any;
  Customer: any;

  UpdateForm: FormGroup;

  constructor(private service: MainService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.UpdateForm = this.formBuilder.group({
      AccountStatus: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
      ]),
    });
    this.service.getCustomer().subscribe((data) => (this.Customer = data));
  }
  updateUser(updateuser: UpdateUser) {
    updateuser.emailID = this.Customer.emailID;
    this.service.doUpdate(this.updateuser).subscribe(
      (data) => {
        console.log('response received');
        alert('Send request successfully');
      },
      (error) => {
        console.log('exception occured');
        this.msg = error.error;
      }
    );
  }
}
