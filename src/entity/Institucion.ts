import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "instituciones", synchronize: false })
export class Institucion {
    @PrimaryGeneratedColumn()
    id_institucion: number;

    @Column({length: 100})
	denom_institucion: string;

    @Column({length: 150})
	domicilio: string;

    @Column("int4")
	id_localidad: number;

    @Column({length: 12})
	posicion_iva: string;

    @Column({length: 20})
	cuit: string;

    @Column({ type: "numeric",precision: 10, scale: 2 })
	gasto_cupon: number;

    @Column({ type: "numeric",precision: 10, scale: 2 })
	comision: number;

    @Column({length: 4})
	abreviatura: string;

    @Column("int4")
	estado: number;

    @Column({ type: "numeric",precision: 10, scale: 2 })
	porcent_desc: number;

    @Column("int4")
	tipo_desc: number;

    @Column({length: 200})
	nombre_logo: string;

    @Column("int4")
	percepcion_iva: number;

    @Column("int4")
	cant_dias_pronto_pago: number;

    @Column("int4")
	cant_sem_huecos: number;

    @Column({length: 150})
	sitio_emisior: string;

    @Column({length: 150})
	usuario_traditum: string;

    @Column({length: 150})
	clave_traditum: string;

    @Column("int2")
	sector: number;

    @Column("int4")
	id_tipo_inst: number;

    @Column({length: 30})
	ingresos_brutos: string;

    @Column("timestamptz")
	inicio_actividades: Date;

    @Column("int4")
	punto_venta: number;
}

