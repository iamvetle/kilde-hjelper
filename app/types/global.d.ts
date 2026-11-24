import type BlogArticleSource from "~/components/BlogArticleSource.vue";

    type Author = {
        firstName: string?;
        lastName: string?;
    }

    type Date = {
        day:string?;
        month:string?;
        year:string?;
    }

    type RetrievalDate = {
        retrievedDay:string;
        retrievedMonth:string;
        retrieveYear:string;
    } | undefined

    interface StandardSource extends Date, RetrievalDate {
        organizationAuthor:string,
        title:string,
        url:string,
        authors: Author[]
    }

    interface BlogArticleSource extends StandardSource {
        blogTitle:string,
    }
    
    interface BossSource extends BlogArticleSource {
    }
