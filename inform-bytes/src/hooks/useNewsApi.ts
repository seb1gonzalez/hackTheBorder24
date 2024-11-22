import { useState } from "react";
import NewsAPI, { INewsApiEverythingParams, INewsApiResponse } from 'ts-newsapi';
import { NEWS_API_KEY } from "../env_vars/newsAPI";

const newsAPI = new NewsAPI(NEWS_API_KEY ?? '');

const useNewsApi = (query: INewsApiEverythingParams) => {
    const [newsResults, setNewsResults] = useState<INewsApiResponse>();
        // NEWS API CALL
        // Search through millions of articles from over 50,000 large and small news sources and blogs.
        if(!newsResults){
        newsAPI.getEverything(query).then(res => {
            setNewsResults(res);
            console.log(res);
        });
    }


  return newsResults;
}

export default useNewsApi;


/*
* Keywords or phrases to search for in the article title and body. Advanced search is supported here:
* - Surround phrases with quotes (") for exact match.
* - Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
* - Prepend words that must not appear with a - symbol. Eg: -bitcoin
* - Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis.
* Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
q?: string;
/**
 * Keywords or phrases to search for in the article title only.
 * Advanced search is supported here:
 * - Surround phrases with quotes (") for exact match.
 * - Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
 * - Prepend words that must not appear with a - symbol. Eg: -bitcoin
 * - Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis.
 * Eg: crypto AND (ethereum OR litecoin) NOT bitcoin
qInTitle?: string;
/**
 * Array of identifiers for the news sources or blogs you want headlines from.
 * Use the /sources endpoint to locate these programmatically or look at the sources index.
sources?: Array<string>;
/**
 * Array of domains ('eg bbc.co.uk', 'techcrunch.com', 'engadget.com') to restrict the search to.

domains?: Array<string>;
/**
 * Array of domains ('eg bbc.co.uk', 'techcrunch.com', 'engadget.com') to remove from the results.

excludeDomains?: Array<string>;
/**
 * A date and optional time for the oldest article allowed.
 * This should be in ISO 8601 format (e.g. 2020-06-06 or 2020-06-06T09:01:07)
 *
 *  Default: the oldest according to your plan.

from?: string;
/**
 * A date and optional time for the newest article allowed.
 * This should be in ISO 8601 format (e.g. 2020-06-06 or 2020-06-06T09:01:07)
 *
 * Default: the newest according to your plan.

to?: string;
/**
 * The 2-letter ISO-639-1 code of the language you want to get headlines for.
 * Possible options: 'ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'.
 *
 * Default: all languages returned.

language?: ApiNewsLanguage;
/**
 * The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
 * - relevancy = articles more closely related to q come first.
 * - popularity = articles from popular sources and publishers come first.
 * - publishedAt = newest articles come first.
 *
 * Default: publishedAt

sortBy?: ApiNewsSort;
/**
 * The number of results to return per page. 20 is the default, 100 is the maximum.

pageSize?: number;
/**
 * Use this to page through the results.

page?: number;
*/