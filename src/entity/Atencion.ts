import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne} from 'typeorm';

import { Ambito } from './Ambito';
import { Financiacion } from './Financiacion';
import { ModeloAtencion } from './ModeloAtencion';

@Entity({name: "atenciones", synchronize: false})
export class Atencion {

    @PrimaryGeneratedColumn({type: "int4"})
    id_atencion: number;

    @Column({ type: 'timestamptz' })
	fec_atencion_ini: Date;

    @Column({ type: 'timestamptz' })
	fec_atencion_fin: Date;

    @Column({type: "int4"})
	id_persona: number;

    @Column({type: "int4"})
	id_paciente: number;

    @Column({type: "int4"})
	id_consultorio: number;

    @Column({type: "int4"})
	id_ambito: number;
    
    @OneToOne(type=>Ambito)
    @JoinColumn({name: "id_ambito"})
    ambito: Ambito;

    @Column({type: "int4"})
	id_modelo: number;

    @OneToOne(type=>ModeloAtencion)
    @JoinColumn({name: "id_modelo"})
    modelo_atencion: ModeloAtencion;

    @Column({type: "int4"})
	id_usuario: number;

    @Column({type: "int4"})
	id_especialidad: number;

    @Column({type: "int4"})
	id_detalle_proc: number;

    @Column({ type: 'timestamptz' })
	fec_carga: Date;

    @Column({type: "int4"})
	id_financiacion: number;

    @OneToOne(type=>Financiacion)
    @JoinColumn({name: "id_financiacion"})
    financiacion: Financiacion;

    @Column({type: "int4"})
	estado: number;

    @Column({ type: 'timestamptz' })
	fec_ingreso_cons: Date;

    @Column({type: "int4"})
	baja_logica: number;

    @Column({type: "int4"})
	id_persona_baja: number;

    @Column({ type: 'timestamptz' })
	fecha_baja: Date;

}