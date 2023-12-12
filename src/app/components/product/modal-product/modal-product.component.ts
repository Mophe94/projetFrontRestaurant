import {Component, inject, Input, TemplateRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {ProductApiService} from "../../../service/product-api.service";
import {PRODUCT_FORM} from "./PRODUCT_FORM";
import {ProductItem} from "../../../shared/models/productItem";

@Component({
  selector: 'app-modal-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-product.component.html',
  styleUrl: './modal-product.component.css'
})
export class ModalProductComponent {

  form! :FormGroup

//ng Modal from ng bootstrap
  private modalService = inject(NgbModal);
  closeResult = '';
  modal: any;
  content: TemplateRef<any> | undefined;


  constructor(
    builder: FormBuilder,
    private readonly $producServ: ProductApiService,
    private readonly router :Router
  ) {
    this.form = builder.group(PRODUCT_FORM)
  }

  onSubmit(){
      if (this.form.valid)
      {
        const product : ProductItem = this.form.value
        this.$producServ.create(product).subscribe()
        this.modalService.dismissAll()
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
