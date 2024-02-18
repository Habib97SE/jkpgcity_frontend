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

    /**
     * Generate Open Graph tags for a given article object to be used in the head of the document
     * @param article - The article object to generate the tags for
     * @returns {{"og:image": *, "og:type": string, "og:title", "og:article:published_time": *, "og:url", "og:description", "og:article:author": *}}
     */
    static generateFacebookOGPTags(article) {
        return {
            'og:title': article.title,
            'og:type': 'article',
            'og:image': article.image,
            'og:url': article.url,
            'og:description': article.text,
            'og:article:published_time': article.publishedDate,
            'og:article:author': article.author,
        };
    }

    /**
     * Generate Twitter card tags for a given article object to be used in the head of the document.
     * @param article - The article object to generate the tags for
     * @returns {{"twitter:card": string, "twitter:title", "twitter:site": string, "twitter:description", "twitter:image": *}}
     */
    static generateTwitterCardTags(article) {
        return {
            'twitter:card': 'summary_large_image',
            'twitter:site': '@publisher_handle',
            'twitter:title': article.title,
            'twitter:description': article.text,
            'twitter:image': article.image,
        };
    }

    /**
     * Generate Open Graph tags for a given article object to be used in the head of the document.
     * @param article - The article object to generate the tags for
     * @returns {{"og:image": *, "og:type": string, "og:title", "og:article:published_time": *, "og:url", "og:description", "og:article:author": *}}
     */
    static generateOpenGraphTags(article) {
        return {
            'og:title': article.title,
            'og:type': 'article',
            'og:image': article.image,
            'og:url': article.url,
            'og:description': article.text,
            'og:article:published_time': article.publishedDate,
            'og:article:author': article.author,
        };
    }

}

export default Helper;