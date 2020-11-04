import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class Attendanceplan{

    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    AttendanceId:number;

    @Column()
    ActionPlanId:number;
}