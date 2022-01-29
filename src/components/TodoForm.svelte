<script>
import { addTodo } from "../store/todoStore";
let todo;
const addNewTodo = () => {
    addTodo(todo);
    todo = '';
}

</script>

<form on:submit|preventDefault={addNewTodo}>
    <div class="input-group mb-3">
        <input
            type="text"
            class="form-control"
            v-model="newTodo"
            placeholder="Enter Todo"
            aria-label="Enter todo"
            aria-describedby="button-addon2"
            bind:value={todo}
        />
        <button class="btn btn-outline-secondary"> Add </button>
    </div>
</form>
