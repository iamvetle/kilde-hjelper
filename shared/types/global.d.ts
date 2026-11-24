import type BlogArticleSource from "~/components/BlogArticleSource.vue";

    type Author = {
        firstName: string;
        lastName: string;
    }

    type Date = {
        day:string?;
        month:string?;
        year:string?;
    }

    type RetrievalDate = {
        retrievedDay:string?;
        retrievedMonth:string?;
        retrievedYear:string?;
    }

    export interface StandardSource extends Date, RetrievalDate {
        organizationAuthor:string,
        title:string,
        url:string,
        authors: Author[]
    }

    export interface BlogArticleSource extends StandardSource {
        blogTitle:string,
    }

    export interface ElectronicSource extends StandardSource {
        website: string,
    }
    
    // interface BossSource extends BlogArticleSource, ElectronicSource {
    // }