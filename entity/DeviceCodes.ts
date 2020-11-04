import {PrimaryGeneratedColumn, Column, Entity} from 'typeorm';

export class DeviceCodes{

    @PrimaryGeneratedColumn()
    UserCode:number;

    @Column()
    DeviceCode:string;

    @Column()
    SubjectId:string;

    @Column()
    ClientId:string;

    @Column({type:"datetime"})
    CreationTime:Date;

    @Column({type:"datetime"})
    Expiration:Date;

    @Column({type:"longtext"})
    Data:string;
}