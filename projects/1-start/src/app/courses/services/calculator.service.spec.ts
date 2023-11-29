import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";


describe('CalculatorService', () => { // test suite, group of test specification -> series of test specifications

  let calculatorService: CalculatorService,
      loggerSpy: any;

  beforeEach(()=>{
    console.log("Calling before each");
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    calculatorService = new CalculatorService(loggerSpy);
  });

  it('should add two numbers', () => { // test specification
    // pending();
    console.log('calling add function test');
    
    const result = calculatorService.add(2,2);
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
  
  it('should subtract two numbers', () => { // test specification
    console.log('calling subtract function test');
    
    const result = calculatorService.subtract(5,3);
    expect(result).toBe(2, "Unexpected Subraction results");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);

  });

});