<template>
    <div id="authors" class="flex flex-col gap-2">
        <p v-if="!organizationIsAuthor" class="font-semibold">Forfattere</p>
        <p v-else class="font-bold">Organisasjonsnavn</p>

        <div v-if="!organizationIsAuthor" class="author" v-for="(author, index) in source.authors" :key="index">
            <input v-model.trim="author.firstName" name="authorFirstName" class="author-firstname" type="text"
                placeholder="Fornavn">
            <input v-model.trim="author.lastName" name="authorFirstName" class="author-lastname" type="text"
                placeholder="Etternavn">
            <div class="cursor-pointer trash w-4" @click="deleteAuthor(index)"></div>
        </div>

        <div v-if="organizationIsAuthor">
            <input v-model.trim="source.organizationAuthor" class="flex rounded-md p-1 w-full"
                placeholder="Bedrift ABC">
        </div>
    </div>
    <button v-if="!organizationIsAuthor" @click="addAuthor()"
        class="border-green-800 p-1 rounded-lg border border-solid font-light">Legg
        til
        forfatter</button>
    <div class="flex flex-row gap-1">
        <input v-model="organizationIsAuthor" id="organizationIsAuthorCheckbox" type="checkbox">
        <label for="organizationIsAuthorCheckbox">Forfatter er en organisasjon</label>
    </div>
</template>

<script lang="ts" setup>

const organizationIsAuthor = ref(false);

onMounted(() => {
    watchEffect(() => {
        if (organizationIsAuthor.value == false) {
            source.value.organizationAuthor = "";
        }
    })
})

function addAuthor() {
    source.value.authors.push({ firstName: "", lastName: "" })
}

function deleteAuthor(index:number) {
    source.value.authors.splice(index, 1)
}

const source = useState<StandardSource>("source");

</script>

<style>
.author {
    @apply flex flex-row gap-4;
}

.author-firstname,
.author-lastname {
    @apply grow rounded-md p-1
}

.trash {
    background-image: url("/trash.png");
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
}
</style>