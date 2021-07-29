export class DonateForm {
    #h1
    #labelText
    #btnText

    constructor( h1, labelText, btnText ){
        this.#h1 = h1
        this.#labelText = labelText
        this.#btnText = btnText
    }

    updateTotalAmount( newAmount ){
        const h1El = document.querySelector('#total-amount')
        h1El.innerText = newAmount + '$'
    }

    render(){
        const donateForm = document.createElement('form')
        donateForm.className = 'donate-form'

        const h1El = document.createElement('h1')
        h1El.id = 'total-amount'
        h1El.innerText = this.#h1 + '$'
        donateForm.append( h1El )

        const donateForm__inputLabel = document.createElement('label')
        donateForm__inputLabel.className = 'donate-form__input-label'
        donateForm__inputLabel.innerText = this.#labelText
        donateForm.append( donateForm__inputLabel )

        const donateForm__donateInput = document.createElement('input')
        donateForm__donateInput.className = 'donate-form__donate-input'
        donateForm__donateInput.name = 'amount'
        donateForm__donateInput.type = 'number'
        donateForm__donateInput.max = '100'
        donateForm__donateInput.min = '0'
        donateForm__donateInput.required = ''
        donateForm.append( donateForm__donateInput )

        const donateForm__submitButton = document.createElement('button')
        donateForm__submitButton.className = 'donate-form__submit-button'
        donateForm__submitButton.type = 'submit'
        donateForm__submitButton.innerText = this.#btnText
        donateForm.append( donateForm__submitButton )

        

        return donateForm
    }
}