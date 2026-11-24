<template>
    <div class="bg-slate-200 min-h-[100vh] w-full flex flex-col align-items pb-8 pr-2 pl-2">
        <div class="mt-16 gap-4 flex flex-col align-items w-[500px] mr-auto ml-auto">
            <h1 class="font-bold text-2xl text-center">Velg en kilde og begynn oppføring</h1>
            <select class="rounded-md p-1 mt-2 text-xl font-semibold" id="sourcetype" v-model="sourceType">
                <optgroup label="Elektrisk">
                    <option value="electronicSource">Elektronisk kilde</option>
                    <option value="blogArticle">Blogginnlegg</option>
                    <option value="report">Rapport</option>
                    <option value="encyclopedia">Leksikon</option>
                    <option value="scientificArticle">Vitenskapelig artikkel</option>
                </optgroup>

                <optgroup label="Fysisk">
                    <option value="book">Bok</option>
                </optgroup>
            </select>

            <component :is="componentMapping[sourceType]"/>
        </div>
    </div>
</template>


<script lang="ts" setup>
import ElectronicSource from "~/components/ElectronicSource.vue";
import BookSource from "~/components/BookSource.vue";
import BlogArticleSource from "~/components/BlogArticleSource.vue";
import ReportSource from "~/components/ReportSource.vue";
import EncyclopediaSource from "~/components/EncyclopediaSource.vue";
import ScientificArticleSource from "~/components/ScientificArticleSource.vue";

const sourceType = ref<string>("blogArticle");

const componentMapping: { [key: string]: Component } = {
    book: BookSource,
    electronicSource: ElectronicSource,
    blogArticle: BlogArticleSource,
    report: ReportSource,
    encyclopedia: EncyclopediaSource,
    scientificArticle: ScientificArticleSource
}
</script>