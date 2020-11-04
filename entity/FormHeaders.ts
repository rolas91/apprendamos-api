import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class FormHeaders{

    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    Name:string;

    @Column()
    Instructions:string;

    @Column()
    Status:string;

    @Column()
    MinAgeMonths:number;

    @Column()
    MinAgeDays:number;

    @Column()
    MaxAgeMonths:number;

    @Column()
    MaxAgeDays:number;
}