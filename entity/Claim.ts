import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

@Entity()
export class Claim{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    Value:string

    @Column()
    Status:string;

    @Column()
    Type:string;
}