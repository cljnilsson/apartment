import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import Image from "./image";
import Tag from "./tag";

@Entity()
class Apartment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    // Ad

    @Column({length: 50})
	title: string;

    @Column()
	description: string;

    @OneToMany(() => Image, image => image.parent, {eager: true})
    images: Image[];

    @OneToMany(() => Tag, t => t.parent, {eager: true})
    tags: Tag[];

    // information

    @Column()
    buildingtype: string;

    @Column()
    area: string;

    @Column()
    price: number;

    @Column()
    bedroom: number;

    @Column()
    bathroom: number;

    @Column()
    rooms: number;
	
	@Column()
    floor: number;

    @Column()
    maxfloor: number;

    @Column()
    size: number;

    @CreateDateColumn()
    created: Date;
}

export default Apartment;