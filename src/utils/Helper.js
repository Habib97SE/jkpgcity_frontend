class Helper {

    /**
     * Calculate the read time of a given text in minutes
     * @param text - The text to calculate the read time for
     * @returns {number} - The read time in minutes, if less than 1 minute, 1 is returned.
     */
    static calculateReadTime(text) {
        const wordsPerMinute = 200;
        const noOfWords = text.split(/\s/g).length;
        const minutes = noOfWords / wordsPerMinute;
        return minutes < 1 ? 1 : Math.ceil(minutes);
    }

}

export default Helper;