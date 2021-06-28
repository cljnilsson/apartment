import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, BaseEntity } from "typeorm";
import Apartment from "./apartment";

@Entity()
class Tag extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50, default: ""})
    name: string;
	
	@ManyToOne(() => Apartment, apartment => apartment.tags)
	parent: Apartment;
}

export default Tag;