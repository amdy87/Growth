import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationalQuoteComponent } from './inspirational-quote.component';

describe('InspirationalQuoteComponent', () => {
  let component: InspirationalQuoteComponent;
  let fixture: ComponentFixture<InspirationalQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspirationalQuoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspirationalQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
