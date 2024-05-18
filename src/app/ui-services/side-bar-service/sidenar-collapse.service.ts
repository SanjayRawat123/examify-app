import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarCollapseService {
  private sidebar!: HTMLElement;
  private sidebarOpenBtn!: HTMLElement;
  private sidebarCloseBtn!: HTMLElement;
  private sidebarLockBtn!: HTMLElement;

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
    this.initializeSidebarState();
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
    this.sidebar.classList.toggle('locked');
    if (!this.sidebar.classList.contains('locked')) {
      this.sidebar.classList.add('hoverable');
      this.sidebarLockBtn.classList.replace('bx-lock-alt', 'bx-lock-open-alt');
    } else {
      this.sidebar.classList.remove('hoverable');
      this.sidebarLockBtn.classList.replace('bx-lock-open-alt', 'bx-lock-alt');
    }
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

  private initializeSidebarState() {
    if (window.innerWidth < 800) {
      this.sidebar.classList.add('close');
      this.sidebar.classList.remove('locked');
      this.sidebar.classList.remove('hoverable');
    } else {
      this.sidebar.classList.add('locked');
      this.sidebar.classList.add('hoverable');
      this.sidebarLockBtn.classList.replace('bx-lock-alt', 'bx-lock-open-alt');
    }
  }
}
