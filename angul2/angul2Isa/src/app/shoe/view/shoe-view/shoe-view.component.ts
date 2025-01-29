import { Component, OnInit } from '@angular/core';
import { RunnerService } from "../../../runner/service/runner.service";
import { ShoeService} from "../../service/shoe.service";
import { ActivatedRoute } from "@angular/router";
import { RunnerDetails } from "../../../runner/model/runner-details";
import { ShoeDetails } from "../../model/shoe-details";
import {Observable} from "rxjs";


/**
 * Preview of single runner.
 */
@Component({
  selector: 'app-shoe-view',
  templateUrl: './shoe-view.component.html',
  styleUrls: ['./shoe-view.component.css']
})
export class ShoeViewComponent implements OnInit {

  /**
   * Single shoe.
   */
  shoe: ShoeDetails | undefined;

  /**
   * Shoe's owner
   */
  runner: RunnerDetails | undefined;

  /**
   *
   * @param service runner service
   * @param route activated route
   * @param runnerService shoe service
   */
  constructor(private service: ShoeService, private route: ActivatedRoute,
              private runnerService: RunnerService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getShoe(params['id'])
        .subscribe(shoe => {
          this.shoe = shoe
          this.runnerService.getRunner(this.shoe.ownerId)
            .subscribe(runner => this.runner = runner);
        })
    });
  }
}
