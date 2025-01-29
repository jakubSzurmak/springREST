import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../../service/shoe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoeForm } from '../../model/shoe-form';


@Component({
  selector: 'app-shoe-edit',
  templateUrl: './shoe-edit.component.html',
  styleUrls: ['./shoe-edit.component.css']
})
export class ShoeEditComponent implements OnInit {

  /**
   * Shoe's id.
   */
  id: string | undefined;

  /**
   * Single shoe.
   */
  shoe: ShoeForm | undefined;

  /**
   * Single shoe.
   */
  original: ShoeForm | undefined;

  /**
   * @param shoeService shoe service
   * @param route activated route
   * @param router router
   */
  constructor(
    private shoeService: ShoeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params)
      this.shoeService.getShoe(params['shoe_id'])
        .subscribe(shoe => {
          this.id = params['shoe_id'];
          this.shoe = {
            brandName: shoe.brandName,
            model: shoe.model,
            size: shoe.size,
            color: shoe.color,
          };
          this.original = {...this.shoe};
        })
    });
  }

  /**
   * Updates shoe.
   */
  onSubmit(): void {
    this.shoeService.patchShoe(this.id!, this.shoe!)
      .subscribe(() => this.router.navigate(['/runners']));
  }
}
