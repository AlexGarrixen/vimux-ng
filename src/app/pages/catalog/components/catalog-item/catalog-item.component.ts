import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { userApi } from '@app/store/services';
import { SessionService } from '@app/services/session.service';

const { useAddInQueuedMutation, useRemoveInQueuedMutation } = userApi;

@Component({
  selector: 'catalog-item',
  templateUrl: './catalog-item.component.html',
})
export class CatalogItemComponent implements OnInit {
  constructor(private sessionService: SessionService, private router: Router) {}

  @Input() id!: string;
  @Input() index!: number;
  @Input() img!: string;
  @Input() title!: string;
  @Input() body!: string;
  @Input() inQueued!: boolean;
  @Output() onAddedInQueued = new EventEmitter<{ index: number; id: string }>();
  @Output() onRemovedInQueued = new EventEmitter<{
    index: number;
    id: string;
  }>();

  isAuth: boolean = false;
  isLoading: boolean = false;

  queryAdd = useAddInQueuedMutation();
  queryRemove = useRemoveInQueuedMutation();

  onClickBookmark() {
    return (id: string) => {
      if (!this.isAuth) {
        this.router.navigate(['/auth/signin']);
        return;
      }

      if (!this.inQueued) this.queryAdd.dispatch(id);
      else this.queryRemove.dispatch(id);
    };
  }

  ngOnInit(): void {
    this.sessionService.session$.subscribe((data) => {
      this.isAuth = data ? true : false;
    });

    this.queryAdd.state$.subscribe(({ isLoading, isSuccess }) => {
      this.isLoading = isLoading;

      if (isSuccess)
        this.onAddedInQueued.emit({ index: this.index, id: this.id });
    });

    this.queryRemove.state$.subscribe(({ isLoading, isSuccess }) => {
      this.isLoading = isLoading;

      if (isSuccess)
        this.onRemovedInQueued.emit({ index: this.index, id: this.id });
    });
  }
}
