// ENUMS

enum ResourceType {
    BOOK,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON
}

// interface
export interface Resource<T> {
    uid: number;
    resourceName: ResourceType;
    data: T;
}