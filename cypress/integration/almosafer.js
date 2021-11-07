import * as mosaferMethods from '../../cypress/pageObjects/pageMethods/methods/mosaferMethods';
import 'cypress-wait-until';

context('Seera code challenge', () => {
    describe('Al-Mosafer TCs', () => {
        before(() => {
            mosaferMethods.NavigateToUrl();
            // cy.visit(''); // Will Navigate to the URL provided in cypress.json before starting with the test steps
        });

        it('Navigate to almosafer URL and verify elements', () => {
            cy.url().should('include','https://www.almosafer.com/ar');
            mosaferMethods.checkLogoVisibitly();

            if(cy.url().should('include','ar')){
                mosaferMethods.clickLanguageButton();
            } else {
                cy.task('log','The site is already in english');
            }

            mosaferMethods.signInValidation();
            mosaferMethods.numberValidation();
        });

        it('Search for the best price ', () => {
            mosaferMethods.inputRandomLocation();
            mosaferMethods.reservationDates();
            mosaferMethods.selectReserveOption();
            mosaferMethods.shortWait();
            mosaferMethods.makeSearch();
            mosaferMethods.waitPageLoad();
            mosaferMethods.cheapestPrice();
            mosaferMethods.assertMinimumPriceEqualFirstFlight();
            mosaferMethods.verifyFreeCancelationFilter();
                 

        });

    });
});