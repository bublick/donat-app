import { Settings as Globals } from "../core/constants/settings"
import * as Utils from "../core/utils"

export class DonateList{
    #donates

    constructor( donates ){
        this.#donates = donates
    }

    updateDonates( updatedDonates ){
        const donatesContainer__donates = document.querySelector('.donates-container__donates')
        donatesContainer__donates.innerHTML = ''

        updatedDonates.forEach( el => {
            const donateItem = document.createElement('div')
            donateItem.className = 'donate-item'
            donateItem.innerText = Utils.getFormattedTime( el.date ) + " - "

            const boldText = document.createElement('b')
            boldText.textContent = el.amount + Globals.currency
            donateItem.append( boldText )

            donatesContainer__donates.append( donateItem )
        });
    }

    render(){
        const donatesContainer = document.createElement('div')
        donatesContainer.className = 'donates-container'

        const donatesContainer__title = document.createElement('h2')
        donatesContainer__title.className = 'donates-container__title'
        donatesContainer__title.innerText = 'Список донатов'
        donatesContainer.append( donatesContainer__title )

        const donatesContainer__donates = document.createElement('div')
        donatesContainer__donates.className = 'donates-container__donates'
        donatesContainer.append( donatesContainer__donates )

        this.#donates.forEach( el => {
            const donateItem = document.createElement('div')
            donateItem.className = 'donate-item'
            donateItem.innerText = Utils.getFormattedTime( el.date ) + " - "

            const boldText = document.createElement('b')
            boldText.textContent = el.amount + Globals.currency
            donateItem.append( boldText )

            donatesContainer__donates.append( donateItem )
        });

        return donatesContainer
    }
}