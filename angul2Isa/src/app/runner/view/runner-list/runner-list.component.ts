import { Component, OnInit } from '@angular/core';
import { RunnerService } from "../../service/runner.service";
import { Runners } from "../../model/runners";
import { Runner } from "../../model/runner";

@Component({
  selector: 'app-runner-list',
  templateUrl: './runner-list.component.html',
  styleUrls: ['./runner-list.component.css']
})
export class RunnerListComponent implements OnInit{

  /**
   * @param service runners service
   */
  constructor(private service: RunnerService) {
  }

  /**
   * Available runners.
   */
  runners: Runners | undefined;

  ngOnInit(): void {
    this.service.getRunners().subscribe(runners => this.runners = runners);
  }

  /**
   * Deletes selected runner.
   *
   * @param runner runner to be removed
   */
  onDelete(runner: Runner): void {
    this.service.deleteRunner(runner.id).subscribe(() => this.ngOnInit());
  }

}

