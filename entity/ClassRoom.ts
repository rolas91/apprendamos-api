import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class ClassRoom{
    @PrimaryGeneratedColumn()
    Id:number;

    @Column({type:'year'})
    Classyear:Date;

    @Column()
    Section:string;

    @Column()
    Status:string;

    @Column()
    TeacherId:number;

    @Column()
    GradeId:number;

}