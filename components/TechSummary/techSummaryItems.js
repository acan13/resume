export const TYPE = {
    LANGUAGE: 'Language',
    FRAMEWORK: 'Framework',
    // CONCEPT: 'Concept',
    WORLD_LANGUAGE: 'World Language',
};

export const COMFORT_LEVEL = {
    LIMITED_EXPERIENCE: 'Limited Experience',
    WORKING_PROFICIENCY: 'Working Proficiency',
    ADVANCED_PROFICIENCY: 'Advanced Proficiency',
};

class TechSummaryItem {
    constructor ({
        longName = '',
        shortName = '',
        comfortLevel = COMFORT_LEVEL.WORKING_PROFICIENCY,
        type = TYPE.FRAMEWORK,
    }) {
        this.longName = longName;
        this.shortName = shortName || longName;
        this.comfortLevel = comfortLevel;
        this.type = type;
    }
}

export const techSummaryItems = [
    new TechSummaryItem({
        longName: 'JavaScript',
        comfortLevel: COMFORT_LEVEL.ADVANCED_PROFICIENCY,
        type: TYPE.LANGUAGE,
    }),
    new TechSummaryItem({
        longName: 'Python',
        comfortLevel: COMFORT_LEVEL.WORKING_PROFICIENCY,
        type: TYPE.LANGUAGE,
    }),
    new TechSummaryItem({
        longName: 'SQL',
        comfortLevel: COMFORT_LEVEL.WORKING_PROFICIENCY,
        type: TYPE.LANGUAGE,
    }),
    new TechSummaryItem({
        longName: 'HTML',
        comfortLevel: COMFORT_LEVEL.WORKING_PROFICIENCY,
        type: TYPE.LANGUAGE,
    }),
    new TechSummaryItem({
        longName: 'CSS',
        comfortLevel: COMFORT_LEVEL.WORKING_PROFICIENCY,
        type: TYPE.LANGUAGE,
    }),
    new TechSummaryItem({
        longName: 'SCSS',
        comfortLevel: COMFORT_LEVEL.WORKING_PROFICIENCY,
        type: TYPE.FRAMEWORK,
    }),
    new TechSummaryItem({
        longName: 'Bootstrap',
        comfortLevel: COMFORT_LEVEL.WORKING_PROFICIENCY,
        type: TYPE.FRAMEWORK,
    }),
    new TechSummaryItem({
        longName: 'Express.js',
        comfortLevel: COMFORT_LEVEL.WORKING_PROFICIENCY,
        type: TYPE.FRAMEWORK,
    }),
    new TechSummaryItem({
        longName: 'Vue.js',
        comfortLevel: COMFORT_LEVEL.ADVANCED_PROFICIENCY,
        type: TYPE.FRAMEWORK,
    }),
    new TechSummaryItem({
        longName: 'Node.js',
        comfortLevel: COMFORT_LEVEL.WORKING_PROFICIENCY,
        type: TYPE.FRAMEWORK,
    }),
    new TechSummaryItem({
        longName: 'Django',
        comfortLevel: COMFORT_LEVEL.LIMITED_EXPERIENCE,
        type: TYPE.FRAMEWORK,
    }),
    new TechSummaryItem({
        longName: 'Brazilian Portuguese',
        shortName: 'Portuguese',
        comfortLevel: COMFORT_LEVEL.ADVANCED_PROFICIENCY,
        type: TYPE.WORLD_LANGUAGE,
    }),
    new TechSummaryItem({
        longName: 'Nuxt.js',
        comfortLevel: COMFORT_LEVEL.WORKING_PROFICIENCY,
        type: TYPE.FRAMEWORK,
    }),
];
