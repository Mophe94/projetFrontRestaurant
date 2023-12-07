import {Component, inject, Input, TemplateRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalDismissReasons, NgbInputDatepicker, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Storage} from "../../shared/models/storage";
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {StorageApiService} from "../../service/storage-api.service";
import {Router} from "@angular/router";
import {STORAGE_UPDATE_FORM} from "./STORAGE_UPDATE_FORM";
import {STORAGE_FORM} from "./STORAGE_FORM";

@Component({
  selector: 'app-modal-storage-form',
  standalone: true,
  imports: [CommonModule, NgbInputDatepicker, ReactiveFormsModule],
  templateUrl: './modal-storage-form.component.html',
  styleUrl: './modal-storage-form.component.css'
})
export class ModalStorageFormComponent {

  @Input()
  toUpdate?: Storage;

  @Input()
  idStorage?: number

  form! :FormGroup

//ng Modal from ng bootstrap
  private modalService = inject(NgbModal);
  closeResult = '';
  modal: any;
  content: TemplateRef<any> | undefined;


  constructor(
    builder: FormBuilder,
    private readonly $storageServ: StorageApiService,
    private readonly router :Router
  ) {
    if (this.idStorage){
      this.form = builder.group(STORAGE_UPDATE_FORM)
    }else {
      this.form = builder.group(STORAGE_FORM)
    }
  }

  onSubmit(){
    console.log(this.idStorage)
    if (this.idStorage && this.form.valid){
      this.$storageServ.update(this.idStorage,this.form.value).subscribe()
      this.modalService.dismissAll()
    }else {
      if (this.form.valid)
      {
        const storage : Storage = this.form.value
        this.$storageServ.create(storage).subscribe()
        this.modalService.dismissAll()
      }
    }
  }





  //Modal from bootstrap
  open(content: TemplateRef<any>) {


    const ref = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
