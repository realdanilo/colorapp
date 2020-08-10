import chroma from 'chroma-js'

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

function generatePalette(starterPalette) {
    let newPalette = { ...starterPalette, colors: {} }
    for (let level of levels) {
        newPalette.colors[level] = []
    }
    //using the staterPalette, not the newPalette
    for (let color of starterPalette.colors) {
        let scale = getScale(color.color, 10).reverse()
        for (let i in scale) {
            //for every index
            newPalette.colors[levels[i]].push({
                //get the color pair value ie 50 and push obj
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
            })
        }
    }
    return newPalette
}
function getRange(hexColor) {
    const endColor = "#fff"
    return [chroma(hexColor).darken(1.4).hex(), hexColor, endColor]
}

function getScale(hexColor, numberOfColors) {
    return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors)
}

export { generatePalette }