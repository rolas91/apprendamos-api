import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    Id:number;

    @Column()
    Dni: number;


    @Column()
    EarlyBirthAmount:number;

    @Column()
    Email: string;

    @Column()
    FirstName: string;

    @Column()
    Gender: string;

    @Column({type: "datetime", default: () => "CURRENT_TIMESTAMP"})
    JoinDate: Date;

    @Column({type: "datetime", default: () => "CURRENT_TIMESTAMP"})
    LastLogin:Date;

    @Column()
    LastName: string;

    @Column()
    LocationId:number;

    @Column()
    Mobile: string;

    @Column()
    Phone: string;

    @Column()
    RoleId: number;

    @Column()
    sponsorId: number;

    @Column()
    Status: string;
}