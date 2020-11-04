import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class FormPlan{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    FormId:number;

    @Column()
    ActionPlanId:number;
}