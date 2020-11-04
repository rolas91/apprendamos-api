import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class Grade{

    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    Description:string;

    @Column()
    LocationId:number;

    @Column()
    MinAgeYears:number;

    @Column()
    MaxAgeYears:number;

    @Column()
    MinAgeMonths:number;
    MaxAgeMonths:number;
}