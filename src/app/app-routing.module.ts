import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { HeroComponent } from './hero/hero.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hero' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
