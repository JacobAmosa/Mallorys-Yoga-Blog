//angular modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// user modules
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LessonsComponent } from './lessons/lessons.component';
import { HealthComponent } from './health/health.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'lessons',
  component: LessonsComponent
},
{
  path: 'health',
  component: HealthComponent
},
{
  path: 'thoughts',
  component: ThoughtsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
