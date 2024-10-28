import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit {
  isScrolled = false;
  @ViewChild('about', { static: false }) aboutSection!: ElementRef;
  @ViewChild('project', { static: false }) projectSection!: ElementRef;
  @ViewChild('contact', { static: false }) contactSection!: ElementRef;
  @ViewChild('offcanvas', { static: false }) offcanvas!: ElementRef;
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  ngAfterViewInit() {
    const options = {
      strings: ['MEAN Stack','Full-Stack Java'],
      typeSpeed: 300,
      backSpeed: 50,
      backDelay: 300,
      startDelay: 500,
      loop: true
    };

    new Typed(this.typedElement.nativeElement, options);
  }


  scrollToSection(section: string) {
    let target: ElementRef | undefined;

    switch (section) {
      case 'about':
        target = this.aboutSection;
        break;
      case 'project':
        target = this.projectSection;
        break;
      case 'contact':
        target = this.contactSection;
        break;
    }

    target?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    // Scroll to the target section
    target?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 50; // Apply class if scrolled 50px down
  }

}
