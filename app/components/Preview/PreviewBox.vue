<template>
    <div id="preview">
        <div class="flex flex-row align-middle justify-between">
            <h2 v-if="inlineReferance" class="font-semibold">Henvisning i teksten</h2>
            <h2 v-else class="font-semibold">I litteraturliste</h2>

            <div class="w-6 turn-around cursor-pointer" @click="turnAround()"></div>
        </div>

        <PreviewBoxBlogArticle v-if="sourcetype == 'blogArticle'" 
        :inline-referance="inlineReferance" :inline-referance-year="inlineReferanceYear"
        :author="author" :date="date" :url="url" :inline-author="authorInline"/>

        <PreviewBoxElectronicSource v-if="sourcetype == 'electronicSource'"
        :inline-referance="inlineReferance" :inline-referance-year="inlineReferanceYear"
        :author="author" :date="date" :url="url" :inline-author="authorInline" />
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    sourcetype: string
}>();

const inlineReferance = ref(false);

function turnAround() {
    inlineReferance.value = !inlineReferance.value;
}

const inlineReferanceYear = computed(() => {
    if (source.value.year) {
        return source.value.year;
    }
    return "u.å."
})

const source = useState<StandardSource>("source")

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

const authorInline = computed(() => {
    if (source.value.authors.length == 0) {
        return `${source.value.organizationAuthor}`;
    }

    if (source.value.authors.length == 1) {
        return `${source.value.authors[0]?.lastName}`;
    }

    if (source.value.authors.length == 2) {
        return `${source.value.authors[0]?.lastName} & ${source.value.authors[0]?.lastName}`
    }

    return `${source.value.authors[0]?.lastName} et al`
})

const author = computed(() => {

    // If there is an organization
    if (source.value.organizationAuthor.length > 0) {
        return source.value.organizationAuthor;
    }


    if (source.value.authors.length <= 0) {
        return "";
    }

    if (source.value.authors.length == 1) {
        return `${source.value.authors[0]?.lastName} ${source.value.authors[0]?.firstName[0]}`;
    }

    let authorStringReturn = "";

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

<style>
.turn-around {
    background-image: url("/turn-around.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
}
</style>