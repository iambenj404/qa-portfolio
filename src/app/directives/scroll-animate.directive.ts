import { Directive, ElementRef, OnInit, OnDestroy, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  @Input() animationClass: string = 'animate-fadeInUp';
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Hide initially
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
  }

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class when element comes into view
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
          // Stop observing once animated to prevent repeating on scroll up/down
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before it comes fully into view
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
