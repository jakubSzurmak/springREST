import { Component, OnInit } from '@angular/core';
import { Shoes } from "../../model/shoes";
import { Shoe } from "../../model/shoe";
import { ShoeService } from "../../service/shoe.service";

/**
 * Navigable view with list of all shoes.
 */
@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {

  /**
   * @param service users service
   */
  constructor(private service: ShoeService) {
  }

  /**
   * Available shoes.
   */
  shoes: Shoes | undefined;

  ngOnInit(): void {
    this.service.getShoes().subscribe(shoes => this.shoes = shoes);
  }

  /**
   * Deletes selected shoe.
   *
   * @param shoe shoe to be removed
   */
  onDelete(shoe: Shoe): void {
    this.service.deleteShoe(shoe.id).subscribe(() => this.ngOnInit());
  }

}

