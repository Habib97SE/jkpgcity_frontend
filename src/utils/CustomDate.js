class CustomDate {
    static getDaysInMonth(month, year) {
        // No need to adjust the month; it should be 0-index based.
        const date = new Date(year, month, 1);
        const days = [];

        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        return days;
    }

    static getWeekDaysName(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    }

    static getMonthName(month) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[month]; // Assuming month is 0-index based when this method is called.
    }

    static getMonthAndYear() {
        const date = new Date();
        return {
            month: date.getMonth(),
            year: date.getFullYear()
        }
    }
}

export default CustomDate;