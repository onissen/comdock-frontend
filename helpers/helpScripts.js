class DateUtils {
    static getCurrentDate() {
        const raw_date = new Date();
        return raw_date.getDate()+'.'+(raw_date.getMonth()+1)+'.'+raw_date.getFullYear()+' '+raw_date.getHours()+':'+raw_date.getMinutes();
    }
}

export {DateUtils};