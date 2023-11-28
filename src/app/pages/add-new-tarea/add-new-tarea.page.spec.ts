import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewTareaPage } from './add-new-tarea.page';

describe('AddNewTareaPage', () => {
  let component: AddNewTareaPage;
  let fixture: ComponentFixture<AddNewTareaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddNewTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
