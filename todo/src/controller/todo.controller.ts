import{Controller, Req, Get, Post, Delete, Patch, Body, Res, HttpStatus, HttpCode} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateTodoDto } from './dto/create_todo';
import { TodoService } from 'src/service/todo.service';
import { UpdateTodoDto } from './dto/update_todo';

@Controller('todo')
export class TodoController{
    constructor(private readonly todoService: TodoService) {}
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(@Req() request: Request) {
        return this.todoService.getAll();
    }

    @Get(":id")
    @HttpCode(HttpStatus.OK)
    get(@Req() request: Request) {
        return this.todoService.get(Number(request.params.id));
    }

    @Post("")
    @HttpCode(HttpStatus.CREATED)
    createTodo(@Body() CreateTodoDto: CreateTodoDto) {
        return this.todoService.create(CreateTodoDto);
    }

    @Patch(":id")
    @HttpCode(HttpStatus.OK)
    patchTodo(@Req() request: Request, @Body() updateTodo: UpdateTodoDto) {
        return this.todoService.patch(Number(request.params.id), updateTodo);
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteTodo(@Req() request: Request) {
        return this.todoService.delete(Number(request.params.id));
    }
}