import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'resources list';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `recurso unico ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
