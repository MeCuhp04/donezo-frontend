import {Component} from '@angular/core';
import {ListTasksComponent} from "./components/list-tasks/list-tasks.component";
import {KanbanNavbarComponent} from './components/kanban-navbar/kanban-navbar.component';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [ListTasksComponent, KanbanNavbarComponent],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss'
})
export class KanbanComponent {

  protected readonly open = open;
}
