import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class Area{
    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    Name:string;

    @Column()
    Status:string;
}