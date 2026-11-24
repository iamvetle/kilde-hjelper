import type BlogArticleSource from "~/components/BlogArticleSource.vue";

    type Author = {
        firstName: string;
        lastName: string;
    }


    
    type Date = {
        day:string;
        month:string; // 0 means not choosen something
        year:string;
    }

    type RetrievalDate = {
        retrievedDay:string;
        retrievedMonth:string; // 0 means not choosen something
        retrievedYear:string;
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
    
    export interface ReportSource extends StandardSource {
        reportNameAndNumber:string,
        publisher:string;
    }

    // interface BossSource extends BlogArticleSource, ElectronicSource {
    // }