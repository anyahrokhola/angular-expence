export const colors = [
    'black',
    'blue',
    'green',
    'red',
    'yellow',
    'purple',
    'grey',
    'orange',
    'lime',
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
    yellow: '#FFFFE0',
    purple: '#F9B7FF',
    grey: '#E5E4E2',
    orange: '#FAEBD7',
    lime: '#CCFB5D',
    teal: '#8EEBEC'
}
