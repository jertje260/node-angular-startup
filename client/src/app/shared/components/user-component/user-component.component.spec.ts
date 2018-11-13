import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponentComponent } from './user-component.component';

describe('UserComponentComponent', () => {
  let component: UserComponentComponent;
  let fixture: ComponentFixture<UserComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponentComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain pre with user', () => {
    component.user = 'henk';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('pre').innerText).toEqual('henk');
  });
});
