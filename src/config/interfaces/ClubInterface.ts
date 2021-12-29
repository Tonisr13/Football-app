import { ITeamsArea } from "./TeamsInterface";

export interface IClub {
    activeCompetitions: IActiveCompetitions[];
    address: string;
    area: ITeamsArea;
    clubColors: string;
    crestUrl?: string;
    email?: string;
    founded: number;
    id: number;
    lastUpdated?: string;
    name: string;
    phone?: string;
    shortName: string;
    squad: ISquad[];
    tla: string;
    venue: string;
    website?: string;
}

export interface IActiveCompetitions {
    area: ITeamsArea;
    code: string;
    id: number;
    lastUpdated?: string;
    name: string;
    plan: string;
}

export interface ISquad {
    countryOfBirth: string;
    dateOfBirth: string;
    id: number;
    name: string;
    nationality?: string;
    position: string;
    role: string;
    shirtNumber?: string;
}