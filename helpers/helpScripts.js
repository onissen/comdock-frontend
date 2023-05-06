export function germanDate(dateString) {
    // Convert date string to Date object
    const date = new Date(dateString);

    // Get day, month, and year from date object
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    // Format date string as DD.MM.YYYY
    const formattedDate = `${day}.${month}.${year}`;

    // Return formatted date string
    return formattedDate;
}

export function formatTime(timestring) {
    const time = new Date(timestring);
    const hour = time.getHours().toString().padStart(2, '0')
    const minutes = time.getMinutes().toString().padStart(2, 0);

    const formattedTime = `${hour}:${minutes}`;
    return formattedTime;
}

const timestamp = new Date();
export const currentDay = germanDate(timestamp);
export const currentTime = formatTime(timestamp)
