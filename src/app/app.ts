import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
