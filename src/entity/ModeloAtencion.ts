import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

import { CentroMedico} from './CentroMedico';

@Entity({ name: "modelos_atencion", synchronize: false })
export class ModeloAtencion {    
    @PrimaryGeneratedColumn()
    id_modelo: number;

    @Column("int4")
	id_tipo_modelo: number;

    @Column({length:100})
	nombre_modelo: string;

    @Column("timestamptz")
	fec_inicio: Date;

    @Column("timestamptz")
	fec_fin: Date;

    @Column("int4")
	activo: number;

    @Column("int4")
	id_persona: number;

    @Column("int4")
	id_especialidad: number;

    @Column({length:4000})
	observaciones: string;

    @Column("int4")
	id_centro: number;

    @OneToOne(type=>CentroMedico)
    @JoinColumn({name: "id_centro"})
    centro: CentroMedico

    @Column("int4")
	id_consultorio: number;

    @Column("int4")
	tiene_urgencias: number;

    @Column("int4")
	tiene_internaciones: number;

    @Column("int4")
	cant_sobre_turnos: number;

    @Column("int4")
	id_deposito: number;

    @Column("int4")
	tiene_turnos_app: number;
}

