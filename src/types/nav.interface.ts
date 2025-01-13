export interface INav {
    label: string;
    route: string;
}

export interface ISection {
    // I don't know why I required an ID here, but I'll leave it like that for now.
    id: string;
    title: string;
    description: string;
}
