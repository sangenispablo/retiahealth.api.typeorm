import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity({name: "ambito", synchronize: false})
export class Ambito {
    @PrimaryGeneratedColumn()
    id_ambito: number;

    @Column("varchar")
    denom_ambito: string;

    @Column("varchar")
    abreviatura: string;
    
}