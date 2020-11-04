import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class FormAreas{

    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    FormId:number;

    @Column()
    AreaId:number;

    @Column({type:"decimal",precision:10, scale:0})
    MinValue:number;

    @Column({type:"decimal",precision:10, scale:0})
    MaxValue:number;
}