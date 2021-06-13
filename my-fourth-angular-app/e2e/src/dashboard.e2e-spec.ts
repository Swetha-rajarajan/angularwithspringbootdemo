import {browser, by, element} from 'protractor';




describe('Dashboard page e2e test', () => {

  beforeAll( () =>{
    browser.get('http://localhost:4200');
    // tslint:disable-next-line:no-unused-expression
    browser.fullscreen;
    element(by.id('mat-input-0')).sendKeys('sam');
    element(by.id('mat-input-1')).sendKeys('sam');
    element(by.css('span.mat-button-wrapper')).click();
  });

  afterAll( () =>{
    browser.close();
  });

  it(' Add Book - test ', async () => {

    const oldbookcount = await element.all(by.xpath('//span[text()=\'Add to Favorite\']')).count();
    element(by.id('mat-input-2')).sendKeys('sr101');
    element(by.id('mat-input-3')).sendKeys('Think thrice');
    element(by.id('mat-input-4')).sendKeys('Ann');
    element(by.css('span.mat-button-wrapper')).click();
    const newbookcount = element.all(by.xpath('//span[text()=\'Add to Favorite\']')).count();
    expect(newbookcount).toEqual(oldbookcount + 1);



  });





});
