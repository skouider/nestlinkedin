/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FeedPost {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({default:''})
    body:string;
    @CreateDateColumn()
    createdAt:Date;
}
