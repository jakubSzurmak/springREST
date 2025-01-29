import { Component, OnInit } from '@angular/core';
import { RunnerService } from "../../service/runner.service";
import { ShoeService} from "../../../shoe/service/shoe.service";
import { ActivatedRoute, Router } from "@angular/router";
import { RunnerDetails } from "../../model/runner-details";
import {Shoes} from "../../../shoe/model/shoes";

/**
 * Preview of single runner.
 */
@Component({
  selector: 'app-runner-view',
  templateUrl: './runner-view.component.html',
  styleUrls: ['./runner-view.component.css']
})
export class RunnerViewComponent implements OnInit {

  /**
   * Single runner.
   */
  runner: RunnerDetails | undefined;

  /**
   * Runner's shoes.
   */
  shoes: Shoes | undefined;

  /**
   *
   * @param service runner service
   * @param route activated route
   * @param shoeService shoe service
   */
  constructor(private service: RunnerService, private route: ActivatedRoute,
              private shoeService: ShoeService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getRunner(params['id'])
        .subscribe(runner => this.runner = runner)
      this.shoeService.getRunnerShoes(params['id'])
        .subscribe(shoes => this.shoes = shoes);
    });
  }

  deleteElement(uuid: string): void {
    this.shoeService.deleteShoe(uuid)
      .subscribe(() => window.location.reload());
  }

}
