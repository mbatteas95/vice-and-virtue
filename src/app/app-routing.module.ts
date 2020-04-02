import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoryComponent} from './story/story.component';
import {CharactersComponent} from './characters/characters.component';
import {HaruhiComponent} from './characters/haruhi/haruhi.component';
import {AikaComponent} from './characters/aika/aika.component';
import {HaruComponent} from './characters/haru/haru.component';
import {ArchiveComponent} from './archive/archive.component';
import {AkioComponent} from './characters/akio/akio.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'story', component: StoryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent},
  { path: 'characters/haruhi', component: HaruhiComponent},
  { path: 'characters/akio', component: AkioComponent},
  { path: 'characters/aika', component: AikaComponent},
  { path: 'characters/haru', component: HaruComponent},
  { path: 'archive', component: ArchiveComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
