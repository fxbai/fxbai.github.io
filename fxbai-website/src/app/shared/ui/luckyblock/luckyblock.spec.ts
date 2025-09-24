import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Luckyblock } from './luckyblock';

describe('Luckyblock', () => {
  let component: Luckyblock;
  let fixture: ComponentFixture<Luckyblock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Luckyblock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Luckyblock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
