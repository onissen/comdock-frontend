class DateUtils {
    static getCurrentDate() {
        const raw_date = new Date();
        const day = ('0' + raw_date.getDate()).slice(-2); // add leading zero if needed
        const month = ('0' + (raw_date.getMonth() + 1)).slice(-2); // add leading zero if needed
        const year = raw_date.getFullYear();
        const hours = ('0' + raw_date.getHours()).slice(-2); // add leading zero if needed
        const minutes = ('0' + raw_date.getMinutes()).slice(-2); // add leading zero if needed
        
        return day + '.' + month + '.' + year + ' '+hours+':'+minutes;
    }
}

export {DateUtils};