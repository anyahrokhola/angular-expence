export const colors = [
    'black',
    'blue',
    'green',
    'red',
    '#e6e600',
    'purple',
    'grey',
    'orange',
    '#00cc00',
    'teal',
] as const

type BackgroundColors = {
    [key in typeof colors[number]]: string
}   

export const backgroundColors: BackgroundColors = {
    black: '#eee',
    blue: '#ADD8E6',
    green: '#98FB98',
    red: '#FFE4E1',
    '#e6e600': '#FFFFE0',
    purple: '#F9B7FF',
    grey: '#E5E4E2',
    orange: '#FAEBD7',
    '#00cc00': '#ccffcc',
    teal: '#8EEBEC'
}
