import { mosaferLocators } from '../../locators/mosaferLocators/mosafer';

let startDate = Math.floor((Math.random() * 27) + 1);
let endDate = startDate + Math.floor(Math.random() * (5) + 1)
const checkInDate = Cypress.dayjs().add(startDate, 'day').format('YYYY-MM-DD')
const checkOutDate = Cypress.dayjs().add(endDate, 'day').format('YYYY-MM-DD');

export function NavigateToUrl(){
   cy.visit('');

}

export function clickLanguageButton(){
    cy.get(mosaferLocators.langButton).click(); 
}

export function checkLogoVisibitly(){
    cy.get(mosaferLocators.logoVisibilty).should('be.visible');
}

export function signInValidation(){
    cy.get(mosaferLocators.signInButton).should('be.visible').should('contain', 'Sign in');
}

export function numberValidation(){
    cy.get(mosaferLocators.retrieveMyBookingButton).should('be.visible').should('contain', 'Retrieve my booking');
}

export function inputRandomLocation() {
   let index = 0;
   index = Math.floor((Math.random() * 4));
   let locationInput = ['Dubai', 'Jeddah', 'Makkah', 'Riyadh'];

   const locationSearch = cy.get(mosaferLocators.searchBox);
   locationSearch.type(locationInput[index]); // will choose a random value of the array and then it will nput it and choose it fro the dropDown

   cy.get(mosaferLocators.autoCompleteResultsList).contains(locationInput[index]).click();
 }

export function reservationDates () {
   cy.get(mosaferLocators.startDatePicker).click().wait(1000)
   cy.get(`[data-testid="HotelsSearchCalendar__${checkInDate}"]`).click().wait(1000);
   cy.get(mosaferLocators.endDatePicker).click().wait(1000)
   cy.get(`[data-testid="HotelsSearchCalendar__${checkOutDate}"]`).click();
 };

 export function selectReserveOption() {
   cy.wait(1000)
   cy.get(mosaferLocators.selectReserveOption).select('1 Room, 1 Adult, 0 Children');
 }

 export function makeSearch(){
    cy.get(mosaferLocators.searchHotelsBox).click();
 }

 export function waitPageLoad(){
   cy.get(mosaferLocators.loader, {timeout:30000}).should('not.exist');
}

export function cheapestPrice(){
   cy.get(mosaferLocators.lowestPriceFilter).click(); // click on lowest prices filter
   cy.wait(2000);
}

export function verifyFreeCancelationFilter(){
   cy.get(mosaferLocators.freeCancelationFilter).click({force:true});
   cy.get('[id="popularFilters-0"]').should('be.checked').and('have.length', 1);
   cy.get(mosaferLocators.freeCancelationBadge).should('contain', 'Free Cancellation'); // all elements hs this selectors should contain free cancellation
    
}

export function assertMinimumPriceEqualFirstFlight() {
   cy.get(mosaferLocators.lowestPriceOnLeft).then(($lowest) => {
     let leftPrice = $lowest.text(); // get the value from the filter side of the lowest price
     cy.get(mosaferLocators.lowestPriceOnRight).then(($el) => {
       const rightPrice = $el.text(); // get the value from the results page

       assert.equal(leftPrice, rightPrice, 'Compare right and left price ');
     });
   });
 }

 export function shortWait(){
   cy.wait(1000);
 }