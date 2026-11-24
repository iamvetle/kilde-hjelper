const now = new Date();

const bigSource = {
    authors: [{
            firstName: "",
            lastName: ""
        }], 
        website: "",
        blogTitle: "",
        organizationAuthor: "",
        title: "",
        reportNameAndNumber: "",
        publisher: "",
        day: "1",
        month: "1",
        year: "1900",
        url: "",
        retrievedDay: now.getDay().toString(),
        retrievedYear: now.getFullYear().toString(),
        retrievedMonth: now.getMonth().toString(),
}

export { bigSource };