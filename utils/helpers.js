module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    format_date2: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
      },

}