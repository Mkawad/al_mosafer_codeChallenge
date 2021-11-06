import { mosaferLocators } from '../../locators/mosaferLocators/mosafer';

export function NavigateToUrl(){
   cy.visit('');

}

export function clickLanguageButton(){
   return cy.get(mosaferLocators.langButton).click(); 
}

export function checkLogoVisibitly(){
   return cy.get(mosaferLocators.logoVisibilty).should('be.visible');
}
////////////////////////////////////////////////////////////////////////////
export function signInValidation(){
   return cy.get(mosaferLocators.signInButton).should('be.visible').should('contain', 'Sign in');
}

export function numberValidation(){
   return cy.get(mosaferLocators.retrieveMyBookingButton).should('be.visible').should('contain', 'Retrieve my booking');
}

// export function checkLogoVisibitly(){
//    return cy.get(mosaferLocators.logoVisibilty).should('be.visible');
// }

///////////////////////////////////////////////////////////////////////////////
export function inputRandomLocation() {
   let index = 0;
   index = Math.floor((Math.random() * 4));
   let locationInput = ['Dubai', 'Jeddah', 'Makkah', 'Riyadh']; // location array

   const locationSearch = cy.get(mosaferLocators.searchBox);
   locationSearch.type(locationInput[index]); // will choose a random value of the array and then it will nput it and choose it fro the dropDown

   cy.get(mosaferLocators.autoCompleteResultsList).contains(locationInput[index]).click();
   return this;
 }

 export function chooseCheckInDate() {
   cy.get(mosaferLocators.startDatePicker).click();
   cy.get(mosaferLocators.availableDates).any().click(); // choosing a 
 }

 export function chooseCheckOutDate() {
   cy.get(mosaferLocators.endDatePicker).click();
   cy.get(mosaferLocators.availableDates).any().click(); // will click on random day
 }

 export function selectReserveOption() {
   cy.wait(1000)
   cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select('1 Room, 1 Adult, 0 Children');
   // cy.get(mosaferLocators.reserveBox).focus().click({force:true});
   // cy.get(mosaferLocators.reserveOption).trigger('click');
   // cy.pause();
 }

 export function makeSearch(){
    cy.get(mosaferLocators.searchHotelsBox).click();
 }

 export function waitPageLoad(){
   cy.get(mosaferLocators.loader).should('not.exist');
}

export function cheapestPrice(){
   cy.get(mosaferLocators.lowestPriceFilter).click(); // click on lowest prices filter
   cy.wait(2000);


}
export function verifyFreeCancelationFilter(){
   cy.get(mosaferLocators.freeCancelationFilter).click({force:true});
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