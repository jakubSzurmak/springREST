import { Component} from '@angular/core';
import { RunnerService } from '../../service/runner.service';
import { Router } from '@angular/router';
import { RunnerForm } from '../../model/runner-form';
import { generateUUID } from "../../../function/genUUID";

@Component({
  selector: 'app-runner-add',
  templateUrl: './runner-add.component.html',
  styleUrls: ['./runner-add.component.css']
})
export class RunnerAddComponent{

  /**
   * Single form runner.
   */
  runner: RunnerForm;

  /**
   * @param runnerService runner service
   * @param router router
   */
  constructor(
    private runnerService: RunnerService,
    private router: Router,
  ) {
    this.runner={
      name: '',
      surname: '',
      birthDate: ''
    }
  }

  /**
   * Creates runner.
   */
  onSubmit(): void {
    this.runnerService.putRunner(generateUUID(), this.runner!)
      .subscribe(() => this.router.navigate(['/runners']));
  }
}
