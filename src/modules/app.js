import { DonateForm } from "./donate-form"
import { DonateList } from "./donate-list"

export default class App{
    state = { 
        donates: [

        ],
        totalAmount: 0
    }

    donateFrm = new DonateForm( this.state.totalAmount, 'Введите сумму в $', 'Задонатить')
    
    mockDonates = [
        { amount: 4, date: new Date() },
        { amount: 20, date: new Date() },
        { amount: 3, date: new Date() },
        { amount: 1, date: new Date() },
    ];
    donateLst = new DonateList( this.state.donates )

    createNewDonate( newDonate ){
        this.state.donates.push( { amount: Number(newDonate), date: new Date() }, )
        this.state.totalAmount += Number(newDonate)

        this.donateLst.updateDonates( this.state.donates )
        this.donateFrm.updateTotalAmount( this.state.totalAmount )
    }

    run(){
        document.body.append( this.donateFrm.render() )
        document.body.append( this.donateLst.render() )

        //this.donateFrm.createNewDonate( bind(this.state.totalAmount) )
        
        const donateForm = document.querySelector('.donate-form')
        donateForm.addEventListener( "submit", (event) => {
            event.preventDefault()
            this.createNewDonate( event.target.amount.value )
            event.target.amount.value = ''
        })
    }

}