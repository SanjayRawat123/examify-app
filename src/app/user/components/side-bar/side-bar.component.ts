import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CategoryService } from 'src/app/backend-services/category/category.service';
import { SidebarCollapseService } from 'src/app/ui-services/side-bar-service/sidenar-collapse.service';
import { ThemeService } from 'src/app/ui-services/theme.service';
import { CoreMenu } from 'src/types/core-menu';
import { Data } from 'src/types/examify-interface';

@Component({
  selector: 'app-side-bar-user',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SideBarComponent implements OnInit {
  isDarkMode: boolean = false;
  categories: Data.Category[] = [];
  constructor(
    private sidebarService: SidebarCollapseService,
    private elementRef: ElementRef,
    public themeService: ThemeService,
    private categoryService: CategoryService
  ) {
    this.themeService.themeChange$.subscribe((isDarkTheme) => {
      this.isDarkMode = isDarkTheme;
    });
  }
  ngOnInit(): void {
    this.isDarkMode = this.themeService.getDarkTheme;
    this.loadCategories();
  }

  ngAfterViewInit(): void {
    const sidebar = this.elementRef.nativeElement.querySelector('.sidebar');
    const sidebarOpenBtn = document.querySelector(
      '#sidebar-open'
    ) as HTMLElement;
    const sidebarCloseBtn = document.querySelector(
      '#sidebar-close'
    ) as HTMLElement;
    const sidebarLockBtn = this.elementRef.nativeElement.querySelector(
      '#lock-icon'
    ) as HTMLElement;

    this.sidebarService.init(
      sidebar,
      sidebarOpenBtn,
      sidebarCloseBtn,
      sidebarLockBtn
    );
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data: Data.Category[]) => {
        console.log(data);
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }



}
