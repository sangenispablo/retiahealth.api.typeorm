import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

import { Institucion } from './Institucion';

@Entity({ name: "centros_medicos", synchronize: false })
export class CentroMedico {
    @PrimaryGeneratedColumn()
    id_centro: number;

    @Column({length: 100})
	denom_centro: string;

    @Column({length: 150})
	direccion: string;

    @Column({length: 15})
	telefono: string;

    @Column("timestamptz")
	horario_desde: Date;

    @Column("timestamptz")
	horario_hasta: Date;

    @Column({length: 150})
	email_centro: string;

    @Column("int4")
	id_institucion: number;

    @OneToOne(type=>Institucion)
    @JoinColumn({name: "id_institucion"})
    institucion: Institucion

    @Column({length: 50})
	cod_rnhpgd: string;

    @Column({length: 100})
	denom_corta: string;

    @Column("int4")
	estado: number;

    @Column({length: 7})
	abreviatura: string;

    @Column("int4")
	id_tipo_centro: number;

    @Column({length: 300})
	sec_generacion_nhc: string;

    @Column()
	vacunatorio: boolean;

    @Column("float8")
	latitud: number;

    @Column("float8")
	longitud: number;
}

