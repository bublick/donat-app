import { DonateForm } from "./donate-form"
import { DonateList } from "./donate-list"

export default class App{
    donateBtn = new DonateForm('28$', 'Введите сумму в $', 'Задонатить').render()
    
    mockDonates = [
        { amount: 4, date: new Date() },
        { amount: 20, date: new Date() },
        { amount: 3, date: new Date() },
        { amount: 1, date: new Date() },
    ];
    donateLst = new DonateList( this.mockDonates ).render()

    run(){
        document.body.append( this.donateBtn )
        document.body.append( this.donateLst )
    }

}