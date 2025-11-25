import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achivments',
  templateUrl: './achivments.html',
  styleUrl: './achivments.scss',
  standalone: true,
  imports: [CommonModule],
})
export class Achivments implements AfterViewInit, OnDestroy {
  @ViewChildren('animatedNumber') animatedNumbers!: QueryList<ElementRef<HTMLParagraphElement>>;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateNumbers();
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private animateNumbers() {
    this.animatedNumbers.forEach((elementRef) => {
      const element = elementRef.nativeElement;
      const target = parseInt(element.getAttribute('data-target') || '0', 10);
      const suffix = element.getAttribute('data-suffix') || '';
      this.animateValue(element, 0, target, 2000, suffix);
    });
  }

  private animateValue(element: HTMLElement, start: number, end: number, duration: number, suffix = '') {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easedProgress * (end - start) + start);

      element.innerText = currentValue.toString() + suffix;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}
