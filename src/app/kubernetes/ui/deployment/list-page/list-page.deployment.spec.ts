/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';
import { RequestOptions, BaseRequestOptions, Http } from '@angular/http';
import { RestangularModule } from 'ng2-restangular';

import { IPaaSCommonModule } from '../../common/common.module';
import { DeploymentsListPage } from './list-page.deployment';
import { DeploymentsListComponent } from '../list/list.deployment';
import { DeploymentsListToolbarComponent } from '../list-toolbar/list-toolbar.deployment';
import { StoreModule } from '../../store/store.module';

describe('DeploymentsListPage', () => {
  let component: DeploymentsListPage;
  let fixture: ComponentFixture<DeploymentsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IPaaSCommonModule, StoreModule, RouterTestingModule.withRoutes([]), RestangularModule.forRoot()],
      declarations: [DeploymentsListPage, DeploymentsListComponent, DeploymentsListToolbarComponent],
      providers: [
        MockBackend,
        { provide: RequestOptions, useClass: BaseRequestOptions },
        {
          provide: Http, useFactory: (backend, options) => {
            return new Http(backend, options);
          }, deps: [MockBackend, RequestOptions],
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
