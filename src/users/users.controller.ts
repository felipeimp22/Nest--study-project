import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';


import { UsersService } from './shared/users.service'
import { User } from './shared/user.dto'

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
  @Get('/bodyFind')
  async bodyFind(@Body() body: Body): Promise<any> {
    return this.usersService.listOne(body)
  }


  @Get('/findAll')
  async findAll(): Promise<any> {
    return this.usersService.findAll()
  }

  @Get(':id')
  async findByIdParam(@Param('id') id: string) {
    return this.usersService.findByIdParam(id)
  }

}
