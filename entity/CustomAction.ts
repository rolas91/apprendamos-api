import {PrimaryGeneratedColumn, Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class CustomAction{

    @PrimaryColumn()
    Id:number;

    @Column()
    Name:string;

    @Column()
    Description:string

    @Column()
    AttendanceId:number;
}

