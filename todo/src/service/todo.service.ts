import { CreateTodoDto } from "src/controller/dto/create_todo";
import { Todo } from "./dto/todo";
import { UpdateTodoDto } from "src/controller/dto/update_todo";

export class TodoService{
    private todos: Todo[] = [];
    private idSeq: number = 1;

    create(createTodo: CreateTodoDto): Todo {
        var newTodo = new Todo(this.idSeq++, createTodo.title, createTodo.until, createTodo.content, "admin");
        this.todos.push(newTodo);
        return newTodo;
    }

    getAll(): Todo[]{
        return this.todos;
    }
    
    get(id: number): Todo {
        for(const todo of this.todos) {
            if (todo.id == id) {
                return todo;
            }
        }
        return null;
    }
    
    patch(id: number, updateTodo: UpdateTodoDto): Todo {
        var existTodo: Todo = null;
        for(const i in this.todos) {
            if (this.todos[i].id == id) {
                existTodo = this.todos[i];
                break;
            }
        }
        if (existTodo == null) {
            return null;
        }

        existTodo.title = updateTodo.title;
        existTodo.until = updateTodo.until;
        existTodo.content = updateTodo.content;
        existTodo.updatedAt = new Date();
        return existTodo;
    }

    delete(id: number) {
        for(const i in this.todos) {
            if (this.todos[i].id == id) {
                this.todos = this.todos.splice(Number(i), 1);
                break;
            }
        }

    }
}