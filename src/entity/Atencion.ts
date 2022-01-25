import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne} from 'typeorm';
import { Ambito } from './Ambito';


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

    // Ahora voy a definir una relacion con Ambito
    @OneToOne(type=>Ambito)
    @JoinColumn()
    ambito: Ambito;

    @Column({type: "int4"})
	id_modelo: number;

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