import {PrimaryGeneratedColumn,Column, Entity} from 'typeorm';

@Entity()
export class Credential{
    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    Hash:string;

    @Column()
    Salt:string;

    @Column()
    Status:string;

    @Column()
    Index:number;

    @Column({type:"date"})
    CreateDate:Date;
}