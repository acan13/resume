const TYPE = {
    LANGUAGE: 'Language',
    FRAMEWORK: 'Framework',
    CONCEPT: 'Concept',
    WORLD_LANGUAGE: 'World Language',
};

class TechSummaryItem {
    constructor ({
        longName = '',
        shortName = '',
        type,
    }) {
        this.longName = longName;
        this.shortName = shortName || longName;
        this.type = type;
    }
}

export default [
    new TechSummaryItem({
        longName: 'JavaScript',
        type: TYPE.LANGUAGE,
    }),
    new TechSummaryItem({
        longName: 'Python',
        type: TYPE.LANGUAGE,
    }),
    new TechSummaryItem({
        longName: 'Ruby',
        type: TYPE.LANGUAGE,
    }),
    new TechSummaryItem({
        longName: 'SQL',
        type: TYPE.LANGUAGE,
    }),
    new TechSummaryItem({
        longName: 'HTML',
        type: TYPE.LANGUAGE,
    }),
    new TechSummaryItem({
        longName: 'CSS',
        type: TYPE.LANGUAGE,
    }),
    new TechSummaryItem({
        longName: 'SCSS',
        type: TYPE.FRAMEWORK,
    }),
    new TechSummaryItem({
        longName: 'Rails',
        type: TYPE.FRAMEWORK,
    }),
    new TechSummaryItem({
        longName: 'Bootstrap',
        type: TYPE.FRAMEWORK,
    }),
    new TechSummaryItem({
        longName: 'Express.js',
        type: TYPE.FRAMEWORK,
    }),
    new TechSummaryItem({
        longName: 'Vue.js',
        type: TYPE.FRAMEWORK,
    }),
    new TechSummaryItem({
        longName: 'Node.js',
        type: TYPE.FRAMEWORK,
    }),
    new TechSummaryItem({
        longName: 'Django',
        type: TYPE.FRAMEWORK,
    }),
    new TechSummaryItem({
        longName: 'Brazilian Portuguese',
        shortName: 'Portuguese',
        type: TYPE.WORLD_LANGUAGE,
    }),
];
