import { inject, Injectable, SecurityContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IconRegistryService {
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
  private cache = new Map<string, SafeHtml>();

  loadIcon(name: string): Observable<SafeHtml> {
    if (this.cache.has(name)) {
      return of(this.cache.get(name)!);
    }

    return this.http
      .get(`icons/${name}.svg`, { responseType: 'text' })
      .pipe(
        map(svg => {
          const safeSvg = this.sanitizer.bypassSecurityTrustHtml(svg);
          this.cache.set(name, safeSvg);
          return safeSvg;
        }),
        shareReplay(1)
      );
  }
}
