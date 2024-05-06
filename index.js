let inputButton = document.getElementById('input-btn')

function changeInput (){
    let input = document.getElementById('input')

    let color = ['red', 'green', 'yellow', 'pink', 'purple', 'black', 'lightred', 'lightblue', 'blue', 'red', 'lightgreen', 'grey', 'lightgrey']
    let colorIndex = parseInt(Math.random() * color.length)
    input.style.backgroundColor = color[colorIndex]
}

inputButton.addEventListener('click', (e) => {
    changeInput()
    // console.log(e.target)
})


function changeFont() {
    let input = document.getElementById('input')

    let fonts = ['Arial', 'sans-serif',
        'Times New Roman', 'serif',
        'Helvetica', 'sans-serif',
        'Georgia', 'serif',
        'Verdana', 'sans-serif',
        'Courier New', 'monospace',
       'Palatino', 'serif',
        'Comic Sans MS', 'cursive',
        'Tahoma', 'sans-serif',
        'Impact', 'fantasy']
    let fontindex = parseInt(Math.random()*fonts.length)
    input.style.fontFamily = fonts[fontindex]

}

document.getElementById('bbb').addEventListener('click', () => {
    changeFont()
})

function styleText(){
    let style = ['italic', 'line-through', 'underlined']
}

let textColor = () => {
    let color = ['red', 'green', 'pink', 'blue', 'grey', 'white']
    let colorInt = parseInt(Math.random() * color.length)
    document.getElementById('input').style.color = color[colorInt]
}

document.getElementById('text-color').addEventListener('click',() => {
    textColor()
})

