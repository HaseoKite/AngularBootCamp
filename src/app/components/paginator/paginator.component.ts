import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PaginationConst } from '../../../constants/pagination-constants';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  @Input() currentPage: number = 1;
  @Input() totalProducts: number = 20;
  @Input() pageSize: number = PaginationConst.productsPerPage;

  @Output() currentPageChange = new EventEmitter<number>();

  public totalPages!: number;
  public visiblePages!: number[];

  ngOnInit(): void {
    this.updateVisiblePages();
  }

  ngOnChanges() {
    this.updateVisiblePages();
  }

  public selectPage(page: number): void {
    this.currentPage = page;
    this.updateVisiblePages();
    this.currentPageChange.emit(this.currentPage);
  }

  private updateVisiblePages(): void {
    this.updateTotalPages();
    const startIndex = Math.max(
      Math.min(
        this.currentPage - Math.ceil(length / 2),
        this.totalPages - length
      ),
      0
    );
    this.visiblePages = Array.from(
      new Array(this.totalPages).keys(),
      (item) => item + 1
    );
  }
  private updateTotalPages() {
    this.totalPages = Math.ceil(this.totalProducts / this.pageSize);
  }
}
