import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class PhotoMetadata {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int4")
    height: number;

    @Column("int4")
    width: number;

    @Column({ length: 100 })
    orientation: string;

    @Column()
    compressed: boolean;

    @Column()
    comment: string;
}