import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'


import { User } from './user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
  async Hello() {
    return 'Hello World'
  }

  async create(user: User) {
    const createdTask = new this.userModel(user)

    return await createdTask.save();
  }
  async listOne(body) {
    const { name } = body
    return this.userModel.find({ 'name': name })
  }
  async findAll() {
    return this.userModel.find().exec()
  }
  async findByIdParam(id) {

    return this.userModel.find({ _id: id })
  }

}
