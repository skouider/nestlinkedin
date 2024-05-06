/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedController } from './feed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedPost } from './entities/feed.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FeedPost])],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
