import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';


import { UsersService } from './shared/users.service'
import { User } from './shared/user'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('/create')
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user)

  }

  @Get()
  get(): String {
    return 'Hello World'
  }

  //Acha um buscando pelo body passado na req
  @Get('/ver')
  async listOne(@Body() body: Body): Promise<any> {
    return this.usersService.listOne(body)
  }

}
