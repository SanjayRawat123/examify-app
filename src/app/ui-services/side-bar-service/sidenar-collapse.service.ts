import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarCollapseService {
  private sidebar!: HTMLElement;
  private sidebarOpenBtn!: HTMLElement;
  private sidebarCloseBtn!: HTMLElement;
  private sidebarLockBtn!: HTMLElement;
  private isExpandedSubject = new BehaviorSubject<boolean>(true);
  isExpanded$ = this.isExpandedSubject.asObservable();

  init(
    sidebar: HTMLElement,
    sidebarOpenBtn: HTMLElement,
    sidebarCloseBtn: HTMLElement,
    sidebarLockBtn: HTMLElement
  ) {
    this.sidebar = sidebar;
    this.sidebarOpenBtn = sidebarOpenBtn;
    this.sidebarCloseBtn = sidebarCloseBtn;
    this.sidebarLockBtn = sidebarLockBtn;

    this.addEventListeners();
    this.updateSidebarState();
  }

  private addEventListeners() {
    this.sidebarLockBtn.addEventListener('click', this.toggleLock.bind(this));
    this.sidebar.addEventListener('mouseleave', this.hideSidebar.bind(this));
    this.sidebar.addEventListener('mouseenter', this.showSidebar.bind(this));
    this.sidebarOpenBtn.addEventListener(
      'click',
      this.toggleSidebar.bind(this)
    );
    this.sidebarCloseBtn.addEventListener(
      'click',
      this.toggleSidebar.bind(this)
    );
  }

  private toggleLock() {
    const isLocked = this.sidebar.classList.toggle('locked');
    if (!isLocked) {
      this.sidebar.classList.add('hoverable');
      this.sidebarLockBtn.classList.replace('bx-lock-alt', 'bx-lock-open-alt');
    } else {
      this.sidebar.classList.remove('hoverable');
      this.sidebarLockBtn.classList.replace('bx-lock-open-alt', 'bx-lock-alt');
    }
    this.isExpandedSubject.next(isLocked);
  }

  private hideSidebar() {
    if (this.sidebar.classList.contains('hoverable')) {
      this.sidebar.classList.add('close');
    }
  }

  private showSidebar() {
    if (this.sidebar.classList.contains('hoverable')) {
      this.sidebar.classList.remove('close');
    }
  }

  private toggleSidebar() {
    this.sidebar.classList.toggle('close');
  }

  private updateSidebarState() {
    if (window.innerWidth < 1025) {
      this.sidebar.classList.add('close');
      this.sidebar.classList.remove('locked');
      this.sidebar.classList.remove('hoverable');
      this.isExpandedSubject.next(false);
    } else {
      this.sidebar.classList.add('locked');
      this.sidebar.classList.remove('close');
      this.sidebar.classList.remove('hoverable');
      this.sidebarLockBtn.classList.replace('bx-lock-open-alt', 'bx-lock-alt');
      this.isExpandedSubject.next(true);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateSidebarState();
  }
}
