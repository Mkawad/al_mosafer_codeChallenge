import * as mosaferMethods from '../../cypress/pageObjects/pageMethods/methods/mosaferMethods';

context('Seera code challenge', () => {
    describe('Al-Mosafer TCs', () => {
        before(() => {
            mosaferMethods.NavigateToUrl();
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

        it('Search for hotels with random dates ', () => {
            mosaferMethods.inputRandomLocation();
            mosaferMethods.reservationDates();
            mosaferMethods.selectReserveOption();
            mosaferMethods.shortWait();
            mosaferMethods.makeSearch();
        });

        it('Verify elements in hotels detailed dates', () => {
            mosaferMethods.shortWait();
            mosaferMethods.waitPageLoad();
            mosaferMethods.cheapestPrice();
            mosaferMethods.assertMinimumPriceEqualFirstFlight();
            mosaferMethods.verifyFreeCancelationFilter();
        });
    });
});