<script>
  import { authHandlers } from "../../store/store";

    let todoList = ["do the groceries"]
    let currTodo = "";
    let error = false;

    function addTodo() {
        error = false;
        if(!currTodo) {
            error = true;
        }
        todoList = [...todoList, currTodo];
        currTodo = "";
    }

    function editTodo(index) {
        let newTodoList = [...todoList].filter((val, i) => {
            return i != index;
        })
        currTodo = todoList[index];
        todoList = newTodoList;
    }

    function removeTodo(index) {
        let newTodoList = [...todoList].filter((val, i) => {
            return i != index;
        })
        todoList = newTodoList
    }
</script>

<div class="mainContainer">
    <div class="headerContainer">
        <h1>Todo List</h1>
        <div class="headerButtons">
            <button><i class="fa-regular fa-floppy-disk"></i><p>Save</p></button>
            <button on:click={authHandlers.logout}><i class="fa-solid fa-right-from-bracket"></i><p>Logout</p></button>
        </div>
    </div>
    <main>
        {#if todoList.length === 0}
        <p>
            You have nothing to do!
        </p>
        {/if}
        {#each todoList as todo, index}
            <div class="todo">
                <p>
                    {index+1}. {todo}
                </p>
                <div class="actions">
                    <i on:click={() => {
                        editTodo(index)
                    }} on:keydown={() => {}} class="fa-regular fa-pen-to-square"></i>
                    <i on:click={() => {
                        removeTodo(index)
                    }} on:keydown={() => {}} class="fa-solid fa-trash-can"></i>
                </div>
            </div>
        {/each}
    </main>
    <div class={"enterTodo" + (error ? "errorBorder"  : "")}>
        <input bind:value={currTodo} type="text" placeholder="Enter Todo"/>
        <button on:click={addTodo}>ADD</button>
    </div>
</div>


<style>
    .mainContainer {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        gap: 24px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
    }

    .headerContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .headerContainer button {
        background: #003C5B;
        color: white;
        padding: 10px 18px;
        border: none;
        border-radius: 4px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }

    .headerContainer button:hover {
        opacity: 0.7;
    }

    .headerButtons {
        display: flex;
        align-items: center;
        gap: 14px;
    }
    main {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
    }

    .todo {
        border-left: 1px solid cyan;
        padding: 8px 14px;  
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.3rem;
    }

    .actions i:hover {
        color: coral;
    }

    .actions i {
        cursor: pointer;
    }

    .enterTodo {
        display: flex;
        align-items: stretch;
        border: 1px solid cyan;
        border-radius: 5px;
        overflow: hidden;
    }

    .enterTodo input {
        background: transparent;
        border: none;
        padding: 14px;
        color:white;
        flex: 1;
    }

    .errorBorder {
        border-color: coral !important;
    }

    .enterTodo input:focus {
        outline: none;
    }

    .enterTodo button {
        padding: 0 28px;
        background: #003C5B;
        border: none;
        color: cyan;
        font-weight: 600;
        cursor: pointer;
    }

    .enterTodo button:hover {
        background: transparent;
    }

</style>