import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoeListComponent } from "./shoe/view/shoe-list/shoe-list.component";
import { RunnerListComponent } from "./runner/view/runner-list/runner-list.component";
import { RunnerViewComponent } from "./runner/view/runner-view/runner-view.component";
import { RunnerEditComponent } from "./runner/view/runner-edit/runner-edit.component";
import { RunnerAddComponent } from "./runner/view/runner-add/runner-add.component";
import { ShoeAddComponent } from "./shoe/view/shoe-add/shoe-add.component";
import { ShoeEditComponent } from "./shoe/view/shoe-edit/shoe-edit.component";
import { ShoeViewComponent } from "./shoe/view/shoe-view/shoe-view.component";

/**
 * All available routes.
 */
const routes: Routes = [
  {
    component: ShoeListComponent,
    path: "shoes"
  },
  {
    component: RunnerListComponent,
    path: "runners"
  },
  {
    component: RunnerViewComponent,
    path: "runners/:id"
  }
  ,
  {
    component: RunnerEditComponent,
    path: "runners/:id/edit"
  }
  ,
  {
    component: RunnerAddComponent,
    path: "newRunner"
  }
  ,
  {
    component: ShoeAddComponent,
    path: "runners/:id/newShoe"
  }
  ,
  {
    component: ShoeEditComponent,
    path: "runners/:runner_id/shoes/:shoe_id/edit"
  }
  ,
  {
    component: ShoeViewComponent,
    path: "shoes/:id"
  }
];

/**
 * Global routing module.
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
