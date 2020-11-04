import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class ActionPlan{
    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    AreaId:number;

    @Column()
    Name:string;

    @Column()
    Description:string;

    @Column()
    Status:string;
}
