import { Directive, ElementRef, Input, Inject, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';

import * as Feather from 'feather-icons';

@Directive({
  selector: '[data-feather]'
})
export class FeatherIconDirective implements OnChanges {
  private _nativeElement: any;

  @Input('data-feather') name!: string;
  @Input() class: string = '';
  @Input() size: string = '24';
  @Input() inner: boolean = true;

  constructor(
    private _elementRef: ElementRef,
    private _changeDetector: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this._nativeElement = this._elementRef.nativeElement;

    // Type assertion for Feather.icons
    const icons: { [key: string]: any } = Feather.icons;

    // Check if name is provided and is a valid Feather icon
    if (this.name && icons[this.name]) {
      // Create SVG
      const svg = icons[this.name].toSvg({
        class: this.class,
        width: this.size,
        height: this.size
      });

      // Set SVG
      if (this.inner) {
        this._nativeElement.innerHTML = svg;
      } else {
        this._nativeElement.outerHTML = svg;
      }
      this._changeDetector.markForCheck();
    } else {
      console.error(`Feather icon '${this.name}' is not found or provided.`);
    }
  }
}
