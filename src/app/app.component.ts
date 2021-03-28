import { Component } from '@angular/core';
import { CardSettingsModel, SwimlaneSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-board-demo';
  //https://ej2.syncfusion.com/angular/documentation/kanban/getting-started/

  public data: Object[] = kanbanData;
  public cardSettings: CardSettingsModel = {
    contentField: 'Summary',
    headerField: 'Id'
  };
  public swimlaneSettings: SwimlaneSettingsModel = { keyField: 'Assignee' };
}
