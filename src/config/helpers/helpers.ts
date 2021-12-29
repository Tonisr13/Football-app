export const reformatDate = (value: string | undefined) => {
    if (value) {
        const date: Date = new Date(value)
    
        const day = (date.getDate() + 1) < 10 ? `0${(date.getDate() + 1)}` : (date.getDate() + 1)
        const month = date.toLocaleString('default', { month: 'long' })
        const year = date.getFullYear()
    
        return `${day} ${month} ${year}`
    }
}