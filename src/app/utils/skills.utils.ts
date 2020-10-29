export interface Skill {
    name: string;
    level: number;
};

const makeSkill = (name: string, level: number): Skill => {
    return {
        name,
        level
    } as Skill;
};

export const makeTechnicalSkills = (): Skill[] => {
    return [
        makeSkill('C# .Net', 3),
        makeSkill('Java', 3),
        makeSkill('Angular Typescript', 3),
        makeSkill('NodeJS', 3),
        makeSkill('Javascript', 3),
        makeSkill('WPF .Net Framework', 2),
        makeSkill('C# ASP.NET Core', 2),
    ];
};

export const makeSystemSkills = (): Skill[] => {
    return [
        makeSkill('Windows', 4),
        makeSkill('GNU / Linux', 2),
        makeSkill('Oracle Database', 3),
        makeSkill('PostgresSQL Databse', 3),
        makeSkill('InnoDB Engine Databse', 3),
        makeSkill('MongoDB', 2),
    ];
};

export const makeToolsSkills = (): Skill[] => {
    return [
        makeSkill('Git', 4),
        makeSkill('Github', 3),
        makeSkill('Azure DevOps', 2),
        makeSkill('Gitlab', 2),
        makeSkill('Pack Office', 4),
    ];
};

export const makeFunctionnalSkills = (): Skill[] => {
    return [
        makeSkill('Autonomie', 3),
        makeSkill('Capacités rédactionnelles', 4),
        makeSkill('Agile managment', 3),
        makeSkill('Little project managment', 2),
        makeSkill('CI / CD', 3),
        makeSkill('DevOps', 2),
    ];
};
