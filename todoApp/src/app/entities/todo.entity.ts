export interface Todo {
    name: string;
    description: string;
}

export const makeTodo = (name: string, description: string): Todo  => {
    return {
        name,
        description
    } as Todo;
};
