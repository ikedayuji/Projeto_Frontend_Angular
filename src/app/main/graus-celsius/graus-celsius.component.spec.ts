import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrausCelsiusComponent } from './graus-celsius.component';

describe('GrausCelsiusComponent', () => {
  let component: GrausCelsiusComponent;
  let fixture: ComponentFixture<GrausCelsiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrausCelsiusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrausCelsiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
