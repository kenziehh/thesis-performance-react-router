export interface Article {
    title: string;
    videoUrl: string;
    videoTitle: string;
    image: string;
    author: string;
    date: string;
    readingTime: string;
    facts: string[];
    subheads: Subhead[];
}

export interface Subhead {
    heading: string;
    paragraphs: string[];
}