import { Component } from '@angular/core';
import { ShoeService } from '../../service/shoe.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ShoeForm } from '../../model/shoe-form';
import { generateUUID } from "../../../function/genUUID";

@Component({
  selector: 'app-shoe-add',
  templateUrl: './shoe-add.component.html',
  styleUrls: ['./shoe-add.component.css']
})
export class ShoeAddComponent{

  /**
   * Single form runner.
   */
  shoe: ShoeForm;

  /**
   * @param shoeService runner service
   * @param route activated route
   * @param router router
   */
  constructor(
    private shoeService: ShoeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.shoe={
      brandName: '',
      model: '',
      color: '',
      size: 0
    }
  }

  /**
   * Create shoe.
   */
  onSubmit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.shoeService.putShoe(params['id'], this.shoe!)
        .subscribe(() => this.router.navigate(['/runners/', params['id']]));
    })
  }
}
