import { Component, signal } from '@angular/core';
import { ILink } from '../../interfaces/link.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [RouterModule],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  public linkstyle = signal('p-2 flex rounded-md items-center gap-2 hover:bg-white/10 duration-200 w-full')

  public linkList : ILink[] =  [
    {
      name: 'Home',
      linkroute: 'parahome'
    },
    {
      name: 'System',
      linkroute: 'parasystem'
    },
    {
      name: 'Bluetooth & devices',
      linkroute: 'home'
    },
    {
      name: 'Network',
      linkroute: 'home'
    },
    {
      name: 'Apps',
      linkroute: 'home'
    },
    {
      name: 'Accounts',
      linkroute: 'home'
    },
    {
      name: 'Time & language',
      linkroute: 'home'
    },
    {
      name: 'Gaming',
      linkroute: 'home'
    },
    {
      name: 'Accessibility',
      linkroute: 'home'
    },
    {
      name: 'Privacy & security',
      linkroute: 'home'
    },
    {
      name: 'Windows Update',
      linkroute: 'home'
    },
  ]
}
