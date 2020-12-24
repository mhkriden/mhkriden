import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to-el';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { LeadComponent } from './lead/lead.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { SlideComponent } from './project-components/slide/slide.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CombiningMusicComponent } from './project-components/combining-music/combining-music.component';
import { FullScaleMusicComponent } from './project-components/full-scale-music/full-scale-music.component';
import { AchillesComponent } from './project-components/achilles/achilles.component';

const appRoutes: Routes = [
  { path: 'projects/slide', component: SlideComponent },
  { path: 'projects/combining-music', component: CombiningMusicComponent },
  { path: 'projects/full-scale-music', component: FullScaleMusicComponent },
  { path: 'projects/achilles', component: AchillesComponent },
  { path: '', component: HomepageComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ExperienceComponent,
    HeaderComponent,
    AboutComponent,
    LeadComponent,
    CurrentProjectsComponent,
    SlideComponent,
    HomepageComponent,
    CombiningMusicComponent,
    FullScaleMusicComponent,
    AchillesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


