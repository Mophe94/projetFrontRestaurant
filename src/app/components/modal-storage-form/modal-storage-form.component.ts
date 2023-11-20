import {Component, inject, Input, TemplateRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalDismissReasons, NgbInputDatepicker, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Storage} from "../../shared/models/storage";

@Component({
  selector: 'app-modal-storage-form',
  standalone: true,
  imports: [CommonModule, NgbInputDatepicker],
  templateUrl: './modal-storage-form.component.html',
  styleUrl: './modal-storage-form.component.css'
})
export class ModalStorageFormComponent {

  @Input()
  btnClass: string = 'btn-primary'

  @Input()
  toUpdate?: Storage;

  private modalService = inject(NgbModal);
  closeResult = '';
  modal: any;
  content: TemplateRef<any> | undefined;

  open(content: TemplateRef<any>) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
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
