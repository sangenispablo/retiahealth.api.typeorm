import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "financiaciones", synchronize: false })
export class Financiador {
    @PrimaryGeneratedColumn()
    id_financiador: number;

    @Column({length:200})
    denom_financiador: string;

    @Column({length: 20})
    cod_financiador: string;

    @Column({length: 50})
    denom_corta: string;

    @Column({length: 3})
    tipo: string;

    @Column({length: 1})
    ingreso: string;

    @Column({length: 16})
    cuit: string;

    @Column({length: 200})
    razon_social: string;

    @Column({length: 200})
    domicilio: string;

    @Column({length: 10})
    cod_postal: string;

    @Column({length: 100})
    condicion_iva: string;

    @Column("int4")
    facturable: number;

    @Column({length: 150})
    destinatario_entrega: string;

    @Column({length: 200})
    domicilio_local: string;

    @Column("int4")
    id_zona_entrega: number;

    @Column("int4")
    usuario_asig: number;

    @Column({length: 500})
    nota: string;

    @Column({length: 30})
    telefono: string;
}

