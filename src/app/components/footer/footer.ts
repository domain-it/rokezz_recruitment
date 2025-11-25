import {Component, inject} from '@angular/core';
import {Logo} from '../../shared/components/elements/logo/logo';
import {SharedModule} from '../../shared/shared.module';
import {IconComponent} from '../../shared/components/elements/icon/icon.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    Logo,
    SharedModule,
    IconComponent
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private router = inject(Router);

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
