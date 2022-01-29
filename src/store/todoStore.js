import { writable } from "svelte/store"

export const todos = writable([]);

export const addTodo = (item) => {
    const newItem = {
        id: Date.now(),
        done: false,
        content: item
    };

    todos.update(cur => [...cur, newItem]);
}

export const removeTodo = (item) => {
    todos.update((todos) => todos.filter((todo) => todo.id !== item));
}

export const toggleDone = (item) => {
    todos.update((todos) => {
        return todos.map((todo) => {
            if(todo.id == item){
                todo.done = !todo.done;
            }

            return todo;
        });
    });
}