import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

import { Financiador } from "../entity/Financiador";

@Entity({name: "financiaciones", synchronize: false})
export class Financiacion {

    @PrimaryGeneratedColumn()
    id_financiacion: number;

    @Column("int4")
	id_financiador: number;

    @OneToOne(type=>Financiador)
    @JoinColumn({name: "id_financiador"})
    financiador: Financiador

    @Column("int4")
	id_paciente: number;

    @Column("int4")
	is_activo: number;

    @Column({length:50})
	nro_afiliado: string;

    @Column({ type: 'timestamptz' })
	fec_actualizacion: Date;

    @Column({type: "bytea"})
	codem: Buffer

    @Column({length: 10})
	medio_actualizacion: string;

    @Column({length: 150})
	cod_seg_trad: string;

    @Column({type: "timestamptz"})
	fecha_ultima_validacion: Date
}