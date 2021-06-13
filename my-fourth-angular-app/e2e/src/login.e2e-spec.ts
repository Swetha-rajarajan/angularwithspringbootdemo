import {browser, by, element} from 'protractor';


describe('myapp-login page e2e test', () => {

  it('Login page display test', () => {
    browser.get('http://localhost:4200');
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/login');
  });

  it('Valid login - sam,sam', () => {
    element(by.id('mat-input-0')).sendKeys('sam');
    element(by.id('mat-input-1')).sendKeys('sam');
    element(by.css('span.mat-button-wrapper')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/dashboard');
  });

  afterAll( () => {
    browser.close();
  });


})