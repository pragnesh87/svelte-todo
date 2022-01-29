<script>
    import { todos, removeTodo, toggleDone } from "../store/todoStore";
</script>

<ul class="list-group">
    {#each $todos as todo (todo.id)}
        <li class="list-group-item list-group-item d-flex justify-content-between">
            <h3 class={`${
                todo.done ? 'text-decoration-line-through' : ''
            }`}>{todo.content}</h3>
            <div>
                <button class="btn btn-outline-success" on:click={() => toggleDone(todo.id)}>
                    <i class="bi bi-check-square-fill" />
                </button>
                <button class="btn btn-outline-danger" on:click={() => removeTodo(todo.id)}>
                    <i class="bi bi-x-circle-fill" />
                </button>
            </div>
        </li>
    {/each}
</ul>
