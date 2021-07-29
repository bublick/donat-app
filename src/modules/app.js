import { DonateForm } from "./donate-form"

export default class App{
    donateBtn = new DonateForm('28$', 'Введите сумму в $', 'Задонатить').render()

    run(){
        document.body.append( this.donateBtn )
    }

}