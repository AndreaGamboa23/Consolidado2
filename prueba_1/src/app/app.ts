import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aside } from './components/aside/aside';
import { Footer } from './components/footer/footer';
import { Main } from './components/main/main';
import { Nav } from './components/nav/nav';

@Component({
  imports: [RouterOutlet, Nav, Main, Aside, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('prueba_1');
}