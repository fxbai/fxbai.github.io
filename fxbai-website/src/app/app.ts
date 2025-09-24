import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shell/header/header';
import { Footer} from './shell/footer/footer';
import { Layout } from './shell/layout/layout';
import  {Home}  from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Layout, Home, About, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fxbai-website');
}
