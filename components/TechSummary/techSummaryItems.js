import { TECH_ITEM_CATEGORIES } from '~/conventions';

class TechSummaryItem {
    constructor ({
        name,
        category,
    }) {
        this.name = name;
        this.category = category;
    }
}

export const techSummaryItems = [
    new TechSummaryItem({
        name: 'JavaScript',
        category: TECH_ITEM_CATEGORIES.LANGUAGES,
    }),
    new TechSummaryItem({
        name: 'Python',
        category: TECH_ITEM_CATEGORIES.LANGUAGES,
    }),
    new TechSummaryItem({
        name: 'SQL',
        category: TECH_ITEM_CATEGORIES.LANGUAGES,
    }),
    new TechSummaryItem({
        name: 'HTML',
        category: TECH_ITEM_CATEGORIES.LANGUAGES,
    }),
    new TechSummaryItem({
        name: 'CSS',
        category: TECH_ITEM_CATEGORIES.LANGUAGES,
    }),
    new TechSummaryItem({
        name: 'SCSS',
        category: TECH_ITEM_CATEGORIES.FRAMEWORKS,
    }),
    new TechSummaryItem({
        name: 'Bootstrap',
        category: TECH_ITEM_CATEGORIES.FRAMEWORKS,
    }),
    new TechSummaryItem({
        name: 'Express.js',
        category: TECH_ITEM_CATEGORIES.FRAMEWORKS,
    }),
    new TechSummaryItem({
        name: 'Vue.js',
        category: TECH_ITEM_CATEGORIES.FRAMEWORKS,
    }),
    new TechSummaryItem({
        name: 'Node.js',
        category: TECH_ITEM_CATEGORIES.FRAMEWORKS,
    }),
    new TechSummaryItem({
        name: 'Django',
        category: TECH_ITEM_CATEGORIES.FRAMEWORKS,
    }),
    new TechSummaryItem({
        name: 'Brazilian Portuguese',
        shortName: 'Portuguese',
        category: TECH_ITEM_CATEGORIES.WORLD_LANGUAGES,
    }),
    new TechSummaryItem({
        name: 'VS Code',
        category: TECH_ITEM_CATEGORIES.TOOLS,
    }),
    new TechSummaryItem({
        name: 'MongoDB',
        category: TECH_ITEM_CATEGORIES.DATABASES,
    }),
    new TechSummaryItem({
        name: 'MSSQL',
        category: TECH_ITEM_CATEGORIES.DATABASES,
    }),
    new TechSummaryItem({
        name: 'PostgreSQL',
        category: TECH_ITEM_CATEGORIES.DATABASES,
    }),
    new TechSummaryItem({
        name: 'S3',
        category: TECH_ITEM_CATEGORIES.AWS,
    }),
    new TechSummaryItem({
        name: 'Cloudfront',
        category: TECH_ITEM_CATEGORIES.AWS,
    }),
    new TechSummaryItem({
        name: 'Route 53',
        category: TECH_ITEM_CATEGORIES.AWS,
    }),
    new TechSummaryItem({
        name: 'EC2',
        category: TECH_ITEM_CATEGORIES.AWS,
    }),
    new TechSummaryItem({
        name: 'Git',
        category: TECH_ITEM_CATEGORIES.TOOLS,
    }),
    new TechSummaryItem({
        name: 'SQL Server Management Studio',
        category: TECH_ITEM_CATEGORIES.TOOLS,
    }),
    new TechSummaryItem({
        name: 'Slack',
        category: TECH_ITEM_CATEGORIES.TOOLS,
    }),
    new TechSummaryItem({
        name: 'IntelliJ',
        category: TECH_ITEM_CATEGORIES.TOOLS,
    }),
    new TechSummaryItem({
        name: 'Amplify',
        category: TECH_ITEM_CATEGORIES.AWS,
    }),
    new TechSummaryItem({
        name: 'MySQL',
        category: TECH_ITEM_CATEGORIES.DATABASES,
    }),
    new TechSummaryItem({
        name: 'CodeBuild',
        category: TECH_ITEM_CATEGORIES.AWS,
    }),
    new TechSummaryItem({
        name: 'CodePipeline',
        category: TECH_ITEM_CATEGORIES.AWS,
    }),
];
