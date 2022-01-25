import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

import { PhotoMetadata } from "./PhotoMetadata";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column("text")
  description: string;

  @Column()
  filename: string;

  @Column("int4")
  views: number;

  @Column()
  isPublished: boolean;

  @OneToOne(type => PhotoMetadata)
  @JoinColumn()
  metadata: PhotoMetadata;

}
