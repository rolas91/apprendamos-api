import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class Attendance{
    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    Date:Date;

    @Column()
    FormId:number;

    @Column()
    StudentId:number;

    @Column()
    ApplicatorId:number;

    @Column()
    Status:string;
}