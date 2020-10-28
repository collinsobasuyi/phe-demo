// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Test', () => {
    it('Visits GOV.UK Coronavirus (COVID-19) summary page', () => {
        cy.visit('https://coronavirus-staging.data.gov.uk')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })


    it('Header text contains GOV.UK Coronavirus (COVID-19) in the UK', () => {
        cy.contains('GOV.UK Coronavirus (COVID-19) in the UK')
    })

    it('Side navigation should have over 5 menu', () => {
        cy.get('.moj-side-navigation > .moj-side-navigation__list >', { log: true }).should('have.length.greaterThan', 5)
    })

    it('Click Testing Menu and verify contents exist', () => {
        cy.get('.moj-side-navigation > .moj-side-navigation__list > :nth-child(2) > a')
            .should('be.visible')
            .and('contain', 'Testing')
            .click()
        cy.contains('Virus tests processed')
        cy.contains('Testing and capacity, by test type')
        cy.contains('Testing and capacity, by test type')

        cy.contains(' and capacity, by test type')
       
    })




})

