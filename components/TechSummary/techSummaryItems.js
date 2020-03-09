class TechSummaryItem {
    constructor ({
        longName = '',
        shortName = '',
        yearsExperience = 0,
        experienceLevel,
        link = '',
        type,
    }) {
        this.longName = longName;
        this.shortName = shortName;
        this.yearsExperience = yearsExperience;
        this.experienceLevel = experienceLevel;
        this.link = link;
        this.type = type;
    }
}

export default [
    new TechSummaryItem({
        longName: "JavaScript",
        shortName: "JavaScript",
        yearsExperience: 3,
    }),
    new TechSummaryItem({
        longName: "Python",
        shortName: "Python",
        yearsExperience: 2,
    }),
    new TechSummaryItem({
        longName: "Ruby",
        shortName: "Ruby",
        yearsExperience: 1,
    }),
    new TechSummaryItem({
        longName: "SQL",
        shortName: "SQL",
        yearsExperience: 1,
    }),
    new TechSummaryItem({
        longName: "MSSQL",
        shortName: "MSSQL",
        yearsExperience: 1,
    }),
    new TechSummaryItem({
        longName: "Express.js",
        shortName: "Express.js",
        yearsExperience: 1,
    }),
    new TechSummaryItem({
        longName: "Vue.js",
        shortName: "Vue.js",
        yearsExperience: 1,
    }),
    new TechSummaryItem({
        longName: "Node.js",
        shortName: "Node.js",
        yearsExperience: 1,
    }),
    new TechSummaryItem({
        longName: "Django",
        shortName: "Django",
        yearsExperience: 1,
    }),
    new TechSummaryItem({
        longName: "Brazilian Portuguese",
        shortName: "Portuguese",
        yearsExperience: 1,
    }),
];
