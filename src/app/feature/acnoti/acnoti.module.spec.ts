import { AcnotiModule } from './acnoti.module';

describe('AcnotiModule', () => {
  let acnotiModule: AcnotiModule;

  beforeEach(() => {
    acnotiModule = new AcnotiModule();
  });

  it('should create an instance', () => {
    expect(acnotiModule).toBeTruthy();
  });
});
