/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import { FeedPost } from './entities/feed.entity';

@Injectable()
export class FeedService {
  

  constructor(@InjectRepository(FeedPost) private readonly feedPostRepository:Repository<FeedPost>){

  }

  create(feedPost: FeedPost):Observable<FeedPost> {
    return from(this.feedPostRepository.save(feedPost)) ;
  }

  findAll():Observable<FeedPost[]> {
    return from(this.feedPostRepository.find());
  }

  find
  // findOne(option: FindOneOptions) {
  //   return this.feedPostRepository.findOneBy(option);
  // }

  update(id: number, feedPost: FeedPost):Observable<UpdateResult> {
    return from(this.feedPostRepository.update(id,feedPost));
  }

  remove(id: number) {
    return `This action removes a #${id} feed`;
  }

  findPosts(take: number = 10, skip: number = 0): Observable<FeedPost[]> {
  return from(this.feedPostRepository.findAndCount({take,skip}).then(([posts])=>{
    return <FeedPost[]>posts
  }))  
  }

}
