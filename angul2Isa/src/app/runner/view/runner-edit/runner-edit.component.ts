import { Component, OnInit } from '@angular/core';
import { RunnerService } from '../../service/runner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RunnerForm } from '../../model/runner-form';
import { ShoeService } from "../../../shoe/service/shoe.service";
import { Shoes } from "../../../shoe/model/shoes";

@Component({
  selector: 'app-runner-edit',
  templateUrl: './runner-edit.component.html',
  styleUrls: ['./runner-edit.component.css']
})
export class RunnerEditComponent implements OnInit {

  /**
   * Runner's id.
   */
  id: string | undefined;

  /**
   * Single runner.
   */
  runner: RunnerForm | undefined;

  /**
   * Single runner.
   */
  original: RunnerForm | undefined;

  /**
   * Available shoes.
   */
  shoes: Shoes | undefined;

  /**
   * @param runnerService runner service
   * @param shoeService shoe service
   * @param route activated route
   * @param router router
   */
  constructor(
    private runnerService: RunnerService,
    private shoeService: ShoeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.shoeService.getRunnerShoes(params['id'])
        .subscribe(shoes => this.shoes = shoes);

      this.runnerService.getRunner(params['id'])
        .subscribe(runner => {
          this.id = runner.id;
          this.runner = {
            name: runner.name,
            surname: runner.surname,
            birthDate: runner.birthDate,
          };
          this.original = {...this.runner};
        });
    });
  }

  /**
   * Updates runner.
   */
  onSubmit(): void {
    this.runnerService.putRunner(this.id!, this.runner!)
      .subscribe(() => this.router.navigate(['/runners']));
  }
}
