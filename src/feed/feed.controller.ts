/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FeedPost } from './entities/feed.entity';
import { FeedService } from './feed.service';
import { Observable } from 'rxjs';

@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Post()
  create(@Body() feedPost: FeedPost) {
    return this.feedService.create(feedPost);
  }

  @Get()
  findAll() {
    return this.feedService.findAll();
  }

  @Get('/skip')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findSelected(@Query('take') take:number=1, @Query('skip') skip:number = 1 ):Observable<FeedPost[]>{
   take = take > 20 ? 20 : take  
    return this.feedService.findPosts(take,skip)
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.feedService.findOne(+id);
  // }



  @Patch(':id')
  update(@Param('id') id: string, @Body() feedPost: FeedPost) {
    return this.feedService.update(+id, feedPost);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedService.remove(+id);
  }
}
