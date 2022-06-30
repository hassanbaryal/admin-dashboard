

let today = new Date()

const calendar = document.querySelector(".calendar")
const monthElement = document.querySelector(".month")
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

createCalendar()

function createCalendar () {
    
    let currentDate = today.getDate()
    let currentDay = today.getDay() - 1 //gets todays day (e.g. monday) in number form (e.g. mon = 0)
    let currentMonth = today.getMonth() //gets current month in number form (e.g. February = 1)
    monthElement.textContent = months[currentMonth]
    // Calculate which day the 1st of the month falls on
    let remainder = (currentDate % 7) - 1
    let firstOfMonth = currentDay - remainder
    if (firstOfMonth < 0) firstOfMonth += 7

    addToCalendar(firstOfMonth, '-')
    addToCalendar(daysInMonth[currentMonth], 1, currentDate)

}

function addToCalendar (numDays, type = 1, currentDate = -1) {
    if (type == '-') {
        for (let i = 0; i < numDays; i++) {
            const node = document.createElement("span")
            node.textContent = '-'
            node.classList.add('dashed-day')
            calendar.appendChild(node)
        }
        
    } else {
        for (let i = 1; i <= numDays; i++) {
            const node = document.createElement("span")
            node.textContent = i
            node.classList.add('number-day')
            node.id = i
            if (currentDate == i) node.classList.add('current-date')
            calendar.appendChild(node)
        }
    }
}


