export default class App{
    
    run(){
        const helloBlock = document.createElement('div')
        helloBlock.innerText = 'Hello World'

        document.body.append(helloBlock)
    }

}