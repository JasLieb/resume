import * as uuid from 'uuid';

export interface Todo {
    id: string;
    name: string;
    description: string;
}

export const makeEmptyTodo = (): Todo  => {
    return makeTodo(
        uuid.v4(),
        '',
        ''
    );
};

export const makeTodo = (id: string, name: string, description: string): Todo => {
    return {
        id,
        name,
        description
    } as Todo;
};
