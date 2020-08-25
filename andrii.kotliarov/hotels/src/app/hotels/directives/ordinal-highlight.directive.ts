import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appOrdinalHighlight]'
})
export class OrdinalHighlightDirective implements OnInit {
  @Input()
  public isOdd: boolean;

  @Input()
  public defaultColor: string;

  public constructor(private element: ElementRef) {
  }

  public ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.isOdd ? this.defaultColor || 'pink' : '';
  }
}
