import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity({name: "provincias", synchronize: false})
export class Provincia {
    @PrimaryGeneratedColumn()
    id_provincia: number;

    @Column("varchar")
    denom_provincia: string;

    @Column("integer")
    loc_obligatoria: number;

    @Column("varchar")
    abreviatura: string;
}