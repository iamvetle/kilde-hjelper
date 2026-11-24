<template>
    <div id="preview">
        <h2 class="font-bold">Forhåndsvisning</h2>

        <PreviewBoxBlogArticle v-if="sourcetype == 'blogArticle'" 
        :author="author"  
        :date="date"
        :url="url"
        />
    </div>
</template> 

<script lang="ts" setup>
defineProps<{
    sourcetype: string
}>();

const source = useState("source", () => {
    return {
        authors: [{
            firstName: "",
            lastName: ""
        }], 
        organizationAuthor: "",
        title: "",
        blogTitle: "",
        day: null,
        month: null,
        year: null,
        url: "",
        retrievedDay: null,
        retrievedYear: null,
        retrievedMonth: null,
    }
})

const date = computed(() => {
    // Doesn't have year
    if (!source.value.year) {
        return "u.å."
    }

    // Year, month and day
    if (source.value.month && source.value.day) {
        return `${source.value.year}, ${source.value.day}. ${yearNumberMapping[source.value.month]}`
    }

    // Year, month but not day
    if (source.value.month && source.value.year && !source.value.day) {
        return `${source.value.year}, ${yearNumberMapping[source.value.month]}`
    }

    return source.value.year;
})

const yearNumberMapping: any = {
    1: "januar",
    2: "februar",
    3: "mars",
    4: "april",
    5: "mai",
    6: "juni",
    7: "juli",
    8: "august",
    9: "september",
    10: "oktober",
    11: "november",
    12: "desember"
}

const url = computed(() => {
    
    // If there isn't any year
    if (!source.value.year && source.value.retrievedMonth) {
        return `Hentet ${source.value.retrievedDay}. ${yearNumberMapping[source.value.retrievedMonth]} ${source.value.retrievedYear} fra ${source.value.url}`
    }

    return source.value.url
})

const author = computed(() => {

    // If there is an organization
    if (source.value.organizationAuthor.length > 0) {
        return source.value.organizationAuthor;
    }

    let authorStringReturn = "";

    if (source.value.authors.length <= 0) {
        return "";
    }

    for (let i = 0; i < source.value.authors.length; i++) {
        const authorTemp = source.value.authors[i];

        // If there is no author
        if (!authorTemp) {
            return "";
        }

        let authorStringTemp = "";

        // If there is a last name
        if (authorTemp.lastName) {
            authorStringTemp += ` ${authorTemp.lastName}`;
        }

        // If there is a last name and a first name
        if (authorTemp.lastName && authorTemp.firstName) {
            authorStringTemp += ` ${authorTemp.firstName[0]}`;
        }

        // If there is only a first name
        if (!authorTemp.lastName && authorTemp.firstName) {
            authorStringTemp += ` ${authorTemp.firstName}`
        }

        if (i == source.value.authors.length - 2) {
            authorStringTemp += ". &";
        } else if (i == source.value.authors.length - 1) {
            authorStringTemp += "";
        } else {
            authorStringTemp += ".;";
        }

        authorStringReturn += authorStringTemp;
    }

    return authorStringReturn;

})

</script>